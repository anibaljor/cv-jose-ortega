import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aníbal José Ortega — CV',
  description: 'Sr. Automation & Agentic AI Specialist | GenAI Engineer | Intelligent Automation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
