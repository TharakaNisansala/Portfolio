import { useEffect, useState } from 'react'
import { ArrowUpRight, ExternalLink, Mail, Menu, Moon, Phone, Sun, X } from 'lucide-react'
import { certifications, experience, profile, projects, research, skillGroups } from './data'
import './App.css'

const navItems = ['about', 'skills', 'experience', 'projects', 'research', 'contact']

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
}

function App() {
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light' }, [dark])
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)), { rootMargin: '-25% 0px -65% 0px' })
    navItems.forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element) })
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])
  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <header className="navbar"><a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark"><img src="/profile.jpg" alt="" /></span><span>{profile.shortName}</span></a><nav id="mobile-navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">{navItems.map((item) => <a key={item} className={activeSection === item ? 'active' : ''} href={`#${item}`} onClick={closeMenu}>{item}</a>)}</nav><div className="nav-actions"><button type="button" className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button><button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div></header>
    <main id="top">
      <section className="hero page-section"><div className="hero-copy"><p className="kicker">Software engineer / AI builder</p><h1>Building useful things<br /><em>with intention.</em></h1><p className="hero-intro">I&apos;m Tharaka, an Associate Software Engineer who turns complex ideas into thoughtful, reliable digital products.</p><div className="hero-actions"><a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer">Visit GitHub <ArrowUpRight size={16} /></a><a className="button button-quiet" href={profile.resume} download>Download Resume <ArrowUpRight size={16} /></a></div></div><div className="hero-aside"><div className="portrait-wrap"><img src="/profile.jpg" alt="Portrait of Tharaka Nisansala Balasooriya" /></div><div className="scroll-note">Scroll to explore</div></div></section>
      <section id="about" className="page-section content-section reveal"><SectionHeading eyebrow="01 / About" title="A curious builder with a practical streak." /><div className="about-grid"><p className="lead">{profile.summary}</p><div className="about-copy"><p>I enjoy working across the stack: shaping a clear interface, designing the API behind it, and making the data layer dependable. Recently, I&apos;ve been especially interested in the space where AI makes software more useful without making it more complicated.</p><p>Quick to learn and comfortable in collaborative teams, I&apos;m building toward deeper expertise in C#, .NET, and Angular.</p></div></div></section>
      <section id="skills" className="page-section content-section skills-section reveal"><SectionHeading eyebrow="02 / Capabilities" title="Tools I use to make ideas real." /><div className="skills-list">{skillGroups.map((group) => <div className="skill-row" key={group.label}><span className="skill-label">{group.label}</span><div className="skill-tags">{group.items.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></div>)}</div></section>
      <section id="experience" className="page-section content-section reveal"><SectionHeading eyebrow="03 / Experience" title="Learning by shipping." /><div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.company}><div className="timeline-date">{item.period}</div><div className="timeline-marker" /><div className="timeline-body"><h3>{item.role}</h3><p className="company">{item.company} <span>· {item.location}</span></p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div></section>
      <section id="projects" className="page-section content-section projects-section reveal"><SectionHeading eyebrow="04 / Selected work" title="A few things I&apos;ve made." /><div className="projects-grid">{projects.map((project) => <article className="project-card" key={project.title}>{project.image && <img className="project-image" src={project.image} alt="" loading="lazy" />}<div className="project-content"><div className="project-top"><span className="project-number">{project.number}</span><div className="project-links">{project.demo && <a className="project-link" href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>Live Demo <ExternalLink size={15} /></a>}{project.github && <a className="project-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>GitHub <ArrowUpRight size={15} /></a>}</div></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>
      <section id="research" className="page-section research-section reveal"><div className="research-index">05</div><div className="research-content"><span className="eyebrow">Research / Computer Vision</span><h2>{research.title}</h2><div className="research-stats">{research.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><ul className="research-points">{research.points.map((point) => <li key={point}>{point}</li>)}</ul><div className="research-tags">{research.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><ArrowUpRight className="research-arrow" size={32} /></section>
      <section className="page-section credentials-section reveal"><div><SectionHeading eyebrow="06 / Education" title="The foundation." /><div className="credential"><span className="credential-year">2026</span><div><h3>BSc (Hons) in Computer Science</h3><p>University of Vavuniya</p></div></div></div><div><SectionHeading eyebrow="07 / Certifications" title="Always learning." /><ul className="cert-list">{certifications.map((cert) => <li key={cert}><span>↗</span>{cert}</li>)}</ul></div></section>
      <section id="contact" className="page-section contact-section reveal"><div><span className="eyebrow">08 / Contact</span><h2>Have a good problem?<br /><em>Let&apos;s talk.</em></h2></div><div className="contact-details"><p>I&apos;m open to conversations about software engineering, AI-powered products, and thoughtful collaborations.</p><a className="contact-link" href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email} <ArrowUpRight size={16} /></a><a className="contact-link" href={`tel:${profile.phone}`}><Phone size={18} /> {profile.phone} <ArrowUpRight size={16} /></a><div className="social-links"><a href={profile.linkedin} target="_blank" rel="noreferrer"><ArrowUpRight size={18} /> LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer"><ArrowUpRight size={18} /> GitHub</a></div></div></section>
    </main><footer><span>© {new Date().getFullYear()} {profile.shortName}</span><span>Designed & built with care.</span><a href="#top">Back to top ↑</a></footer>
  </div>
}

export default App
