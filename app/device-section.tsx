import AccessButton from './access-button';
import Image from 'next/image';

const devices = [
  { label: 'PC & Laptop', title: 'Überblick am Arbeitsplatz.', text: 'Dokumente sichten, Anlageninformationen nachschlagen und Serviceberichte bearbeiten – mit viel Platz für Details auf dem großen Bildschirm.', icon: 'desktop' },
  { label: 'iPad & Tablet', title: 'Mehr Raum. Direkt vor Ort.', text: 'Technische Unterlagen im Einsatz lesen, Anlageninformationen aufrufen und gemeinsam auf einen Servicefall schauen – bequem auf dem Tablet.', icon: 'tablet' },
  { label: 'Smartphone', title: 'Wissen in der Hosentasche.', text: 'Den KI-Chat nutzen, Informationen zur Anlage abrufen und den Servicekontext direkt am Gerät zur Hand haben.', icon: 'phone' },
];

export default function DeviceSection() {
  return (
    <>
      <section className="device-section" id="geraete" aria-labelledby="devices-title">
        <div className="section-heading"><div><span className="section-kicker">ME als Web-App</span><h2 id="devices-title">Endgeräte:<br />PC, Tablet & Smartphone</h2></div><p>ME läuft direkt im Browser und passt sich Ihrem Bildschirm an. Vom Arbeitsplatz bis zur Anlage: Ihr technisches Wissen ist dabei.</p></div>
        <div className="assurance-grid device-grid">
          {devices.map(device => (
            <article key={device.icon}>
              <div className="device-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {device.icon === 'desktop' ? <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" /></> : <><rect x={device.icon === 'tablet' ? '4' : '6'} y="2" width={device.icon === 'tablet' ? '16' : '12'} height="20" rx="2.5" /><path d="M11 18h2" /></>}
              </svg></div>
              <span className="assurance-label">{device.label}</span><h3>{device.title}</h3><p>{device.text}</p>
            </article>
          ))}
        </div>
        <figure className="ipad-showcase">
          <figcaption>
            <div><span className="section-kicker">ME auf dem iPad</span><h3>Mehr Überblick.<br />Mitten im Einsatz.</h3></div>
            <p>Chats, Servicefälle und Berichte auf einen Blick – dieselbe ME Web-App, mit mehr Platz auf dem Tablet.</p>
          </figcaption>
          <div className="ipad-showcase-stage">
            <Image src="/media/ipad-chats-redacted.png" alt="ME auf dem iPad: Chatübersicht mit Servicefällen und Berichten; Kundennamen sind unkenntlich gemacht." width={3100} height={2400} sizes="(max-width: 700px) 90vw, (max-width: 1200px) 82vw, 1040px" />
          </div>
        </figure>
      </section>
      <section className="webapp-explainer" aria-labelledby="browser-title">
        <div><span className="section-kicker">Einfach erreichbar</span><h2 id="browser-title">Browser öffnen.<br />Mit ME arbeiten.</h2><p>Öffnen Sie ME in einem aktuellen Browser und melden Sie sich mit Ihrem Zugang an. Auf Ihrem Smartphone oder Tablet können Sie ME einfach als Web-App zum Homescreen hinzufügen – und künftig mit einem Tippen auf das App-Symbol starten. Ganz ohne Download aus einem App-Store.</p><div className="device-access"><AccessButton /></div></div>
        <ol className="webapp-steps">
          <li><span>01</span><div><h3>ME aufrufen</h3><p>Öffnen Sie die ME-App-Adresse im Browser Ihres PCs, Tablets oder Smartphones.</p></div></li>
          <li><span>02</span><div><h3>Mit Ihrem Zugang anmelden</h3><p>Sie gelangen in den geschützten Bereich Ihres Unternehmens und zu den für Sie freigegebenen Inhalten.</p></div></li>
          <li><span>03</span><div><h3>Auf dem Homescreen ablegen</h3><p>Fügen Sie ME über das Teilen- oder Browsermenü zum Homescreen hinzu. So ist Ihr Arbeitsbereich beim nächsten Einsatz direkt über das App-Symbol erreichbar.</p></div></li>
        </ol>
        <p className="connection-note">Für die Nutzung benötigen Sie eine Internetverbindung und einen aktuellen Browser.</p>
      </section>
    </>
  );
}
