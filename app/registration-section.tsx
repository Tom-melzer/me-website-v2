'use client';

import { sitePath } from './site-path';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { sendRegistration, type RegistrationFields } from './registration-api';
import { contactHref } from './contact-button';

export default function RegistrationSection() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [inquiryId, setInquiryId] = useState<number | null>(null);
  const submitting = useRef(false);
  const feedback = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (error || inquiryId !== null) feedback.current?.focus();
  }, [error, inquiryId]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current || inquiryId !== null) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const type = values.get('requested_account_type');
    if (type !== 'company' && type !== 'manufacturer') return;
    const fields: RegistrationFields = {
      requested_account_type: type,
      given_name: String(values.get('given_name') ?? '').trim(),
      family_name: String(values.get('family_name') ?? '').trim(),
      email: String(values.get('email') ?? '').trim(),
      organisation_name: String(values.get('organisation_name') ?? '').trim(),
    };
    if (Object.values(fields).some(value => !value)) {
      setError('Bitte füllen Sie alle Pflichtfelder aus. Leerzeichen allein reichen nicht aus.');
      return;
    }
    submitting.current = true;
    setPending(true);
    setError('');
    try {
      const id = await sendRegistration(fields);
      form.reset();
      setInquiryId(id);
    } catch (reason) {
      setError(reason instanceof Error && reason.name === 'Error'
        ? reason.message
        : 'Wir konnten den Eingang Ihrer Anfrage nicht bestätigen. Bitte kontaktieren Sie uns vor einem erneuten Versand, um eine doppelte Anfrage zu vermeiden.');
    } finally {
      submitting.current = false;
      setPending(false);
    }
  }

  return (
    <section className="registration-section" id="anmelden" aria-labelledby="registration-form-title">
      <div className="registration-layout">
        <div className="registration-intro">
          <span className="section-kicker">Ihr Einstieg mit ME</span>
          <h2 id="registration-form-title">Betrieb anmelden</h2>
          <p>Bringen Sie ME in Ihren Betrieb. Senden Sie uns Ihre Zugangsanfrage – direkt hier, ohne Umweg.</p>
          <ol className="registration-steps">
            <li><span>01</span><div><strong>Anfrage senden</strong><p>Ein paar Angaben zu Ihnen und Ihrem Unternehmen.</p></div></li>
            <li><span>02</span><div><strong>Wir prüfen Ihren Zugang</strong><p>Ihre Anfrage geht direkt in unserem ME-Adminbereich ein.</p></div></li>
            <li><span>03</span><div><strong>Gemeinsam starten</strong><p>Wir melden uns bei Ihnen zu Freigabe und nächsten Schritten.</p></div></li>
          </ol>
          <p className="registration-help">Noch eine Frage? <a href={contactHref}>Schreiben Sie unserem Entwicklerteam</a></p>
        </div>
        <div className="registration-card">
          {inquiryId !== null ? (
            <div className="registration-success" ref={feedback} tabIndex={-1} role="status">
              <span className="registration-check" aria-hidden="true">✓</span>
              <h3>Ihre Anfrage ist eingegangen.</h3>
              <p>Vielen Dank für Ihr Interesse an ME. Wir prüfen Ihre Anfrage und melden uns bei Ihnen. Ihr App-Zugang ist noch nicht automatisch freigeschaltet.</p>
              <p className="registration-reference">Anfragenummer: {inquiryId}</p>
              <a className="button button-primary" href={contactHref}>Fragen? Kontakt aufnehmen</a>
            </div>
          ) : (
            <form onSubmit={submit} aria-label="Zugang zu ME anfragen" aria-busy={pending}>
              <h3>Betrieb anmelden</h3>
              <p className="registration-subtitle">Zugang anfragen. Persönlich begleitet starten.</p>
              <fieldset disabled={pending} className="registration-fields">
                <legend className="sr-only">Angaben für Ihre Zugangsanfrage</legend>
                <fieldset className="registration-account-type">
                  <legend>Ihr Unternehmen *</legend>
                  <label><input type="radio" name="requested_account_type" value="company" required /> Firma / Fachbetrieb</label>
                  <label><input type="radio" name="requested_account_type" value="manufacturer" required /> Hersteller</label>
                </fieldset>
                <div className="registration-name-row">
                  <label htmlFor="register-given-name">Vorname *<input id="register-given-name" name="given_name" autoComplete="given-name" maxLength={150} required /></label>
                  <label htmlFor="register-family-name">Nachname *<input id="register-family-name" name="family_name" autoComplete="family-name" maxLength={150} required /></label>
                </div>
                <label htmlFor="register-email">Geschäftliche E-Mail *<input id="register-email" name="email" type="email" autoComplete="email" maxLength={254} required /></label>
                <label htmlFor="register-company">Unternehmensname *<input id="register-company" name="organisation_name" autoComplete="organization" maxLength={250} required /></label>
                <p className="registration-privacy">* Pflichtfelder. Mit dem Absenden übermitteln Sie Ihre Angaben direkt an ME AI.Support zur Bearbeitung Ihrer Zugangsanfrage. Weitere Informationen finden Sie in unserer <a href={sitePath('/datenschutz/#registrierung')} target="_blank" rel="noreferrer">Datenschutzerklärung (neuer Tab)</a>. Sie erteilen damit keine Werbeeinwilligung.</p>
                <button className="button button-primary registration-submit" type="submit">{pending ? 'Anfrage wird gesendet …' : 'Zugang anfragen'}<span aria-hidden="true">→</span></button>
              </fieldset>
              {error && <div className="registration-error" role="alert" ref={feedback} tabIndex={-1}><strong>Bitte beachten</strong><p>{error}</p><a href={contactHref}>contact@meai.support</a></div>}
              <p className="registration-note">Die Anfrage ist keine kostenpflichtige Bestellung. Die Freigabe erfolgt nach Prüfung durch unser Team.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
