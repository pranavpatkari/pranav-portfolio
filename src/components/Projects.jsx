import { useEffect, useState } from 'react'
import { projects, categories } from '../data/projects.js'

function Lightbox({ shot, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={shot.label} onClick={onClose}>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={shot.src} alt={shot.alt} />
        <figcaption>{shot.label}</figcaption>
      </figure>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">Close ✕</button>
    </div>
  )
}

function ProjectCard({ project, index, onOpen }) {
  const [active, setActive] = useState(0)
  const shot = project.shots[active]
  return (
    <article className={`project ${index % 2 ? 'is-flipped' : ''}`} id={project.id}>
      <div className="project-media">
        <button type="button" className="browser shot-btn" onClick={() => onOpen(shot)} aria-label={`Enlarge: ${shot.label}`}>
          <div className="browser-bar"><i /><i /><i /><span>{project.id} · {shot.label}</span></div>
          <img
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            className={project.portrait ? 'is-portrait' : ''}
          />
          <span className="zoom-hint">Click to enlarge</span>
        </button>
        {project.shots.length > 1 && (
          <div className="shot-tabs" role="tablist" aria-label="Screens">
            {project.shots.map((s, i) => (
              <button
                key={s.label}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={i === active ? 'is-active' : ''}
                onClick={() => setActive(i)}
              >
                <img src={s.src} alt="" />
                <span>{s.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="project-info">
        <div className="project-meta">
          <span className="tag">{project.type}</span>
          <span className="project-num">{String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>

        <div className="case">
          <div>
            <h4>The goal</h4>
            <p>{project.goal}</p>
          </div>
          <div>
            <h4>What I built</h4>
            <p>{project.solution}</p>
          </div>
        </div>

        <h4 className="list-title">Key features</h4>
        <ul className="checks">
          {project.features.map((f) => <li key={f}>{f}</li>)}
        </ul>

        <div className="project-foot">
          <div className="stack">
            {project.stack.map((s) => <span key={s}>{s}</span>)}
          </div>
          <p className="good-for"><b>Good for:</b> {project.goodFor}</p>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const list = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head split">
          <div>
            <p className="kicker">Portfolio</p>
            <h2>Recent work</h2>
          </div>
          <p className="section-sub">
            Websites and apps I designed and built from scratch. Each can be set up with your
            business name, photos, menu or products.
          </p>
        </div>

        <div className="filters" role="group" aria-label="Filter projects">
          {categories.map((c) => {
            const count = c === 'All' ? projects.length : projects.filter((p) => p.category === c).length
            return (
              <button
                key={c}
                type="button"
                className={filter === c ? 'is-active' : ''}
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
              >
                {c} <span>{count}</span>
              </button>
            )
          })}
        </div>

        <div className="project-list">
          {list.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={projects.indexOf(p)} onOpen={setLightbox} />
          ))}
        </div>
      </div>
      {lightbox && <Lightbox shot={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  )
}
