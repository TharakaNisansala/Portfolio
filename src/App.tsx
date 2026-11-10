import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Download, ExternalLink, Mail, Menu, Moon, Phone, Sun, X } from 'lucide-react'
import { about, certifications, education, experience, featuredProjects, now, otherProjects, profile, qualities, research, skillGroups, skillLevels, type Project, type SkillLevel } from './data'
import './App.css'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
]

const levelText: Record<SkillLevel, string> = {
  professional: 'professional experience',
  practice: 'hands-on practice',
  learning: 'currently learning',
}

function getInitialTheme() {
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') return stored === 'dark'
  } catch { /* storage unavailable */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2 id={id}>{title}</h2></div>
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.links.length) return null
  return <div className="project-links">
    {project.links.map((link) => link.external
      ? <a key={link.href} className="project-link" href={link.href} target="_blank" rel="noreferrer">{link.label} <ExternalLink size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
      : <a key={link.href} className="project-link" href={link.href}>{link.label} <ArrowDown size={14} aria-hidden="true" /></a>)}
  </div>
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeature = project.id === 'izzy'
  return <article className={`project-card project-${project.id}${isFeature ? ' is-feature' : ''}`} aria-labelledby={`project-${project.id}`}>
    {project.image
      ? <img className="project-image" src={project.image} alt="" loading="lazy" decoding="async" />
      : <div className="project-visual" aria-hidden="true"><span>{project.id === 'izzy' ? 'Gemini · Retrieval · Validation' : 'Agents · Tools · State · Graphs'}</span></div>}
    <div className="project-content">
      <div className="project-top">
        <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="project-kind">{project.kind}</span>
        {project.status && <span className={`status-pill status-${project.status.toLowerCase()}`}>{project.status}</span>}
      </div>
      <h3 id={`project-${project.id}`}>{project.title}</h3>
      <p>{project.description}</p>
      {project.contributions && <div className="contributions">
        <h4>{project.contributionsLabel}</h4>
        <ul className={project.id === 'agentic' ? 'topic-list' : 'contribution-list'}>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>}
      {project.note && <p className="project-note">{project.note}</p>}
      <div className="project-footer">
        <ul className="project-tags" aria-label="Technologies">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <ProjectLinks project={project} />
      </div>
    </div>
  </article>
}

function App() {
  const [dark, setDark] = useState(getInitialTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#122221' : '#f3f1eb')
  }, [dark])
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)), { rootMargin: '-25% 0px -65% 0px' })
    navItems.forEach(({ id }) => { const element = document.getElementById(id); if (element) observer.observe(element) })
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])
  const closeMenu = () => setMenuOpen(false)
  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch { /* storage unavailable */ }
  }

  return <div className="site-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="navbar">
      <a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark"><img src="/avatar.jpg" alt="" width="31" height="31" /></span><span>{profile.shortName}</span></a>
      <nav id="mobile-navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
        {navItems.map((item) => <a key={item.id} className={activeSection === item.id ? 'active' : ''} aria-current={activeSection === item.id ? 'location' : undefined} href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>)}
      </nav>
      <div className="nav-actions">
        <a className="nav-cv" href={profile.resume} download={profile.resumeFileName}>CV <Download size={14} aria-hidden="true" /></a>
        <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
        <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
    </header>

    <main id="main" tabIndex={-1}>
      <section id="top" className="hero page-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker"><span className="kicker-dot" aria-hidden="true" />{profile.name}</p>
          <h1 id="hero-title">Building intelligent applications with <em>AI</em> and modern software engineering.</h1>
          <p className="hero-role">Computer Science Graduate <span aria-hidden="true">/</span> AI &amp; Agentic AI Development <span aria-hidden="true">/</span> Software Engineering</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View My Projects <ArrowDown size={16} aria-hidden="true" /></a>
            <a className="button button-outline" href={profile.resume} download={profile.resumeFileName}>Download CV <Download size={16} aria-hidden="true" /></a>
            <a className="button button-quiet" href="#contact">Contact Me <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="portrait-wrap"><img src="/portrait.jpg" alt="Tharaka Nisansala Balasooriya in graduation attire" width="800" height="1200" fetchPriority="high" /></div>
          <dl className="now-card">
            <div><dt>Now</dt><dd>{now.working}</dd></div>
            <div><dt>Learning</dt><dd>{now.learning}</dd></div>
          </dl>
        </div>
      </section>

      <section id="about" className="page-section content-section reveal" aria-labelledby="about-title">
        <SectionHeading id="about-title" eyebrow="01 / About" title="Software developer with practical AI experience." />
        <div className="about-grid">
          <div>
            <p className="lead">{about.lead}</p>
            <dl className="facts">
              <div><dt>Education</dt><dd>{education.degree}, {education.institution.split(',')[0]} ({education.year})</dd></div>
              <div><dt>Current role</dt><dd>Full Stack Developer Intern, RAAHI Inc.</dd></div>
              <div><dt>Focus</dt><dd>AI integration · LLM applications · Agentic AI</dd></div>
            </dl>
          </div>
          <div className="about-copy">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <h3 className="qualities-title">Professional qualities</h3>
            <ul className="qualities">{qualities.map((quality) => <li key={quality}>{quality}</li>)}</ul>
          </div>
        </div>
      </section>

      <section id="experience" className="page-section content-section reveal" aria-labelledby="experience-title">
        <SectionHeading id="experience-title" eyebrow="02 / Experience" title="Real-world software, real AI features." />
        <div className="timeline">
          {experience.map((item) => <article className={`timeline-item${item.current ? ' is-current' : ''}`} key={item.company}>
            <div className="timeline-date">{item.period}{item.current && <span className="status-pill status-ongoing">Current</span>}</div>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-body">
              <h3>{item.role}</h3>
              <p className="company">{item.company} <span>· {item.location}</span></p>
              {item.highlight && <p className="timeline-highlight">{item.highlight}</p>}
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              <ul className="project-tags" aria-label="Technologies">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </div>
          </article>)}
        </div>
      </section>

      <section id="skills" className="page-section content-section skills-section reveal" aria-labelledby="skills-title">
        <SectionHeading id="skills-title" eyebrow="03 / Skills" title="What I’ve used, practised, and am learning." />
        <ul className="skill-legend" aria-label="Skill level legend">
          {skillLevels.map((item) => <li key={item.level}><span className={`legend-mark mark-${item.level}`} aria-hidden="true" /><strong>{item.label}</strong><span>{item.description}</span></li>)}
        </ul>
        <div className="skills-list">
          {skillGroups.map((group) => <div className="skill-row" key={group.label}>
            <h3 className="skill-label">{group.label}</h3>
            <ul className="skill-tags">{group.items.map((skill) => <li className={`tag tag-${skill.level}`} key={skill.name}>
              <span className={`legend-mark mark-${skill.level}`} aria-hidden="true" />{skill.name}<span className="sr-only"> ({levelText[skill.level]})</span>
            </li>)}</ul>
          </div>)}
        </div>
      </section>

      <section id="projects" className="page-section content-section projects-section reveal" aria-labelledby="projects-title">
        <SectionHeading id="projects-title" eyebrow="04 / Projects" title="Selected work." />
        <div className="projects-grid">{featuredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
        <h3 className="more-title">More projects</h3>
        <ul className="more-projects">
          {otherProjects.map((project) => <li key={project.title}>
            <img src={project.image} alt="" loading="lazy" decoding="async" />
            <div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul className="project-tags" aria-label="Technologies">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </div>
            <a className="project-link" href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> repository for {project.title} (opens in a new tab)</span></a>
          </li>)}
        </ul>
      </section>

      <section id="research" className="page-section research-section reveal" aria-labelledby="research-title">
        <div className="research-index">05</div>
        <div className="research-content">
          <span className="eyebrow">Research / Computer Vision</span>
          <h2 id="research-title">{research.title}</h2>
          <dl className="research-stats">{research.stats.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          <ul className="research-points">{research.points.map((point) => <li key={point}>{point}</li>)}</ul>
          <ul className="research-tags" aria-label="Technologies">{research.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          <a className="button button-outline research-link" href={research.github} target="_blank" rel="noreferrer">View source on GitHub <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </section>

      <section className="page-section credentials-section reveal" aria-labelledby="education-title">
        <div>
          <SectionHeading id="education-title" eyebrow="06 / Education" title="The foundation." />
          <div className="credential"><span className="credential-year">{education.year}</span><div><h3>{education.degree}</h3><p>{education.institution}</p></div></div>
        </div>
        <div>
          <SectionHeading id="cert-title" eyebrow="07 / Certifications" title="Always learning." />
          <ul className="cert-list">{certifications.map((cert) => <li key={cert}><span aria-hidden="true">↗</span>{cert}</li>)}</ul>
        </div>
      </section>

      <section id="contact" className="page-section contact-section reveal" aria-labelledby="contact-title">
        <div>
          <span className="eyebrow">08 / Contact</span>
          <h2 id="contact-title">Let’s build something <em>intelligent.</em></h2>
          <p className="contact-intro">I’m open to entry-level roles in software engineering, AI integration, and Agentic AI development, and I’m always happy to hear from recruiters and fellow developers.</p>
        </div>
        <div className="contact-details">
          <a className="contact-link" href={`mailto:${profile.email}`}><Mail size={18} aria-hidden="true" /> <span><small>Email</small>{profile.email}</span> <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a className="contact-link" href={`tel:${profile.phoneHref}`}><Phone size={18} aria-hidden="true" /> <span><small>Phone</small>{profile.phone}</span> <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-glyph" aria-hidden="true">in</span> <span><small>LinkedIn</small>tharaka-balasooriya</span> <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer"><span className="contact-glyph" aria-hidden="true">gh</span> <span><small>GitHub</small>TharakaNisansala</span> <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          <a className="button button-primary contact-cv" href={profile.resume} download={profile.resumeFileName}>Download CV <Download size={16} aria-hidden="true" /></a>
        </div>
      </section>
    </main>
    <footer><span>© {new Date().getFullYear()} {profile.name}</span><span>Designed &amp; built with React + TypeScript.</span><a href="#top">Back to top ↑</a></footer>
  </div>
}

export default App
