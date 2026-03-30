import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The World',
  description: 'Explore the world of Khansaar — its clans, hierarchy, history, and the Nibandhana constitution.',
}

export default function WorldLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
