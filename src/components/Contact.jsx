import { useState } from 'react'
import { owner, plans } from '../data/site.js'
import { whatsappLink } from '../utils.js'

const businessTypes = ['Café / Restaurant', 'Pharmacy / Clinic', 'Retail shop', 'Salon / Service', 'Other']

function CopyLine({ label, value }) {
  const [state, setState] = useState('Copy')
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setState('Copied')
    } catch {
      setState('Select & copy')
    }
    setTimeout(() => setState('Copy'), 1600)
  }
  return (
    <div className="contact-line">
      <div>
        <span className="contact-label">{label}</span>
        <span className="contact-value">{value}</span>
      </div>
      <button type="button" className="btn btn-sm btn-accent" onClick={copy}>{state}</button>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', business: '', type: businessTypes[0], plan: plans[1].name, notes: '' })
  const [error, setError] = useState('')
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.business.trim()) {
      setError('Please add your name and business name.')
      return
    }
    setError('')
    const msg =
      `Hi ${owner.name.split(' ')[0]}, I'd like a website.\n\n` +
      `Name: ${form.name}\nBusiness: ${form.business}\nType: ${form.type}\nPackage: ${form.plan}` +
      (form.notes.trim() ? `\nDetails: ${form.notes}` : '')
    window.open(whatsappLink(msg), '_blank', 'noopener')
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <p className="kicker">Contact</p>
          <h2>Let's get your business online</h2>
          <p>
            Fill in a few details and your message opens in WhatsApp, ready to send. I'll reply
            with a free sample design using your business name before you pay anything.
          </p>
          <div className="contact-lines">
            <CopyLine label="WhatsApp / Call" value={owner.phoneDisplay} />
            <CopyLine label="Email" value={owner.email} />
          </div>
          <p className="contact-note">{owner.responseTime}</p>
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="field-row">
            <label htmlFor="cf-name">Your name
              <input id="cf-name" value={form.name} onChange={update('name')} placeholder="e.g. Rahul Shinde" />
            </label>
            <label htmlFor="cf-business">Business name
              <input id="cf-business" value={form.business} onChange={update('business')} placeholder="e.g. Shinde Medical" />
            </label>
          </div>
          <div className="field-row">
            <label htmlFor="cf-type">Business type
              <select id="cf-type" value={form.type} onChange={update('type')}>
                {businessTypes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label htmlFor="cf-plan">Package
              <select id="cf-plan" value={form.plan} onChange={update('plan')}>
                {plans.map((p) => <option key={p.name} value={p.name}>{p.name} · {p.price}</option>)}
                <option value="Custom project">Custom project</option>
              </select>
            </label>
          </div>
          <label htmlFor="cf-notes">Anything else? (optional)
            <textarea id="cf-notes" rows="3" value={form.notes} onChange={update('notes')} placeholder="e.g. I want customers to see our menu and order on WhatsApp" />
          </label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button type="submit" className="btn btn-accent btn-block">Send on WhatsApp</button>
        </form>
      </div>
    </section>
  )
}
