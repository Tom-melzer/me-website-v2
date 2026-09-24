import type { Metadata } from 'next';
import SiteFooter from '../site-footer';
import SiteHeader from '../site-header';

export const metadata: Metadata = {
  title: 'Impressum | ME AI.Support',
  description: 'Anbieterkennzeichnung und Kontaktdaten der ME AI.Support GmbH.',
};

export default function ImpressumPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <header className="legal-hero">
          <span className="section-kicker">Anbieterkennzeichnung</span>
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).</p>
        </header>

        <div className="legal-grid">
          <section className="legal-card legal-card-primary">
            <span className="legal-label">Anbieter</span>
            <h2>ME AI.Support GmbH</h2>
            <address>Pionierweg 3<br />56348 Patersberg<br />Deutschland</address>
          </section>

          <section className="legal-card">
            <span className="legal-label">Vertretung</span>
            <h2>Geschäftsführung</h2>
            <p>Martin Melzer</p>
          </section>

          <section className="legal-card">
            <span className="legal-label">Kontakt</span>
            <h2>Direkt erreichbar</h2>
            <p><a href="tel:+496771930093">+49 6771 930093</a><br /><a href="mailto:info@meai.support">info@meai.support</a></p>
          </section>

          <section className="legal-card">
            <span className="legal-label">Register</span>
            <h2>Handelsregister</h2>
            <p>Amtsgericht Koblenz<br />HRB 31290</p>
          </section>

          <section className="legal-card legal-card-wide">
            <span className="legal-label">Inhaltlich verantwortlich</span>
            <h2>Verantwortung für Inhalte</h2>
            <p>Martin Melzer, Anschrift wie oben.</p>
          </section>

          <section className="legal-card legal-card-wide">
            <span className="legal-label">Verbraucherstreitbeilegung</span>
            <h2>Hinweis nach § 36 VSBG</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>
        </div>

        <p className="legal-updated">Stand: September 2026</p>
      </article>
      <SiteFooter note="ME AI.Support GmbH · Patersberg" />
    </main>
  );
}
