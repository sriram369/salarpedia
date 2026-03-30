import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Choose Your Clan',
  description: 'Join Khansaar — choose your clan, pledge your loyalty, and receive your official citizen card.',
}

export default function JoinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
