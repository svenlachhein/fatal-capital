export default function ForWhom() {
  return (
    <section id="fuer-wen" className="section section-alt">
      <div className="section-inner">
        <p className="section-label">Für wen</p>
        <h2>Zwei Fälle, drei Pfade, eine Entscheidung.</h2>
        <div className="card-grid cols-2">
          <article className="card">
            <h3>Clarissa</h3>
            <p>Hat dreißig VC-Gespräche geführt. Alle haben Nein gesagt, niemand hat ihr erklärt warum. Nach dem Buch versteht sie: Ihr Geschäft löst die VC-Gleichung heute noch nicht.</p>
            <div className="card-meta">Pfad B: App bauen, Skalierbarkeit beweisen, dann Seed.</div>
          </article>
          <article className="card">
            <h3>Toni</h3>
            <p>Hat schon einmal Venture Capital genommen und ist krachend gescheitert. Diesmal entscheidet er, bevor er unterschreibt. Seine Commerce-Sparte ist Venture-Scale, aber die Entkopplung vom Beratungsgeschäft fehlt.</p>
            <div className="card-meta">Pfad A mit Element von B: erst entkoppeln, dann pitchen.</div>
          </article>
        </div>
        <p className="for-whom-exclude">Nicht für dich, wenn du dein Pitch-Deck polieren willst, bevor du die VC-Gleichung verstanden hast. Wenn du eine Absage als Urteil über dich liest, statt als Datenpunkt. Das Buch ist hart, weil VC hart ist.</p>
      </div>
    </section>
  );
}
