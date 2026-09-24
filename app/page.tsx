'use client';

import Image from 'next/image';
import { useState } from 'react';
import SiteFooter from './site-footer';
import SiteHeader from './site-header';
import AccessButton from './access-button';
import DeviceSection from './device-section';
import FaqSection from './faq-section';
import ContactButton, { contactEmail, contactHref } from './contact-button';
import RegistrationSection from './registration-section';

const featureScreens = [
  {
    key: 'chat',
    label: 'KI-Chat',
    title: 'Antworten im Kontext.',
    text: 'ME versteht die konkrete Anlage, verbindet Ihre Dokumente und liefert nachvollziehbare technische Antworten direkt im Einsatz.',
    image: '/media/chat.png',
    alt: 'ME KI-Chat mit technischer Antwort',
    stat: 'Schneller zur Lösung',
  },
  {
    key: 'wissen',
    label: 'Wissensbasis',
    title: 'Alles Wissen. Sofort griffbereit.',
    text: 'Herstellerunterlagen, eigene Dokumente und Gerätemodelle werden strukturiert, verschlagwortet und durchsuchbar.',
    image: '/media/suche.png',
    alt: 'ME Wissensbasis mit Dokumenten und Tags',
    stat: 'Eine zentrale Quelle',
  },
  {
    key: 'anlagen',
    label: 'Anlagen',
    title: 'Die gesamte Anlage im Blick.',
    text: 'Kunden, Standorte, Geräte, Bilder und Historien bleiben sauber verbunden – vom Büro bis zum Serviceeinsatz.',
    image: '/media/anlagen-detail.png',
    alt: 'ME Anlagenansicht mit Dokumenten, Bildern und Historie',
    stat: 'Lückenlos dokumentiert',
  },
  {
    key: 'berichte',
    label: 'Berichte',
    title: 'Dokumentation, die fertig wird.',
    text: 'Technische Berichte und Kundennachweise entstehen direkt aus dem Arbeitskontext – klar, konsistent und digital.',
    image: '/media/berichte.png',
    alt: 'ME Ansicht für technische Serviceberichte',
    stat: 'Direkt aus dem Einsatz',
  },
  {
    key: 'dashboard',
    label: 'Dashboard',
    title: 'Transparenz für Ihr Team.',
    text: 'Einsätze, Hersteller und Gerätetypen werden sichtbar. So erkennen Sie Muster und steuern Wissen gezielt.',
    image: '/media/dashboard.png',
    alt: 'ME Dashboard mit Einsatzstatistiken',
    stat: 'Entscheiden mit Überblick',
  },
];

const bentoCards = [
  ['01', 'Validierte Herstellerdaten', 'Modellspezifische Unterlagen werden geprüft, strukturiert und für verlässliche Antworten auffindbar gemacht.'],
  ['02', 'ERP-Anlagenkontext', 'Bestehende Kunden-, Standort-, Anlagen- und Gerätedaten geben jeder Anfrage den passenden Kontext.'],
  ['03', 'Geschütztes Erfahrungswissen', 'Servicefälle sichern technische Erkenntnisse, während private Kunden- und Unternehmensdaten geschützt bleiben.'],
  ['04', 'Gemeinsamer Störungs-Chat', 'Techniker, ME und erfahrene Kollegen bearbeiten einen Fall mit derselben Historie und denselben Dokumenten.'],
];

const answerLayers = [
  ['01', 'Validiertes Herstellerwissen', 'Modellspezifische Handbücher, technische Daten und geprüfte Dokumente.'],
  ['02', 'Unternehmens- und Anlagenkontext', 'ERP-Daten, relevante Unterlagen und die bisherige Servicehistorie.'],
  ['03', 'Anonymisiertes Praxiswissen', 'Technische Erkenntnisse aus Servicefällen werden anonymisiert für die Branche nutzbar – passend zu Gerätemodell und Fehlerbild.'],
  ['04', 'Erweiterte KI-Unterstützung', 'Allgemeines KI-Wissen ergänzt die Antwort, wenn in ME keine validierte Quelle verfügbar ist.'],
];

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);

  const feature = featureScreens[activeFeature];



  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="industry-badge">
            <span className="industry-mark">HVACR</span>
            <div><strong>Für Ihre Branche entwickelt</strong><span>Kälte · Klima · Lüftung · Wärmepumpen</span></div>
          </div>
          <h1>Wissen, das<br /><span>mitarbeitet.</span></h1>
          <p>
            Für Handwerksbetriebe, Meister und Servicetechniker: ME verbindet Herstellerwissen,
            Anlagendaten und Serviceerfahrung – im Büro und direkt an der Anlage.
          </p>
          <div className="hero-actions">
            <AccessButton />
            <a className="button button-ghost" href="#funktionen">Funktionen entdecken</a>
            <ContactButton />
          </div>
          <div className="trust-row" aria-label="Produktvorteile">
            <a href="#sicherheit">Firmenwissen und Branchenwissen getrennt</a><i />
            <a href="#geraete">Auf allen Geräten verfügbar</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="ME App Vorschau">
          <div className="glass-orbit orbit-one" />
          <div className="glass-orbit orbit-two" />
          <div className="phone-shadow" />
          <Image className="hero-phone" src="/media/wissen-ohne-dateianzahl.png" alt="ME App – zentraler Wissensbereich" width={1000} height={1944} priority />
          <div className="float-card float-card-top">
            <span className="float-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m7 7 4 4m2 2 4 4m0-10-4 4M7 17l4-4" /><circle cx="5" cy="5" r="2.5" /><circle cx="19" cy="5" r="2.5" /><circle cx="12" cy="12" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" /></svg></span>
            <div><strong>Wissen vernetzt</strong><small>Hersteller &amp; Anlagen</small></div>
          </div>
          <div className="float-card float-card-bottom">
            <span className="status-dot" />
            <div><strong>Sofort einsatzbereit</strong><small>Im Büro und vor Ort</small></div>
          </div>
        </div>
      </section>

      <section className="statement" id="produkt">
        <span className="section-kicker">Die Plattform</span>
        <h2>Technisches Wissen<br /><span>für Ihren Fachbetrieb.</span></h2>
        <p>
          Für Kälte-, Klima-, Lüftungs- und Wärmepumpenbetriebe, die weniger suchen, sauberer dokumentieren
          und Erfahrungswissen dort verfügbar machen wollen, wo es gebraucht wird.
        </p>
        <div className="statement-line" />
      </section>

      <section className="bento-section" id="funktionen">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Ein System. Ein Kontext.</span>
            <h2>Funktionen für den<br />technischen Service</h2>
          </div>
          <p>ME verbindet die täglichen Werkzeuge Ihres Teams zu einem ruhigen, klaren Arbeitsbereich.</p>
        </div>

        <div className="bento-grid">
          {bentoCards.map(([number, title, text], index) => (
            <article className={`bento-card bento-${index + 1}`} key={number}>
              <span className="bento-number">{number}</span>
              <div className="bento-symbol" aria-hidden="true">{index === 0 ? '⌕' : index === 1 ? '⌁' : index === 2 ? '✦' : '✓'}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-showcase" aria-labelledby="showcase-title">
        <div className="showcase-glow" />
          <div className="feature-tabs" role="tablist" aria-label="App-Funktionen">
            {featureScreens.map((item, index) => (
              <button
                type="button"
                role="tab"
                id={`feature-tab-${index}`}
                aria-controls="feature-panel"
                tabIndex={activeFeature === index ? 0 : -1}
                onKeyDown={event => {
                  const next = event.key === "ArrowRight" ? (index + 1) % featureScreens.length : event.key === "ArrowLeft" ? (index + featureScreens.length - 1) % featureScreens.length : event.key === "Home" ? 0 : event.key === "End" ? featureScreens.length - 1 : -1;
                  if (next >= 0) { event.preventDefault(); setActiveFeature(next); document.getElementById(`feature-tab-${next}`)?.focus(); }
                }}
                aria-selected={activeFeature === index}
                className={activeFeature === index ? 'active' : ''}
                key={item.key}
                onClick={() => setActiveFeature(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>{item.label}
              </button>
            ))}
          </div>
        <div className="showcase-copy" id="feature-panel" role="tabpanel" aria-labelledby={`feature-tab-${activeFeature}`}>
          <span className="section-kicker light">In der App</span>
          <h2 id="showcase-title">ME in der App</h2>
          <h3 className="showcase-feature-title">{feature.title}</h3>
          <p>{feature.text}</p>
          <span className="showcase-stat"><i />{feature.stat}</span>

        </div>
        <div className="showcase-device" aria-live="polite">
          <div className="device-halo" />
          <Image key={feature.image} src={feature.image} alt={feature.alt} width={800} height={1650} />
        </div>
      </section>

      <section className="platform-section" id="plattform">
        <div className="section-heading platform-heading">
          <div>
            <span className="section-kicker">Vertrauen entsteht vor der Antwort</span>
            <h2>Wissensplattform<br />und Quellen</h2>
          </div>
          <p>ME kombiniert verifizierte Produktinformationen mit dem tatsächlichen Anlagenkontext und dem Erfahrungswissen aus dem Service.</p>
        </div>

        <div className="proof-strip" aria-label="Stand der Plattform">
          <div><strong>Über 30 Hersteller</strong><span>Hersteller im Datenbestand</span></div>
          <div><strong>ca. 60.000 PDFs</strong><span>Technische Dokumente in kontrollierter Integration</span></div>
          <div><strong>ERP-verknüpft</strong><span>Kunden, Standorte, Anlagen und Geräte</span></div>
        </div>

        <div className="platform-grid">
          <article className="source-card">
            <span className="platform-label">Antwort-Engine</span>
            <h3>Die passenden Quellen für Ihre Frage.</h3>
            <p>ME wählt Quellen dynamisch nach Frage und Kontext aus – ohne starre Rangfolge. KI-Antworten unterstützen die fachliche Prüfung, ersetzen sie aber nicht.</p>
            <ul className="answer-layers">
              {answerLayers.map(([number, title, text]) => (
                <li key={number}>
                  <span aria-hidden="true">•</span>
                  <div><strong>{title}</strong><p>{text}</p></div>
                </li>
              ))}
            </ul>
          </article>

          <article className="privacy-card" id="gemeinsam-lernen">
            <span className="platform-label">Aus einem Servicefall wird Branchenwissen</span>
            <h3>In München gelöst.<br />In Hamburg hilfreich.</h3>
            <p>Ein Techniker in München löst eine Störung an einer Klimaanlage. Die technische Erkenntnis aus diesem Servicefall wird in ME anonymisiert für die Branche verfügbar. Trifft ein Techniker in Hamburg auf dasselbe Fehlerbild am selben Klimaanlagenmodell, kann ihm diese Erfahrung bei der Lösung helfen.</p>
            <div className="privacy-flow" aria-label="Beispiel: Vom Servicefall in München zur Unterstützung in Hamburg">
              <div><small>München · Erkenntnis</small><span>Fehlerbild, Ursache und Lösung werden im Servicefall dokumentiert.</span></div>
              <i aria-hidden="true">→</i>
              <div className="privacy-filter"><small>ME · Anonymisierung</small><span>Die technische Erkenntnis wird zum nutzbaren Wissen für die Branche.</span></div>
              <i aria-hidden="true">→</i>
              <div><small>Hamburg · Unterstützung</small><span>Dasselbe Modell, dasselbe Fehlerbild: Die Erfahrung hilft beim nächsten Einsatz.</span></div>
            </div>
            <p className="privacy-learning-note"><strong>Geteilt wird die technische Erkenntnis – nicht die Kundenakte.</strong> Namen, Adressen und vertrauliche Firmeninformationen werden nicht an andere Betriebe weitergegeben. Das interne Wissen Ihres Unternehmens bleibt klar abgegrenzt.</p>
          </article>

          <article className="expert-card">
            <span className="platform-label">Expertenübergabe</span>
            <h3>Erfahrene Kollegen im selben Chat hinzuziehen.</h3>
            <p>Der erfahrene Kollege sieht den bisherigen Dialog, die relevanten Dokumente und den aktuellen Servicestatus. Niemand muss den Fall neu erklären.</p>
            <div className="expert-route">
              <span>Techniker</span><i /><span>ME</span><i /><span>Experte</span>
            </div>
            <small className="hey-me">„Hey ME“ holt die KI jederzeit zurück in die Unterhaltung.</small>
          </article>

          <article className="learning-card">
            <span className="platform-label">Ausbildung &amp; Standards</span>
            <h3>Erfahrung weitergeben. Fachkräfte stärken.</h3>
            <div className="learning-list">
              <div><strong>Auszubildende</strong><p>Erhalten Erklärungen und technische Unterstützung bei Rückfragen.</p></div>
              <div><strong>Lehrkräfte</strong><p>Können reale Servicefragen zur Analyse von KI-Antworten nutzen.</p></div>
              <div><strong>Branche</strong><p>Profitiert von konsistenterem Gerätewissen und gemeinsamen Qualitätsstandards.</p></div>
            </div>
          </article>
        </div>
      </section>

      <section className="security-section" id="sicherheit" aria-labelledby="security-title">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Firmenwissen und Branchenwissen</span>
            <h2 id="security-title">Vertrauen und<br />geschütztes Firmenwissen</h2>
          </div>
          <p>ME unterscheidet zwischen dem Unternehmensbereich mit internen Unterlagen und technischen Erkenntnissen für die gemeinsame Wissensbasis. Diese Trennung ist die Grundlage des Berechtigungskonzepts.</p>
        </div>
        <div className="assurance-grid">
          <article><span className="assurance-label">Unternehmensbereich</span><h3>Wissen im richtigen Kontext.</h3><p>Kunden, Anlagen und interne Unterlagen gehören zum Arbeitsbereich Ihres Betriebs. Die Informationswebsite zeigt Funktionen der App; sie ist kein Zugang zu Ihren Kundenakten.</p></article>
          <article><span className="assurance-label">Berechtigungen</span><h3>Gezielter Zugriff für Ihr Team.</h3><p>Das Berechtigungskonzept sieht den Zugriff durch autorisierte Nutzer Ihres Unternehmens vor. Konkrete Zugriffsrechte und Datenverarbeitungen sind Gegenstand der Einrichtung und der Vereinbarungen zur ME-App.</p></article>
          <article><span className="assurance-label">Wissensbereiche</span><h3>Gemeinsam aus Erfahrung lernen.</h3><p>Für die gemeinsame Wissensbasis sind technische Muster wie Gerätemodell, Fehlerbild, Ursache und Lösung vorgesehen. Die branchenübergreifende Nutzung setzt eine wirksame Anonymisierung und die erforderlichen Nutzungsrechte voraus.</p></article>
        </div>
      </section>

      <section className="availability-teaser" aria-labelledby="registration-title">
        <div><span className="section-kicker">ME für Ihren Betrieb</span><h2 id="registration-title">Bringen Sie Ihr Team<br />mit ME zusammen.</h2><p>Herstellerwissen, Serviceerfahrung und Ihre Anlageninformationen in einem gemeinsamen Arbeitsbereich.</p></div>
        <AccessButton />
      </section>

      <section className="workflow-section">
        <div className="section-heading compact">
          <div>
            <span className="section-kicker">Vom Einsatz zum Wissen</span>
            <h2>Vom Servicefall<br />zum nutzbaren Wissen</h2>
          </div>
          <p>Was ein Techniker erkennt, kann vielen anderen helfen. Anonymisierte Erkenntnisse aus Servicefällen erweitern das gemeinsame technische Wissen der Branche.</p>
        </div>
        <div className="workflow">
          {[
            ['01', 'Erfassen', 'Kunde, Anlage und Servicekontext zusammenführen.'],
            ['02', 'Verstehen', 'Dokumente und Erfahrungswissen intelligent nutzbar machen.'],
            ['03', 'Lösen', 'Techniker mit konkreten Antworten und Historien unterstützen.'],
            ['04', 'Lernen', 'Technische Erkenntnisse anonymisieren und für ähnliche Servicefälle in der Branche nutzbar machen.'],
          ].map(([number, title, text]) => (
            <div className="workflow-step" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" id="inhalte">
        <div className="content-header">
          <div>
            <span className="section-kicker light">ME im Arbeitsalltag</span>
            <h2>Anwendung<br />im Servicealltag</h2>
          </div>
          <p>ME begleitet den gesamten Serviceprozess und macht aus einzelnen Informationen einen verlässlichen Arbeitskontext.</p>
        </div>

        <div className="content-stories">
          <article className="content-story content-story-large">
            <div className="story-number">01</div>
            <div className="story-copy">
              <span>Vor dem Einsatz</span>
              <h3>Vorbereitet ankommen.</h3>
              <p>Kunden, Standorte und installierte Geräte sind bereits strukturiert hinterlegt. Der Techniker sieht die bisherige Anlagenhistorie, vorhandene Bilder und Dokumente, bevor die Arbeit beginnt.</p>
              <ul>
                <li>Kunden- und Standortdaten</li>
                <li>Geräteübersicht mit eindeutiger Zuordnung</li>
                <li>Dokumente, Bilder und bisherige Servicefälle</li>
              </ul>
            </div>
            <div className="story-visual story-visual-duo">
              <Image src="/media/kunden.png" alt="ME Kundenübersicht" width={800} height={1650} />
              <Image src="/media/geraete.png" alt="ME Geräteübersicht" width={800} height={1650} />
            </div>
          </article>

          <article className="content-story">
            <div className="story-number">02</div>
            <div className="story-copy">
              <span>Während des Einsatzes</span>
              <h3>Wissen genau dann, wenn es zählt.</h3>
              <p>Die KI beantwortet technische Fragen auf Grundlage der verfügbaren Herstellerunterlagen und des konkreten Anlagenkontexts. Relevante Informationen müssen nicht mehr in Ordnern oder Portalen zusammengesucht werden.</p>
              <ul>
                <li>Kontextbezogener KI-Chat</li>
                <li>Durchsuchbare Herstellerdokumentation</li>
                <li>Tags für Geräte und Modelle</li>
              </ul>
            </div>
            <div className="story-visual">
              <Image src="/media/chat.png" alt="ME KI-Chat im Serviceeinsatz" width={800} height={1650} />
            </div>
          </article>

          <article className="content-story">
            <div className="story-number">03</div>
            <div className="story-copy">
              <span>Nach dem Einsatz</span>
              <h3>Dokumentiert. Nachvollziehbar. Wiederverwendbar.</h3>
              <p>Ergebnisse, Nachweise und neue Erkenntnisse bleiben nicht in einzelnen Köpfen oder Notizen. Sie werden sauber dokumentiert und stehen beim nächsten Servicefall direkt wieder zur Verfügung.</p>
              <ul>
                <li>Technische Berichte und Kundennachweise</li>
                <li>Vollständige Anlagenhistorie</li>
                <li>Wissen bleibt dauerhaft im Unternehmen</li>
              </ul>
            </div>
            <div className="story-visual">
              <Image src="/media/berichte.png" alt="ME technische Berichte" width={800} height={1650} />
            </div>
          </article>
        </div>
      </section>

      <section className="gallery-section" aria-labelledby="gallery-title">
        <div className="section-heading compact">
          <div>
            <span className="section-kicker">Einblicke</span>
            <h2 id="gallery-title">Weitere Einblicke<br />in die App</h2>
          </div>
          <p>Eine vertraute mobile Oberfläche hält auch umfangreiche Kunden- und Anlagendaten einfach bedienbar.</p>
        </div>
        <div className="phone-gallery">
          {[
            ['/media/kunden.png', 'Kundenverwaltung'],
            ['/media/geraete.png', 'Geräteübersicht'],
            ['/media/suche.png', 'Dokumentensuche'],
            ['/media/dashboard.png', 'Auswertungen'],
          ].map(([src, alt], index) => (
            <figure className={`gallery-phone gallery-phone-${index + 1}`} key={src}>
              <Image src={src} alt={`ME App – ${alt}`} width={800} height={1650} />
              <figcaption>{alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <DeviceSection />

      <FaqSection />

      <section className="final-cta" id="starten">
        <div className="cta-orb cta-orb-one" /><div className="cta-orb cta-orb-two" />
        <Image src="/media/me-logo.png" alt="ME" width={64} height={64} />
        <span className="section-kicker light">Bereit für den nächsten Einsatz?</span>
        <h2>Machen Sie Wissen<br />zu Ihrem Vorsprung.</h2>
        <p>Erleben Sie, wie ME Ihre Serviceprozesse verbindet und Ihr Team im richtigen Moment unterstützt.</p>
        <AccessButton className="button button-white" />
      </section>

      <RegistrationSection />

      <section className="contact-section" id="kontakt" aria-labelledby="contact-title">
        <div className="contact-panel">
          <div>
            <span className="section-kicker">Direkt zum Entwicklerteam</span>
            <h2 id="contact-title">Kontakt zum<br />Entwicklerteam</h2>
            <p>Fragen, Ideen oder Wünsche aus Ihrem Arbeitsalltag? Wir Entwickler lesen jede E-Mail persönlich und freuen uns auf den direkten Austausch. Ihre Erfahrungen helfen uns, ME weiterzuentwickeln.</p>
          </div>
          <div className="contact-details">
            <ContactButton className="button button-primary" />
            <a className="contact-email" href={contactHref}>{contactEmail}</a>
            
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
