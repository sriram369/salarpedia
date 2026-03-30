import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Current Situation',
  description: 'The current state of play in Khansaar — every major character, their allegiance, and the fragile power balance after Part 1.',
}

export default function SituationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
