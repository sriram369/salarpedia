'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search as SearchIcon, X, ArrowUp, ArrowDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { searchEntries, type SearchCategory, type SearchEntry } from '@/lib/searchData'

const CATEGORY_COLORS: Record<SearchCategory, { bg: string; text: string; border: string }> = {
  Character: { bg: 'rgba(201,168,76,0.12)', text: '#C9A84C', border: 'rgba(201,168,76,0.3)' },
  Clan: { bg: 'rgba(168,168,168,0.1)', text: '#A8A8A8', border: 'rgba(168,168,168,0.25)' },
  Law: { bg: 'rgba(139,0,0,0.12)', text: '#c0002a', border: 'rgba(139,0,0,0.3)' },
  Lore: { bg: 'rgba(100,80,160,0.12)', text: '#9b8ec4', border: 'rgba(100,80,160,0.3)' },
}

interface SearchProps {
  open: boolean
  onClose: () => void
}

export default function Search({ open, onClose }: SearchProps) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchEntry[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
      setResults([])
      setActiveIndex(0)
    }
  }, [open])

  // Update results on query change
  useEffect(() => {
    setResults(searchEntries(query))
    setActiveIndex(0)
  }, [query])

  const navigate = useCallback(
    (entry: SearchEntry) => {
      router.push(entry.href)
      onClose()
    },
    [router, onClose],
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((i) => Math.min(i + 1, results.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((i) => Math.max(i - 1, 0))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (results[activeIndex]) navigate(results[activeIndex])
      } else if (e.key === 'Escape') {
        onClose()
      }
    },
    [results, activeIndex, navigate, onClose],
  )

  // Global Escape key to close
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose()
    }
    window.addEventListener('keydown', handleGlobalKey)
    return () => window.removeEventListener('keydown', handleGlobalKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            className="fixed z-[101] top-[10vh] left-1/2 w-full max-w-2xl px-4"
            style={{ x: '-50%' }}
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div
              className="rounded-sm overflow-hidden"
              style={{
                background: 'rgba(8,8,8,0.97)',
                border: '1px solid rgba(201,168,76,0.2)',
                boxShadow:
                  '0 25px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(201,168,76,0.05), inset 0 1px 0 rgba(201,168,76,0.08)',
              }}
            >
              {/* Search input row */}
              <div
                className="flex items-center gap-3 px-5 py-4"
                style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}
              >
                <SearchIcon size={18} className="shrink-0" style={{ color: '#C9A84C' }} />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search characters, clans, laws, lore…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-[#E5E5E5] placeholder-[#555] text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <button
                  onClick={onClose}
                  className="shrink-0 text-[#555] hover:text-[#999] transition-colors"
                  aria-label="Close search"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Results */}
              {query && (
                <div className="max-h-[60vh] overflow-y-auto">
                  {results.length === 0 ? (
                    <div className="px-5 py-10 text-center">
                      <p
                        className="text-[#555] text-sm tracking-widest"
                        style={{ fontFamily: 'Cinzel, serif' }}
                      >
                        No results found
                      </p>
                      <p className="text-[#444] text-xs mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Try a character name, clan, or lore term
                      </p>
                    </div>
                  ) : (
                    <ul>
                      {results.map((entry, i) => {
                        const colors = CATEGORY_COLORS[entry.category]
                        const isActive = i === activeIndex
                        return (
                          <li key={entry.id}>
                            <button
                              className="w-full text-left px-5 py-4 flex items-center gap-4 transition-colors duration-150"
                              style={{
                                background: isActive ? 'rgba(201,168,76,0.06)' : 'transparent',
                                borderBottom: '1px solid rgba(255,255,255,0.04)',
                              }}
                              onClick={() => navigate(entry)}
                              onMouseEnter={() => setActiveIndex(i)}
                            >
                              {/* Category badge */}
                              <span
                                className="shrink-0 text-[10px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-sm"
                                style={{
                                  background: colors.bg,
                                  color: colors.text,
                                  border: `1px solid ${colors.border}`,
                                  fontFamily: 'Cinzel, serif',
                                }}
                              >
                                {entry.category}
                              </span>

                              {/* Text */}
                              <div className="flex-1 min-w-0">
                                <p
                                  className="text-sm font-semibold truncate"
                                  style={{
                                    color: isActive ? '#C9A84C' : '#E5E5E5',
                                    fontFamily: 'Cinzel, serif',
                                  }}
                                >
                                  {entry.title}
                                </p>
                                <p
                                  className="text-xs text-[#888] truncate mt-0.5"
                                  style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                  {entry.subtitle}
                                </p>
                              </div>

                              {/* Active arrow */}
                              {isActive && (
                                <span className="shrink-0 text-[#C9A84C]/60 text-xs">↵</span>
                              )}
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              )}

              {/* Footer hints */}
              <div
                className="flex items-center gap-4 px-5 py-3"
                style={{
                  borderTop: '1px solid rgba(201,168,76,0.08)',
                  background: 'rgba(0,0,0,0.4)',
                }}
              >
                <div className="flex items-center gap-1.5 text-[#444] text-xs">
                  <ArrowUp size={12} />
                  <ArrowDown size={12} />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>Navigate</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#444] text-xs">
                  <kbd
                    className="px-1.5 py-0.5 rounded text-[10px]"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    ↵
                  </kbd>
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>Select</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#444] text-xs">
                  <kbd
                    className="px-1.5 py-0.5 rounded text-[10px]"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    Esc
                  </kbd>
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>Close</span>
                </div>
                <div className="ml-auto text-[#333] text-[10px] tracking-widest" style={{ fontFamily: 'Cinzel, serif' }}>
                  SALARPEDIA
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
