import { faqs } from '../data/site.js'

export default function FAQ() {
  return (
    <section className="section alt" id="faq">
      <div className="wrap faq-grid">
        <div className="section-head">
          <p className="kicker">FAQ</p>
          <h2>Common questions</h2>
          <p className="section-sub">Anything else? Ask me on WhatsApp.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
