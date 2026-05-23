import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aníbal José Ortega — CV',
  description: 'Sr. Automation & Agentic AI Specialist | GenAI Engineer | Intelligent Automation',
}

const PHOTO_URL = '/photo.jpg'

export default function LandingPage() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.photoWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHOTO_URL} alt="Aníbal José Ortega" style={styles.photo} />
          </div>
          <h1 style={styles.name}>Aníbal José Ortega</h1>
          <p style={styles.title}>
            Sr. Automation &amp; Agentic AI Specialist
            <br />
            GenAI Engineer · Intelligent Automation
          </p>
        </div>

        <div style={styles.body}>
          <p style={styles.blurb}>
            Specialized in agentic AI, conversational workflows, and end-to-end intelligent automation.
            Recent experience at MODO, NaranjaX, and Pro Mujer in banking, fintech, and CX environments.
          </p>

          <div style={styles.btnRow}>
            <Link href="/en" style={{ ...styles.btn, ...styles.btnPrimary }}>
              🇺🇸 English CV
            </Link>
            <Link href="/es" style={{ ...styles.btn, ...styles.btnSecondary }}>
              🇦🇷 CV en Español
            </Link>
          </div>

          <p style={styles.hint}>Select a language to view the full CV</p>
        </div>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0a2e5c 0%, #1e3a8a 60%, #2d5be3 100%)',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    background: 'white',
    borderRadius: '16px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    maxWidth: '460px',
    width: '100%',
    overflow: 'hidden',
  },
  header: {
    background: 'linear-gradient(135deg, #0a2e5c 0%, #1e3a8a 100%)',
    color: 'white',
    padding: '40px 30px 30px',
    textAlign: 'center',
  },
  photoWrap: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto 16px',
    border: '3px solid rgba(255,255,255,0.4)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  name: {
    fontSize: '1.75em',
    fontWeight: 700,
    margin: '0 0 8px',
    letterSpacing: '-0.3px',
  },
  title: {
    fontSize: '0.9em',
    fontWeight: 300,
    opacity: 0.9,
    lineHeight: 1.6,
    margin: 0,
  },
  body: {
    padding: '30px',
    textAlign: 'center',
  },
  blurb: {
    color: '#555',
    fontSize: '0.92em',
    lineHeight: 1.6,
    marginBottom: '28px',
  },
  btnRow: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    marginBottom: '16px',
    flexWrap: 'wrap',
  },
  btn: {
    display: 'inline-block',
    padding: '12px 28px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.95em',
  },
  btnPrimary: {
    background: '#1e3a8a',
    color: 'white',
  },
  btnSecondary: {
    background: 'white',
    color: '#1e3a8a',
    border: '2px solid #1e3a8a',
  },
  hint: {
    color: '#aaa',
    fontSize: '0.8em',
  },
}
