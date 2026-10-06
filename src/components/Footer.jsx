import { owner } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} {owner.name} · {owner.role}, {owner.city}</span>
        <nav aria-label="Footer">
          <a href="#work">Work</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          {owner.instagram && <a href={owner.instagram} target="_blank" rel="noreferrer">Instagram</a>}
        </nav>
      </div>
    </footer>
  )
}
