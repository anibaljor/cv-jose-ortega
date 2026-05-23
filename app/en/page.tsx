import type { Metadata } from 'next'
import CV from '../components/CV'

export const metadata: Metadata = {
  title: 'Aníbal José Ortega — CV | Sr. Automation & Agentic AI Specialist',
  description:
    'CV of Aníbal José Ortega — Sr. Automation & Agentic AI Specialist with experience in banking, fintech and CX environments (MODO, NaranjaX, Pro Mujer).',
}

export default function EnPage() {
  return <CV lang="en" />
}
