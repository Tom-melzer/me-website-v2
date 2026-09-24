import type { Metadata } from 'next';
import SiteFooter from '../site-footer';
import SiteHeader from '../site-header';

export const metadata: Metadata = {
  title: 'Datenschutz | ME AI.Support',
  description: 'Informationen zur Verarbeitung personenbezogener Daten auf der Website der ME AI.Support GmbH.',
};

const sections = [
  {
    number: '01',
    title: 'Verantwortlicher',
    body: <><p>ME AI.Support GmbH<br />Pionierweg 3<br />56348 Patersberg<br />Deutschland</p><p>Telefon: <a href="tel:+496771930093">+49 6771 930093</a><br />E-Mail: <a href="mailto:info@meai.support">info@meai.support</a></p></>,
  },
  {
    number: '02',
    title: 'Aufruf dieser Website',
    body: <p>Beim Aufruf der Website werden technisch erforderliche Verbindungsdaten verarbeitet. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des Abrufs, angeforderte Seite, übertragene Datenmenge, Browser- und Betriebssysteminformationen sowie Referrer-Informationen gehören. Die Verarbeitung dient der sicheren, stabilen und fehlerfreien Bereitstellung der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren Betrieb und in der Abwehr von Missbrauch.</p>,
  },
  {
    number: '03',
    title: 'Hosting und technische Dienstleister',
    body: <p>Diese Informationswebsite wird über die Plattform Sites unter einer chatgpt.site-Adresse bereitgestellt. Bei der Auslieferung der Seiten verarbeiten die an Hosting und technischer Bereitstellung beteiligten Dienstleister Verbindungsdaten. Das Hosting dieser Informationswebsite ist vom Betrieb der ME Web-App zu unterscheiden. Aus dem Sitz unseres Unternehmens lässt sich kein ausschließlicher Speicher- oder Verarbeitungsort in Deutschland ableiten.</p>,
  },
  {
    number: '04',
    title: 'Darkmode-Einstellung',
    body: <><p>Wenn Sie den Darstellungsmodus wechseln, speichert Ihr Browser die Auswahl „light“ oder „dark“ lokal unter dem Eintrag „me-theme“ im Local Storage. Unser Website-Code überträgt diesen Wert nicht an einen Server. Beim nächsten Aufruf wird er ausgelesen, um Ihre gewählte Darstellung wiederherzustellen. Ohne gespeicherte Auswahl orientiert sich die Website an Ihrer Systemeinstellung.</p><p>Der Eintrag hat keine automatische Ablauffrist. Sie können ihn durch Löschen der Websitedaten in den Einstellungen Ihres Browsers entfernen. Die Speicherung dient ausschließlich der von Ihnen gewählten Darstellungsfunktion; Grundlage für diesen Speicherzugriff ist § 25 Abs. 2 Nr. 2 TDDDG.</p></>,
  },
  {
    number: '05',
    title: 'Eingebundene Inhalte und Funktionen',
    body: <p>In den von uns gestalteten Seiten sind keine Analyse- oder Werbetracking-Dienste, Social-Media-Plugins oder externen Videoplayer eingebunden. Bilder und die Schrift „Onest“ werden als Dateien dieser Website ausgeliefert. Zum Laden der Schrift wird keine Verbindung zu Google Fonts hergestellt. Davon zu unterscheiden ist die technische Verarbeitung bei der Bereitstellung der Website durch die Hosting-Plattform.</p>,
  },
  {
    number: '06',
    title: 'Kontaktaufnahme',
    body: <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage und möglicher Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Kommunikation der Anbahnung oder Durchführung eines Vertrags dient; im Übrigen Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sachgerechten Beantwortung Ihrer Anfrage.</p>,
  },
  {
    number: '07',
    title: 'Speicherdauer',
    body: <p>Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Technische Protokolldaten werden nach Wegfall des Sicherheits- und Betriebszwecks gelöscht oder anonymisiert. Kommunikationsdaten löschen wir, wenn die Anfrage abschließend bearbeitet ist und keine gesetzlichen oder vertraglichen Gründe für eine weitere Speicherung bestehen.</p>,
  },
  {
    number: '08',
    title: 'Ihre Rechte',
    body: <><p>Sie haben nach Maßgabe der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen; die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt. Außerdem können Sie sich bei einer Datenschutzaufsichtsbehörde beschweren, insbesondere an Ihrem Aufenthaltsort, Arbeitsplatz oder am Ort des vermuteten Verstoßes.</p><p><strong>Ihr Widerspruchsrecht:</strong> Beruht eine Verarbeitung auf Art. 6 Abs. 1 lit. e oder f DSGVO, können Sie aus Gründen Ihrer besonderen Situation jederzeit Widerspruch einlegen. Gegen eine Verarbeitung für Direktwerbung können Sie jederzeit ohne Angabe solcher Gründe widersprechen. Zur Ausübung Ihrer Rechte erreichen Sie uns unter <a href="mailto:info@meai.support">info@meai.support</a>.</p></>,
  },
  {
    number: '09',
    title: 'Zuständige Aufsichtsbehörde',
    body: <p>Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz<br />Hintere Bleiche 34<br />55116 Mainz<br />Telefon: +49 6131 8920-0<br />E-Mail: <a href="mailto:poststelle@datenschutz.rlp.de">poststelle@datenschutz.rlp.de</a><br />Website: <a href="https://www.datenschutz.rlp.de/" target="_blank" rel="noreferrer">datenschutz.rlp.de</a></p>,
  },
  {
    number: '10',
    title: 'Datensicherheit',
    body: <p>Die Übertragung dieser Website erfolgt verschlüsselt über HTTPS. Das schützt die Übertragung zwischen Ihrem Browser und dem angesprochenen Server, bedeutet jedoch keine Garantie absoluter Sicherheit und sagt allein nichts über Speicherorte oder weitere Verarbeitungen aus.</p>,
  },
  {
    number: '11',
    title: 'Zugangsanfrage und Abgrenzung zur ME Web-App',
    body: <><p>Mit dem Formular „Betrieb anmelden“ können Sie auf dieser Website einen Zugang zu ME anfragen. Wir verarbeiten Ihre Auswahl (Firma/Fachbetrieb oder Hersteller), Vorname, Nachname, geschäftliche E-Mail-Adresse und Unternehmensname, um Ihre Anfrage zu prüfen, mit Ihnen Kontakt aufzunehmen und die Einrichtung eines Zugangs vorzubereiten. Die Freigabe erfolgt durch unser Team im ME-Adminbereich; das Formular schaltet keinen Zugang automatisch frei.</p><p>Erst beim Absenden übermittelt unser Formular diese Angaben über HTTPS direkt aus Ihrem Browser an backend.meai.support, die Schnittstelle der ME-Anwendung. Dabei fallen auch technisch erforderliche Verbindungsdaten wie Ihre IP-Adresse an. Der Formularcode sendet keine App-Anmeldecookies und keine Referrer-Adresse mit und speichert Ihre Eingaben weder im Local Storage noch in einer zusätzlichen Datenbank dieser Informationswebsite. Nicht abgesendete Eingaben werden von unserem Formularcode nicht an das Backend übertragen.</p><p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit es sich um vorvertragliche Maßnahmen auf Ihre Anfrage handelt. Wenn Sie als Ansprechperson eines Unternehmens handeln, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse ist die Bearbeitung geschäftlicher Zugangsanfragen. Die Angaben stehen den mit der Bearbeitung betrauten Personen und den für den technischen Betrieb eingesetzten Dienstleistern zur Verfügung. Eine Werbeeinwilligung ist damit nicht verbunden.</p><p>Die Angaben werden für die Bearbeitung der Anfrage und gegebenenfalls die anschließende Geschäftsbeziehung benötigt. Für die Speicherdauer gelten die in Abschnitt 07 genannten Kriterien. Die Datenbereitstellung ist freiwillig; ohne die als Pflichtfelder gekennzeichneten Angaben können wir die Zugangsanfrage über dieses Formular nicht bearbeiten. Alternativ können Sie uns per E-Mail kontaktieren. Für die spätere Nutzung der ME Web-App und dort verarbeitete Unternehmens- und Anlagendaten sind ergänzende Datenschutz- und Vertragsinformationen erforderlich; sie sind nicht Gegenstand dieser Website-Erklärung.</p></>,
  },
  {
    number: '12',
    title: 'Bereitstellung von Daten',
    body: <p>Technische Verbindungsdaten sind erforderlich, um die Website in Ihrem Browser auszuliefern. Eine Kontaktaufnahme ist freiwillig. Ohne ausreichende Angaben zu Ihrem Anliegen und einer Rückkontaktmöglichkeit können wir eine Anfrage gegebenenfalls nicht beantworten. Die Darstellungswahl ist optional und hat keinen Einfluss auf die verfügbaren Inhalte.</p>,
  },
];

export default function DatenschutzPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <header className="legal-hero">
          <span className="section-kicker">Transparenz</span>
          <h1>Datenschutz</h1>
          <p>Wie wir personenbezogene Daten beim Besuch dieser Informationswebsite verarbeiten.</p>
        </header>
        <div className="privacy-summary">
          <div><strong>Direkte Zugangsanfrage</strong><span>Formulardaten gehen an das ME-Backend</span></div>
          <div><strong>Lokale Einstellung</strong><span>Der Darkmode bleibt in Ihrem Browser</span></div>
          <div><strong>Verschlüsselt</strong><span>Übertragung über HTTPS</span></div>
        </div>
        <div className="legal-sections">
          {sections.map(section => (
            <section key={section.number} id={section.number === '11' ? 'registrierung' : undefined}>
              <span>{section.number}</span>
              <div><h2>{section.title}</h2>{section.body}</div>
            </section>
          ))}
        </div>
        <section className="legal-contact-box">
          <span className="legal-label">Datenschutzanfragen</span>
          <h2>Wir helfen Ihnen weiter.</h2>
          <p>Wenden Sie sich mit Fragen oder zur Ausübung Ihrer Rechte an <a href="mailto:info@meai.support">info@meai.support</a>.</p>
        </section>
        <p className="legal-updated">Stand: 24. September 2026</p>
      </article>
      <SiteFooter note="Transparenz für Ihre Daten." />
    </main>
  );
}
