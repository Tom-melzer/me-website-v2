export type LoginTenant = { name: string; subdomain: string };

export const tenantLookupEndpoint = 'https://backend.meai.support/api/tenant/get_tenants_by_email';
const subdomainPattern = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;

export function normalizeLoginEmail(value: string): string {
  const email = value.trim();
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
  }
  return email;
}

// Matches buildTenantLoginEntryUrl from the ME app, with an explicit app origin.
// Never derive this from the marketing website's hostname (meai.support).
export function buildTenantLoginEntryUrl(subdomain: string, email: string): string {
  if (!subdomainPattern.test(subdomain)) throw new Error('Die Firmenadresse konnte nicht zugeordnet werden.');
  const url = new URL(`https://${subdomain}.frontend.meai.support/login`);
  url.searchParams.set('email', normalizeLoginEmail(email));
  return url.toString();
}

export function parseLoginTenants(value: unknown): LoginTenant[] {
  if (!Array.isArray(value)) throw new Error('Die Firmenzuordnung konnte nicht ausgewertet werden.');
  const tenants = new Map<string, LoginTenant>();
  for (const tenant of value) {
    if (!tenant || typeof tenant !== 'object' || typeof tenant.name !== 'string' || !tenant.name.trim() || typeof tenant.subdomain !== 'string' || !subdomainPattern.test(tenant.subdomain)) {
      throw new Error('Die Firmenzuordnung konnte nicht ausgewertet werden.');
    }
    tenants.set(tenant.subdomain, { name: tenant.name, subdomain: tenant.subdomain });
  }
  return [...tenants.values()];
}

export async function fetchLoginTenants(email: string, signal?: AbortSignal, request: typeof fetch = fetch): Promise<LoginTenant[]> {
  const url = new URL(tenantLookupEndpoint);
  url.searchParams.set('email', normalizeLoginEmail(email));
  const timeout = AbortSignal.timeout(20_000);
  let response: Response;
  try {
    response = await request(url.toString(), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
      cache: 'no-store',
      redirect: 'error',
      signal: signal ? AbortSignal.any([signal, timeout]) : timeout,
    });
  } catch {
    if (signal?.aborted) throw new Error('Abfrage abgebrochen.');
    throw new Error(timeout.aborted ? 'Die Abfrage dauert zu lange. Bitte versuchen Sie es erneut.' : 'Die Firmenzuordnung ist gerade nicht erreichbar. Bitte versuchen Sie es erneut.');
  }
  if (response.status === 404) return [];
  if (response.status === 429) throw new Error('Zu viele Anfragen. Bitte warten Sie einen Moment und versuchen Sie es erneut.');
  if (!response.ok) throw new Error('Die Firmenzuordnung ist gerade nicht verfügbar. Bitte versuchen Sie es erneut.');
  let data: unknown;
  try { data = await response.json(); } catch { throw new Error('Die Firmenzuordnung konnte nicht ausgewertet werden.'); }
  return parseLoginTenants(data);
}
