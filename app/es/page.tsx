import type { Metadata } from 'next'
import CV from '../components/CV'

export const metadata: Metadata = {
  title: 'Aníbal José Ortega — CV | Sr. Automation & Agentic AI Specialist',
  description:
    'CV de Aníbal José Ortega — Sr. Automation & Agentic AI Specialist con experiencia en entornos bancarios, fintech y CX (MODO, NaranjaX, Pro Mujer).',
}

export default function EsPage() {
  return <CV lang="es" />
}
