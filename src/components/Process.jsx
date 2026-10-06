import { process } from '../data/site.js'

export default function Process() {
  return (
    <section className="section alt" id="process">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">How it works</p>
          <h2>From WhatsApp message to live website</h2>
        </div>
        <ol className="steps">
          {process.map((s, i) => (
            <li className="step" key={s.title}>
              <span className="step-when">Step {i + 1} · {s.when}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
