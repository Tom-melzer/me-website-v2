import ContactButton from './contact-button';

const questions = [
  {
    question: 'Für wen ist ME entwickelt?',
    answer: 'ME richtet sich vor allem an Betriebe und Serviceteams der HVACR-Branche: Kälte, Klima, Lüftung und Wärmepumpen. Die Plattform verbindet technisches Wissen mit der konkreten Anlage und unterstützt Techniker vor Ort sowie Kollegen im Büro.',
  },
  {
    question: 'Was unterscheidet ME von einem allgemeinen KI-Chat?',
    answer: 'ME bringt geprüfte Herstellerunterlagen, den Anlagenkontext Ihres Unternehmens und Erkenntnisse aus echten Servicefällen zusammen. Eine Frage steht dadurch im Zusammenhang mit dem installierten Gerätemodell, den zugehörigen Dokumenten und der Servicehistorie. Dieses Wissen bleibt für das Team im gemeinsamen Arbeitsbereich verfügbar.',
  },
  {
    question: 'Auf welches Wissen greift ME zu?',
    answer: 'ME wählt Quellen dynamisch passend zur Frage und zum Anlagenkontext aus – etwa Herstellerunterlagen, Unternehmensinformationen oder anonymisierte Praxiserfahrungen. Es gibt keine starre Rangfolge. Die Wissensbasis umfasst vielfältige technische Dokumente zahlreicher Hersteller und Marken aus Kälte, Klima, Lüftung und Wärmepumpen – von Installationsanleitungen bis zu Servicehandbüchern. Die Dokumente werden auf Quelle, Modell und Relevanz geprüft und mit den passenden Geräten verknüpft. Der Umfang verfügbarer Unterlagen kann je nach Hersteller und Modell variieren.',
  },
  {
    question: 'Können wir vorhandene Kunden- und Anlagendaten nutzen?',
    answer: 'Ja. ME kann Kunden-, Standort-, Anlagen- und Gerätedaten aus einem ERP oder bestehenden Unternehmenssystem importieren. So lässt sich ein Chat dem passenden Gerät zuordnen und mit Dokumenten sowie bisherigen Servicefällen verbinden. Die konkrete Importmöglichkeit hängt vom vorhandenen System und den bereitgestellten Daten ab.',
  },
  {
    question: 'Wie lernt ME aus einem gelösten Servicefall?',
    answer: 'Beobachtung, Diagnose und bestätigte Lösung werden dokumentiert und mit der Anlage verknüpft. ME trennt daraus die technische Erkenntnis von privaten Identitäten und macht sie für ähnliche Fälle auffindbar. So kann eine Lösung aus München einem Techniker in Hamburg helfen, der dasselbe Fehlerbild am selben Klimaanlagenmodell untersucht.',
  },
  {
    question: 'Können andere Betriebe unsere Kunden- oder Firmendaten sehen?',
    answer: 'Nein. Kundenakten, Namen, Adressen und interne Unterlagen werden nicht an andere Betriebe weitergegeben. Firmeninternes Wissen bleibt von der gemeinsamen Wissensbasis getrennt. Branchenweit nutzbar werden anonymisierte technische Erkenntnisse aus Servicefällen – nicht die Kunden- oder Unternehmensdaten.',
  },
  {
    question: 'Was passiert, wenn ME keine passende geprüfte Quelle findet?',
    answer: 'ME erweitert den Suchraum bei Bedarf. Wenn keine validierten ME-Dokumente verfügbar sind, kann allgemeine KI als Rückfallebene unterstützen. Das Ziel der Quellenprüfung ist, unbelegte Antworten zu reduzieren. Eine KI-Antwort ersetzt jedoch keine fachliche Prüfung am konkreten Gerät. Für offene Fragen kann ein erfahrener Kollege im selben Fall weiterhelfen.',
  },
  {
    question: 'Wie arbeitet ein erfahrener Kollege im Störungs-Chat mit?',
    answer: 'Ein hinzugezogener Experte kann im gemeinsamen Chat mit dem bisherigen Verlauf, relevanten Dokumenten und dem aktuellen Servicestatus weiterarbeiten. Der Techniker muss den Fall dadurch nicht von vorn erklären. Mit „Hey ME“ lässt sich die KI-Unterstützung jederzeit wieder in die Unterhaltung holen.',
  },
  {
    question: 'Ist ME auch für die Ausbildung hilfreich?',
    answer: 'Ja. Auszubildende können Fragen aus dem Arbeitsalltag stellen und technische Zusammenhänge besser nachvollziehen. Lehrkräfte können reale Servicefälle nutzen, um Lösungswege und KI-Antworten gemeinsam zu prüfen. Dokumentierte Erfahrungen bleiben zudem im Unternehmen erhalten, auch wenn Mitarbeitende wechseln.',
  },
  {
    question: 'Muss ich ME installieren und auf welchen Geräten läuft es?',
    answer: 'ME läuft als Web-App in einem aktuellen Browser auf PC, iPad, Tablet und Smartphone. Sie benötigen einen Zugang und eine Internetverbindung. Auf Smartphone oder Tablet können Sie ME über das Teilen- oder Browsermenü zum Homescreen hinzufügen und anschließend direkt über das App-Symbol öffnen. Ein Download aus einem App-Store ist dafür nicht nötig.',
  },
];

export default function FaqSection() {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="section-heading">
        <div>
          <span className="section-kicker">Häufige Fragen</span>
          <h2 id="faq-title">Häufige Fragen<br />zu ME</h2>
        </div>
        <p>Antworten zu ME im Servicealltag, zum Umgang mit Ihrem Wissen und zur Zusammenarbeit im Team.</p>
      </div>
      <div className="faq-list">
        {questions.map(({ question, answer }) => (
          <details className="faq-item" key={question}>
            <summary><span>{question}</span><span className="faq-toggle" aria-hidden="true">+</span></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
      <div className="faq-contact"><p>Ihre Frage war nicht dabei? Schreiben Sie direkt unserem Entwicklerteam.</p><ContactButton /></div>
    </section>
  );
}
