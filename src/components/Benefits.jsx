import { benefits } from '../data/site.js'

export default function Benefits() {
  return (
    <section className="section benefits">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Why a website</p>
          <h2>What it does for your business</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map((b) => (
            <div className="benefit" key={b.title}>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
