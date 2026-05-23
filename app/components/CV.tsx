'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type Lang = 'en' | 'es'

interface Job {
  title: string
  company: string
  date: string
  intro?: string
  bullets: string[]
  tech?: string   // plain text, comma-separated for chips
}

interface SkillCat {
  name: string
  tags: string[]
}

interface InfoItem {
  title: string
  body: string
}

interface CVData {
  subtitle: string
  locationLabel: string
  printLabel: string
  expandLabel: string
  collapseLabel: string
  sections: {
    summary: string
    summaryText: string
    experience: string
    skills: string
    education: string
    additional: string
  }
  jobs: Job[]
  skillCategories: SkillCat[]
  educationDegree: string
  educationSchool: string
  educationDesc: string
  additionalItems: InfoItem[]
}

const data: Record<Lang, CVData> = {
  en: {
    subtitle: 'Sr. Automation & Agentic AI Specialist | GenAI Engineer | Intelligent Automation',
    locationLabel: 'La Plata, Argentina · Remote / Hybrid',
    printLabel: '🖨 Print / Save PDF',
    expandLabel: 'Details',
    collapseLabel: 'Hide',
    sections: {
      summary: 'Professional Summary',
      summaryText:
        'Engineer with solid expertise in <strong>intelligent automation, agentic AI platforms, and end-to-end systems</strong>, combining cloud, desktop, and web solutions. Focused on <strong>banking, fintech, finance, and CX</strong> environments — recent experience spans a digital payments platform (MODO), a leading credit card fintech (NaranjaX), and a financial inclusion organization (Pro Mujer). Designs and delivers automation and AI solutions that integrate with <strong>CRM, ERP, legal, compliance, and customer-facing systems</strong> in regulated industries. Proficient in <strong>AI-assisted development workflows</strong>, leveraging Claude Code, GitHub Copilot, and agentic coding environments to accelerate delivery and maintain high code quality in complex projects.',
      experience: 'Professional Experience',
      skills: 'Technical Skills',
      education: 'Education',
      additional: 'Additional Information',
    },
    jobs: [
      {
        title: 'Sr. Automation & Agentic AI Specialist',
        company: 'MODO — Buenos Aires Metro Area · Hybrid',
        date: 'Apr 2026 - Present',
        intro:
          'Designing and evolving AI agents, conversational workflows, and automation solutions within the CX organization to improve customer experience, agent productivity, and decision-making across digital channels.',
        bullets: [
          'Design and implementation of <strong>agentic AI solutions</strong> for customer experience and operational efficiency.',
          'Development of <strong>conversational workflows</strong> integrated with enterprise CX systems.',
          'Implementation of automation strategies leveraging <strong>Salesforce.com and AgentForce</strong>.',
          'Cross-functional collaboration to deliver decision-making capabilities across digital channels.',
        ],
        tech: 'Salesforce.com, AgentForce, Apex, Botmaker, Python, Java, AppScript, Snowflake, Agentic AI, GenAI, Conversational AI',
      },
      {
        title: 'Process Automation & AI Solutions Developer',
        company: 'Epidata (Client: NaranjaX)',
        date: 'Nov 2024 - Apr 2026',
        intro:
          'Built end-to-end platforms for intelligent document processing with Human-in-the-Loop, data extraction, approvals, and automated execution of business actions.',
        bullets: [
          'Designed and developed an <strong>end-to-end web platform</strong> for intelligent document processing.',
          'Implemented <strong>Human-in-the-Loop</strong> flows for document classification, field extraction, validation, and approval.',
          'Orchestrated workflows that <strong>make decisions and execute actions</strong> based on business rules.',
          'Integrated with <strong>CRM, ERP, Slack, databases, and cloud repositories</strong>.',
          'Leveraged <strong>AI coding assistants</strong> (Claude Code, GitHub Copilot, OpenCode) to accelerate delivery across microservices.',
        ],
        tech: 'Python, Azure Functions, Power Automate (Cloud & Desktop), SQL, Azure OpenAI, Azure Document Intelligence, GCP, GenAI workflows',
      },
      {
        title: 'Conversational Robotic Engineer / Tech Lead',
        company: 'Pro Mujer',
        date: 'Oct 2023 - Nov 2024',
        bullets: [
          'Developed <strong>chatbots and virtual assistants</strong> integrated with internal systems.',
          'Process automation using <strong>Power Automate and RPA</strong>.',
          'Technical leadership and coordination with internal teams and vendors.',
        ],
        tech: 'Power Automate, Power Platform, RPA, Conversational AI, Python',
      },
      {
        title: 'Technical Lead — RPA & Generative AI',
        company: 'OctUpus',
        date: 'May 2023 - Nov 2023',
        bullets: [
          'Implementation of <strong>OCR + AI</strong> solutions for financial document processing.',
          'Integration of <strong>Azure OpenAI + Cognitive Search</strong>.',
          'Technical leadership on enterprise automation projects.',
        ],
        tech: 'Azure OpenAI, Cognitive Search, OCR, RPA, Python',
      },
      {
        title: 'Business Analyst / Integration Associate',
        company: 'Accenture',
        date: '2021 - 2022',
        bullets: [
          'Functional and technical analysis of enterprise applications.',
          'Test automation and system monitoring.',
        ],
        tech: 'Enterprise Applications, Test Automation, System Monitoring',
      },
      {
        title: 'Petroleum Engineer (R&D)',
        company: 'PDVSA',
        date: '2011 - 2016',
        bullets: [
          'R&D for controlling excess water and gas production in oil wells.',
          'Numerical simulation and laboratory testing in porous media.',
          'Development of <strong>AI-based expert systems</strong> for production problem diagnostics.',
        ],
        tech: 'Numerical Simulation, AI Expert Systems, MATLAB, Python',
      },
    ],
    skillCategories: [
      {
        name: 'AI & Automation',
        tags: ['Agentic AI', 'GenAI', 'Human-in-the-Loop', 'Intelligent Automation', 'RPA', 'Conversational AI', 'AgentForce', 'Agentic Workflows'],
      },
      {
        name: 'Platforms & Cloud',
        tags: ['Azure Functions', 'Azure OpenAI', 'Azure Doc Intelligence', 'Power Automate', 'Power Platform', 'Salesforce.com', 'GCP', 'AWS'],
      },
      {
        name: 'Development & Integration',
        tags: ['Python', 'SQL', 'REST APIs', 'Enterprise Integrations', 'Platform Engineering', 'Slack'],
      },
      {
        name: 'AI Dev Tools',
        tags: ['Claude Code', 'GitHub Copilot', 'OpenCode', 'Antigravity', 'Cursor', 'VS Code'],
      },
    ],
    educationDegree: 'Petroleum Engineer',
    educationSchool: 'Universidad Central de Venezuela',
    educationDesc:
      'Engineering degree with a focus on reservoir engineering and production optimization. Foundation in numerical simulation, applied physics, and systems thinking — later transferred to AI, automation, and software engineering.',
    additionalItems: [
      { title: 'Languages', body: 'Spanish: Native<br/>English: B1–B2 (Professional)' },
      { title: 'Target Roles', body: 'AI Engineer · Agentic AI Specialist · GenAI Engineer · Intelligent Automation · Digital Transformation' },
      { title: 'Work Mode', body: 'Remote · Hybrid · Open to relocation within LATAM' },
    ],
  },

  es: {
    subtitle: 'Sr. Automation & Agentic AI Specialist | Ingeniero GenAI | Automatización Inteligente',
    locationLabel: 'La Plata, Argentina · Remoto / Híbrido',
    printLabel: '🖨 Imprimir / Guardar PDF',
    expandLabel: 'Ver detalle',
    collapseLabel: 'Ocultar',
    sections: {
      summary: 'Perfil Profesional',
      summaryText:
        'Ingeniero con sólida experiencia en <strong>automatización inteligente, plataformas de IA agéntica y sistemas end-to-end</strong>, combinando soluciones cloud, desktop y web. Con foco en <strong>entornos bancarios, fintech, finanzas y CX</strong> — experiencia reciente en una plataforma de pagos digitales (MODO), una fintech líder de tarjetas de crédito (NaranjaX) y una organización de inclusión financiera (Pro Mujer). Diseña y entrega soluciones de automatización e IA que se integran con <strong>CRM, ERP, sistemas legales, compliance y canales de atención al cliente</strong> en industrias reguladas. Experto en <strong>flujos de desarrollo asistidos por IA</strong>, utilizando Claude Code, GitHub Copilot y entornos de codificación agéntica para acelerar la entrega y mantener alta calidad de código en proyectos complejos.',
      experience: 'Experiencia Profesional',
      skills: 'Habilidades Técnicas',
      education: 'Educación',
      additional: 'Información Adicional',
    },
    jobs: [
      {
        title: 'Sr. Automation & Agentic AI Specialist',
        company: 'MODO — Buenos Aires y alrededores · Híbrido',
        date: 'Abr 2026 - Actualidad',
        intro:
          'Diseño y evolución de agentes de IA, flujos conversacionales y soluciones de automatización dentro de la organización CX para mejorar la experiencia del cliente, la productividad de los agentes y la toma de decisiones en canales digitales.',
        bullets: [
          'Diseño e implementación de <strong>soluciones de IA agéntica</strong> para la experiencia del cliente y eficiencia operativa.',
          'Desarrollo de <strong>flujos conversacionales</strong> integrados con sistemas CX empresariales.',
          'Implementación de estrategias de automatización aprovechando <strong>Salesforce.com y AgentForce</strong>.',
          'Colaboración transversal para entregar capacidades de toma de decisiones en canales digitales.',
        ],
        tech: 'Salesforce.com, AgentForce, Apex, Botmaker, Python, Java, AppScript, Snowflake, Agentic AI, GenAI, IA Conversacional',
      },
      {
        title: 'Desarrollador de Automatización de Procesos y Soluciones IA',
        company: 'Epidata (Cliente: NaranjaX)',
        date: 'Nov 2024 - Abr 2026',
        intro:
          'Construcción de plataformas end-to-end para procesamiento inteligente de documentos con Human-in-the-Loop, extracción de datos, aprobaciones y ejecución automatizada de acciones de negocio.',
        bullets: [
          'Diseño y desarrollo de una <strong>plataforma web end-to-end</strong> para procesamiento inteligente de documentos.',
          'Implementación de flujos <strong>Human-in-the-Loop</strong> para clasificación, extracción de campos, validación y aprobación de documentos.',
          'Orquestación de workflows que <strong>toman decisiones y ejecutan acciones</strong> basadas en reglas de negocio.',
          'Integración con <strong>CRM, ERP, Slack, bases de datos y repositorios cloud</strong>.',
          'Uso de <strong>asistentes de codificación IA</strong> (Claude Code, GitHub Copilot, OpenCode) para acelerar la entrega en microservicios.',
        ],
        tech: 'Python, Azure Functions, Power Automate (Cloud & Desktop), SQL, Azure OpenAI, Azure Document Intelligence, GCP, GenAI workflows',
      },
      {
        title: 'Ingeniero Robótico Conversacional / Tech Lead',
        company: 'Pro Mujer',
        date: 'Oct 2023 - Nov 2024',
        bullets: [
          'Desarrollo de <strong>chatbots y asistentes virtuales</strong> integrados con sistemas internos.',
          'Automatización de procesos con <strong>Power Automate y RPA</strong>.',
          'Liderazgo técnico y coordinación con equipos internos y proveedores.',
        ],
        tech: 'Power Automate, Power Platform, RPA, IA Conversacional, Python',
      },
      {
        title: 'Tech Lead — RPA e IA Generativa',
        company: 'OctUpus',
        date: 'May 2023 - Nov 2023',
        bullets: [
          'Implementación de soluciones <strong>OCR + IA</strong> para procesamiento de documentos financieros.',
          'Integración de <strong>Azure OpenAI + Cognitive Search</strong>.',
          'Liderazgo técnico en proyectos de automatización empresarial.',
        ],
        tech: 'Azure OpenAI, Cognitive Search, OCR, RPA, Python',
      },
      {
        title: 'Analista de Negocio / Integration Associate',
        company: 'Accenture',
        date: '2021 - 2022',
        bullets: [
          'Análisis funcional y técnico de aplicaciones empresariales.',
          'Automatización de pruebas y monitoreo de sistemas.',
        ],
        tech: 'Aplicaciones Empresariales, Automatización de Pruebas',
      },
      {
        title: 'Ingeniero de Petróleo (I+D)',
        company: 'PDVSA',
        date: '2011 - 2016',
        bullets: [
          'I+D para el control de producción excesiva de agua y gas en pozos petroleros.',
          'Simulación numérica y ensayos de laboratorio en medios porosos.',
          'Desarrollo de <strong>sistemas expertos basados en IA</strong> para diagnóstico de problemas de producción.',
        ],
        tech: 'Simulación Numérica, Sistemas Expertos IA, MATLAB, Python',
      },
    ],
    skillCategories: [
      {
        name: 'IA & Automatización',
        tags: ['IA Agéntica', 'GenAI', 'Human-in-the-Loop', 'Automatización Inteligente', 'RPA', 'IA Conversacional', 'AgentForce', 'Workflows Agénticos'],
      },
      {
        name: 'Plataformas & Cloud',
        tags: ['Azure Functions', 'Azure OpenAI', 'Azure Doc Intelligence', 'Power Automate', 'Power Platform', 'Salesforce.com', 'GCP', 'AWS'],
      },
      {
        name: 'Desarrollo & Integración',
        tags: ['Python', 'Java', 'Apex', 'SQL / Snowflake', 'AppScript', 'REST APIs', 'Integraciones Empresariales'],
      },
      {
        name: 'Herramientas IA Dev',
        tags: ['Claude Code', 'GitHub Copilot', 'OpenCode', 'Antigravity', 'Cursor', 'VS Code'],
      },
    ],
    educationDegree: 'Ingeniero de Petróleo',
    educationSchool: 'Universidad Central de Venezuela',
    educationDesc:
      'Carrera de ingeniería con foco en ingeniería de yacimientos y optimización de producción. Base en simulación numérica, física aplicada y pensamiento sistémico — luego trasladados a IA, automatización e ingeniería de software.',
    additionalItems: [
      { title: 'Idiomas', body: 'Español: Nativo<br/>Inglés: B1–B2 (Profesional)' },
      { title: 'Roles Objetivo', body: 'Ingeniero IA · Especialista Agentic AI · Ingeniero GenAI · Automatización Inteligente · Transformación Digital' },
      { title: 'Modalidad', body: 'Remoto · Híbrido · Abierto a reubicación en LATAM' },
    ],
  },
}

function ChevronIcon({ open, className = 'chevron-icon' }: { open: boolean; className?: string }) {
  return (
    <svg
      className={`${className}${open ? ' open' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

type SectionKey = 'summary' | 'experience' | 'skills' | 'education' | 'additional'

export default function CV({ lang }: { lang: Lang }) {
  const d = data[lang]
  const otherLang = lang === 'en' ? 'es' : 'en'
  const otherLabel = lang === 'en' ? 'Español' : 'English'

  const [sectionsOpen, setSectionsOpen] = useState<Record<SectionKey, boolean>>({
    summary: true,
    experience: true,
    skills: true,
    education: true,
    additional: true,
  })

  const [jobsOpen, setJobsOpen] = useState<boolean[]>(() => new Array(d.jobs.length).fill(false))

  // Expand everything before printing so no content is hidden
  useEffect(() => {
    const expand = () => {
      setSectionsOpen({ summary: true, experience: true, skills: true, education: true, additional: true })
      setJobsOpen(new Array(d.jobs.length).fill(true))
    }
    window.addEventListener('beforeprint', expand)
    return () => window.removeEventListener('beforeprint', expand)
  }, [d.jobs.length])

  const toggleSection = (key: SectionKey) =>
    setSectionsOpen(prev => ({ ...prev, [key]: !prev[key] }))

  const toggleJob = (i: number) =>
    setJobsOpen(prev => prev.map((v, idx) => (idx === i ? !v : v)))

  const SectionHeader = ({ sectionKey, label }: { sectionKey: SectionKey; label: string }) => (
    <button className="section-header" onClick={() => toggleSection(sectionKey)}>
      <h2>{label}</h2>
      <ChevronIcon open={sectionsOpen[sectionKey]} />
    </button>
  )

  return (
    <div className="page-wrapper">
      {/* Top bar */}
      <div className="lang-bar">
        <Link href={`/${otherLang}`} className="lang-link">{otherLabel}</Link>
        <Link href="/" className="lang-link">←</Link>
      </div>

      <div className="print-bar">
        <button className="print-btn" onClick={() => window.print()}>{d.printLabel}</button>
      </div>

      <div className="cv-container">
        {/* Header */}
        <header className="header">
          <div className="header-flex">
            <div className="header-text">
              <h1 className="name">Aníbal José Ortega</h1>
              <div className="subtitle">{d.subtitle}</div>
              <div className="contact-info">
                <div className="contact-item">
                  📧 <a href="mailto:anibaljoseortega@gmail.com">anibaljoseortega@gmail.com</a>
                </div>
                <div className="contact-item">
                  📱 <a href="tel:+5493415697953">+549 341 5697953</a>
                </div>
                <div className="contact-item">📍 {d.locationLabel}</div>
                <div className="contact-item">
                  💼{' '}
                  <a href="https://www.linkedin.com/in/anibal-jose-ortega/" target="_blank" rel="noreferrer">
                    linkedin.com/in/anibal-jose-ortega
                  </a>
                </div>
              </div>
            </div>
            <div className="photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photo.jpg" alt="Aníbal José Ortega" />
            </div>
          </div>
        </header>

        <main className="main-content">
          {/* ── Professional Summary ── */}
          <section className="section">
            <SectionHeader sectionKey="summary" label={d.sections.summary} />
            {sectionsOpen.summary && (
              <div className="summary section-content" dangerouslySetInnerHTML={{ __html: d.sections.summaryText }} />
            )}
          </section>

          {/* ── Professional Experience ── */}
          <section className="section">
            <SectionHeader sectionKey="experience" label={d.sections.experience} />
            {sectionsOpen.experience && (
              <div className="section-content">
                {d.jobs.map((job, i) => {
                  const chips = job.tech ? job.tech.split(', ') : []
                  const isOpen = jobsOpen[i]
                  return (
                    <div key={i} className="experience-item">
                      {/* Always-visible header — clickable */}
                      <div className="job-header-area" onClick={() => toggleJob(i)}>
                        <div className="experience-header">
                          <div>
                            <div className="job-title">{job.title}</div>
                            <div className="company">{job.company}</div>
                          </div>
                          <div className="date">{job.date}</div>
                        </div>

                        {/* Tech chips + expand button */}
                        <div className="job-meta-row">
                          <div className="job-tech-chips">
                            {chips.map((chip, j) => (
                              <span key={j} className="job-tech-chip">{chip}</span>
                            ))}
                          </div>
                          <button
                            className="job-expand-btn"
                            onClick={e => { e.stopPropagation(); toggleJob(i) }}
                          >
                            <ChevronIcon open={isOpen} className="mini-chevron" />
                            {isOpen ? d.collapseLabel : d.expandLabel}
                          </button>
                        </div>
                      </div>

                      {/* Expandable details */}
                      {isOpen && (
                        <div className="job-description job-details">
                          {job.intro && <p style={{ marginBottom: '8px' }}>{job.intro}</p>}
                          <ul>
                            {job.bullets.map((b, j) => (
                              <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </section>

          {/* ── Technical Skills ── */}
          <section className="section">
            <SectionHeader sectionKey="skills" label={d.sections.skills} />
            {sectionsOpen.skills && (
              <div className="skills-grid section-content">
                {d.skillCategories.map((cat, i) => (
                  <div key={i} className="skill-category">
                    <h4>{cat.name}</h4>
                    <div className="skill-tags">
                      {cat.tags.map((tag, j) => (
                        <span key={j} className="skill-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* ── Education ── */}
          <section className="section">
            <SectionHeader sectionKey="education" label={d.sections.education} />
            {sectionsOpen.education && (
              <div className="section-content">
                <div className="education-item">
                  <div className="experience-header">
                    <div>
                      <div className="job-title">{d.educationDegree}</div>
                      <div className="company">{d.educationSchool}</div>
                    </div>
                  </div>
                  <div className="job-description">{d.educationDesc}</div>
                </div>
              </div>
            )}
          </section>

          {/* ── Additional Information ── */}
          <section className="section">
            <SectionHeader sectionKey="additional" label={d.sections.additional} />
            {sectionsOpen.additional && (
              <div className="info-grid section-content">
                {d.additionalItems.map((item, i) => (
                  <div key={i} className="info-item">
                    <div className="info-title">{item.title}</div>
                    <div className="info-description" dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}
