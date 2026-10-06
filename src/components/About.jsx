import { owner, skills } from '../data/site.js'

export default function About() {
  const initials = owner.name.split(' ').map((w) => w[0]).join('')
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div className="about-card">
          <div className="avatar" aria-hidden="true">{initials}</div>
          <div>
            <strong>{owner.name}</strong>
            <span>{owner.role}</span>
            <span>{owner.city}, Maharashtra</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="kicker">About me</p>
          <h2>A developer who builds the whole thing</h2>
          <p>
            I'm a web developer in {owner.city} who builds complete websites and
            web apps, from the design you see to the server and database behind it. I've built
            café ordering sites, a pharmacy catalogue, a reading platform with user accounts,
            and real-time tools.
          </p>
          <p>
            I work directly with you on WhatsApp, so there's no agency in between and no waiting
            for days. You tell me what your business needs and I build it.
          </p>
          <div className="skills">
            {skills.map((s) => <span key={s}>{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
