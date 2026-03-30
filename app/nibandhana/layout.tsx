import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Nibandhana',
  description: 'The sacred constitution of Khansaar — established 1947. The rotation doctrine, voting system, bangle mandate, and the 1985 violation.',
}

export default function NibandhanaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
