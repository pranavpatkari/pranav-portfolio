import { services } from '../data/site.js'

export default function Services() {
  return (
    <section className="section alt" id="services">
      <div className="wrap">
        <div className="section-head split">
          <div>
            <p className="kicker">Services</p>
            <h2>What I can do for you</h2>
          </div>
          <p className="section-sub">From a simple Google listing to a full custom web app, built and set up end to end.</p>
        </div>
        <div className="service-grid">
          {services.map((s) => (
            <div className="service" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
