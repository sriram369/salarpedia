'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import { Menu, X, Search as SearchIcon } from 'lucide-react'
import Search from '@/components/Search'

const navLinks = [
  { href: '/world', label: 'The World' },
  { href: '/nibandhana', label: 'Nibandhana' },
  { href: '/quotes', label: 'Scrolls' },
  { href: '/situation', label: 'Current Situation' },
  { href: '/join', label: 'Join Khansaar' },
  { href: '/part2', label: 'Part II' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const openSearch = useCallback(() => setSearchOpen(true), [])
  const closeSearch = useCallback(() => setSearchOpen(false), [])

  // Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
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

            {/* Right side: search + mobile burger */}
            <div className="flex items-center gap-3">
              {/* Search button */}
              <button
                onClick={openSearch}
                className="flex items-center gap-2 text-[#888] hover:text-[#C9A84C] transition-colors p-2 group"
                aria-label="Open search (Cmd+K)"
              >
                <SearchIcon size={18} />
                <span
                  className="hidden lg:inline text-[10px] tracking-widest uppercase border border-[#333] group-hover:border-[#C9A84C]/30 rounded px-1.5 py-0.5 transition-colors"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  ⌘K
                </span>
              </button>

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
            {/* Search in mobile menu */}
            <button
              onClick={() => { setMobileOpen(false); openSearch() }}
              className="text-left text-sm tracking-widest uppercase text-[#888] hover:text-[#C9A84C] transition-colors py-2 flex items-center gap-2"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              <SearchIcon size={15} />
              Search
            </button>
          </div>
        )}
      </nav>

      {/* Search overlay — rendered outside nav to avoid z-index issues */}
      <Search open={searchOpen} onClose={closeSearch} />
    </>
  )
}
