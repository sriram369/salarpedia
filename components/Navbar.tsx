'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/world', label: 'The World' },
  { href: '/nibandhana', label: 'Nibandhana' },
  { href: '/situation', label: 'Current Situation' },
  { href: '/join', label: 'Join Khansaar' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="glass sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className="text-xl font-black tracking-[0.2em] text-gold-gradient"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              SALARPEDIA
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-widest uppercase transition-all duration-300 ${
                    isActive
                      ? 'text-[#C9A84C]'
                      : 'text-[#888] hover:text-[#C9A84C]'
                  }`}
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-[#888] hover:text-[#C9A84C] transition-colors p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#C9A84C]/10 bg-black/95 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm tracking-widest uppercase transition-colors py-2 ${
                  isActive ? 'text-[#C9A84C]' : 'text-[#888] hover:text-[#C9A84C]'
                }`}
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
