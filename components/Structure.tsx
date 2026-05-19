const teile = [
  {
    num: "01",
    name: "Gleichung",
    frage: "Was kauft ein Fonds tatsächlich, und passt seine Logik zu deinem Geschäft? Wer ist der Investor, warum sagt er Nein, obwohl dein Geschäft läuft?",
    werkzeuge: "VC-Gleichungs-Check, Power-Law-Prüfung, Fonds-Fit-Filter, VC-Fit-Urteil.",
    entscheidung: "Pfad A (Venture-Scale), Pfad B (Voraussetzungen schließen) oder Pfad C (alternativer Weg ohne VC).",
  },
  {
    num: "02",
    name: "Substanz",
    frage: "Hält dein Geschäft der Prüfung stand? Markt, Wedge, Traktion, Unit Economics, Moat, Team.",
    werkzeuge: "Markt- und Wedge-Blatt, Traktions-Dashboard, Unit-Economics-Check, VC-Readiness Scorecard.",
    entscheidung: "Schärfen, ausbauen oder Pfad wechseln.",
  },
  {
    num: "03",
    name: "Prozess",
    frage: "Kannst du die Runde tatsächlich führen? Narrativ, Pipeline, Timing, Data Room, Due Diligence.",
    werkzeuge: "Deck in zwölf Sätzen, Pipeline-Plan, Sequencing, Data-Room-Liste.",
    entscheidung: "Jetzt starten, später starten oder verschieben.",
  },
  {
    num: "04",
    name: "Steuerung",
    frage: "Verstehst du, was du unterschreibst und was nach dem Closing passiert? Term Sheet, Burn, Investor Relations.",
    werkzeuge: "Term-Sheet-Lupe, Kapitalsteuerungsplan, Investitionsprofil.",
    entscheidung: "Unterschreiben, nachverhandeln oder abbrechen.",
  },
];

export default function Structure() {
  return (
    <section id="aufbau" className="section">
      <div className="section-inner">
        <p className="section-label">Aufbau</p>
        <h2>Vier Teile. In dieser Reihenfolge.</h2>
        <ul className="num-list">
          {teile.map((s) => (
            <li key={s.num} className="num-item">
              <div className="num-item-num">{s.num}</div>
              <div className="num-item-body">
                <h3>{s.name}</h3>
                <p>{s.frage}</p>
                <p><strong>Werkzeuge.</strong> {s.werkzeuge}</p>
                <p><strong>Entscheidung.</strong> {s.entscheidung}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="structure-meta">4 Teile · 16 Kapitel · 12 Arbeitsblätter</p>
      </div>
    </section>
  );
}
