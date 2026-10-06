import { owner, heroStats } from '../data/site.js'
import { projects } from '../data/projects.js'
import { whatsappLink } from '../utils.js'

export default function Hero() {
  const preview = projects[0].shots[0]
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dot" aria-hidden="true" /> Available for new projects · {owner.city}
          </p>
          <h1>
            Websites that bring customers <em>to your shop.</em>
          </h1>
          <p className="lead">
            I'm {owner.name}, a web developer who builds fast, mobile-friendly websites for cafés,
            pharmacies and local businesses. Your menu or products online, WhatsApp ordering,
            Google Maps, all live in 24 hours.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#work">View my work</a>
            <a className="btn btn-ghost" href={whatsappLink()} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </div>
          <dl className="hero-stats">
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="browser browser-lg">
            <div className="browser-bar"><i /><i /><i /><span>brew-and-bloom.in/menu</span></div>
            <img src={preview.src} alt="" />
          </div>
          <div className="hero-badge">
            <strong>Live in 24 hours</strong>
            <span>From your details to a working website</span>
          </div>
        </div>
      </div>
    </section>
  )
}
