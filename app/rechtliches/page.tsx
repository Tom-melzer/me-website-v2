import type { Metadata } from 'next';
import SiteFooter from '../site-footer';
import SiteHeader from '../site-header';

export const metadata: Metadata = {
  title: 'Rechtliche Hinweise | ME AI.Support',
  description: 'Rechtliche Hinweise zur Website und zu den Produktinformationen von ME AI.Support.',
};

export default function RechtlichesPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <header className="legal-hero">
          <span className="section-kicker">Hinweise zur Nutzung</span>
          <h1>Rechtliche Hinweise</h1>
          <p>Wichtige Informationen zu Website, Fachinhalten und Produktdarstellung.</p>
        </header>
        <div className="legal-sections">
          <section><span>01</span><div><h2>Technische Fachinformationen</h2><p>ME unterstützt Fachkräfte bei Recherche, Dokumentation und Einordnung technischer Informationen. KI-generierte Antworten können trotz sorgfältiger Quellenarbeit unvollständig oder fehlerhaft sein. Sie ersetzen nicht die fachliche Prüfung durch qualifiziertes Personal. Herstellerangaben, geltende technische Regeln, Sicherheitsvorschriften und gesetzliche Vorgaben haben stets Vorrang.</p></div></section>
          <section><span>02</span><div><h2>Keine Handlungsfreigabe</h2><p>Informationen auf dieser Website und innerhalb der Produktdarstellung sind keine eigenständige Freigabe für Arbeiten an elektrischen, kältetechnischen, druckführenden oder sonstigen sicherheitsrelevanten Anlagen. Arbeiten dürfen nur von entsprechend qualifizierten und befugten Personen durchgeführt werden.</p></div></section>
          <section><span>03</span><div><h2>Produktinformationen und Anmeldung</h2><p>Diese Website stellt ME für Betriebe und technische Fachkräfte vor. Angaben zum Dokumentenbestand beschreiben den Integrationsstand und bedeuten nicht, dass jedes Dokument für jedes Modell bereits verfügbar ist. Maßgeblich für den vereinbarten Leistungsumfang sind die jeweiligen Vertragsunterlagen; zwingende gesetzliche Rechte bleiben unberührt.</p><p>„Betrieb anmelden“ führt zum Formular auf dieser Landingpage. Mit „Zugang anfragen“ senden Sie eine Anfrage an ME AI.Support, keine kostenpflichtige Bestellung. Unser Team prüft die Anfrage und meldet sich zu den nächsten Schritten. Eine automatische Freischaltung erfolgt nicht. Vor einem Vertragsabschluss erhalten Sie die maßgeblichen Leistungs-, Preis- und Vertragsinformationen.</p></div></section>
          <section><span>04</span><div><h2>Urheberrecht und Kennzeichen</h2><p>Inhalte dieser Website können urheberrechtlich geschützt sein. Soweit eine Nutzung nicht gesetzlich erlaubt ist, ist die Zustimmung der jeweiligen Rechteinhaber erforderlich. Genannte Hersteller-, Produkt- und Unternehmensnamen können geschützte Marken ihrer jeweiligen Inhaber sein. Ihre Nennung dient der Produktbeschreibung und bedeutet für sich genommen keine Partnerschaft, Zertifizierung oder Empfehlung durch diese Unternehmen.</p></div></section>
          <section><span>05</span><div><h2>Externe Links</h2><p>Für Inhalte externer Websites sind deren Betreiber verantwortlich. Wir prüfen Links bei ihrer Aufnahme, haben jedoch keinen Einfluss auf spätere Änderungen fremder Inhalte. Hinweise auf problematische Verlinkungen nehmen wir unter <a href="mailto:info@meai.support">info@meai.support</a> entgegen.</p></div></section>
          <section><span>06</span><div><h2>Bildschirmdarstellungen</h2><p>Die gezeigten App-Ansichten dienen der anschaulichen Produktdarstellung. Personenbezogene Kunden- und Standortinformationen werden für die öffentliche Darstellung unkenntlich gemacht; Unternehmens- und Produktdaten können beispielhaft sein.</p></div></section>
        </div>
        <p className="legal-updated">Stand: 23. September 2026</p>
      </article>
      <SiteFooter note="Sicherer Einsatz beginnt mit klaren Informationen." />
    </main>
  );
}
