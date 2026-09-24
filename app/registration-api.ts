export type RegistrationFields = {
  requested_account_type: 'company' | 'manufacturer';
  given_name: string;
  family_name: string;
  email: string;
  organisation_name: string;
};

export const registrationEndpoint = 'https://backend.meai.support/api/inquiry/create';

// Mirrors the existing ME landing-page contract. No credentials or app session
// are needed for this public inquiry endpoint. Never automatically retry a POST.
export async function sendRegistration(fields: RegistrationFields, request: typeof fetch = fetch) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20_000);
  try {
    const response = await request(registrationEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
      redirect: 'error',
      signal: controller.signal,
      body: JSON.stringify({
        requested_account_type: fields.requested_account_type,
        given_name: fields.given_name.trim(),
        family_name: fields.family_name.trim(),
        email: fields.email.trim(),
        organisation_name: fields.organisation_name.trim(),
        message: null,
        organisation_size_id: 1,
      }),
    });
    if (response.status === 429) throw new Error('Es wurden zu viele Anfragen gesendet. Bitte warten Sie einige Minuten, bevor Sie es erneut versuchen.');
    if (response.status === 409) throw new Error('Die Anfrage konnte wegen eines bestehenden Eintrags nicht angelegt werden. Bitte kontaktieren Sie uns, damit wir Ihre Anmeldung prüfen können.');
    if (response.status === 400 || response.status === 422) throw new Error('Die Angaben wurden nicht angenommen. Bitte prüfen Sie die Felder oder kontaktieren Sie uns.');
    if (!response.ok) throw new Error('Die Übermittlung wurde nicht bestätigt. Bitte kontaktieren Sie uns, bevor Sie erneut absenden, damit keine doppelte Anfrage entsteht.');
    const result: unknown = await response.json();
    // A successful creation returns the inquiry including its numeric ID.
    if (!result || typeof result !== 'object' || !('id' in result) || typeof result.id !== 'number' || !Number.isSafeInteger(result.id) || result.id <= 0) {
      throw new Error('Wir konnten die Eingangsbestätigung nicht auswerten. Bitte kontaktieren Sie uns, bevor Sie erneut absenden.');
    }
    return result.id;
  } finally {
    clearTimeout(timer);
  }
}
