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
    entscheidung: "Schärfen, weitergehen oder neu bewerten.",
  },
  {
    num: "03",
    name: "Prozess",
    frage: "Kannst du die Runde tatsächlich führen? Narrativ, Pipeline, Timing, Data Room, Due Diligence.",
    werkzeuge: "Deck in zwölf Sätzen, Pipeline-Plan, Sequencing, Data-Room-Liste.",
    entscheidung: "Runde starten oder erst die offenen Lücken schließen.",
  },
  {
    num: "04",
    name: "Steuerung",
    frage: "Verstehst du, was du unterschreibst und was nach dem Closing passiert? Term Sheet, Burn, Investor Relations.",
    werkzeuge: "Kapitalsteuerungsplan, Investitionsprofil.",
    entscheidung: "Unterschreiben, nachverhandeln oder abbrechen.",
  },
];

export default function Structure() {
  return (
    <section id="aufbau" className="section">
      <div className="section-inner">
        <p className="section-label">Aufbau</p>
