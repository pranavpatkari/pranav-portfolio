import { plans, pricingNotes } from '../data/site.js'
import { whatsappLink } from '../utils.js'

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="section-head split">
          <div>
            <p className="kicker">Pricing</p>
            <h2>Clear, one-time pricing</h2>
          </div>
          <p className="section-sub">No monthly fees for your website. Pick a package, pay 50% to start.</p>
        </div>

        <div className="plan-grid">
          {plans.map((p) => (
            <div className={`plan ${p.featured ? 'is-featured' : ''}`} key={p.name}>
              {p.featured && <span className="plan-flag">Most chosen</span>}
              <h3>{p.name}</h3>
              <p className="plan-for">{p.for}</p>
              <div className="plan-price">
                {p.price} <small>{p.note}</small>
              </div>
              <ul className="checks">
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a
                className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'} btn-block`}
                href={whatsappLink(`Hi, I'm interested in the ${p.name} package (${p.price}).`)}
                target="_blank"
                rel="noreferrer"
              >
                Choose {p.name}
              </a>
            </div>
          ))}
        </div>

        <ul className="notes">
          {pricingNotes.map((n) => <li key={n}>{n}</li>)}
        </ul>
      </div>
    </section>
  )
}
