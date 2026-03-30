'use client'

// TODO: Wire up Supabase integration
// Steps:
// 1. npm install @supabase/supabase-js
// 2. Create a "citizens" table: id, name, email, clan, created_at
// 3. Replace the local state submission below with:
//    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
//    await supabase.from('citizens').insert({ name, email, clan })
// 4. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const clans = [
  {
    id: 'mannar',
    name: 'MANNAR',
    symbol: '🐂',
    title: 'The Bull Clan',
    color: '#C9A84C',
    shadowColor: 'rgba(201,168,76,0.25)',
    borderColor: 'rgba(201,168,76,0.3)',
    bg: 'rgba(201,168,76,0.05)',
    bgSelected: 'rgba(201,168,76,0.12)',
    traits: 'Strength · Authority · Dominance',
    title2: 'Citizen of Mannar',
    pledge: 'By blood and bangle, I serve the Bull.',
  },
  {
    id: 'shouryaanga',
    name: 'SHOURYAANGA',
    symbol: '🐺',
    title: 'The Wolf Clan',
    color: '#A8A8A8',
    shadowColor: 'rgba(168,168,168,0.2)',
    borderColor: 'rgba(168,168,168,0.25)',
    bg: 'rgba(168,168,168,0.04)',
    bgSelected: 'rgba(168,168,168,0.1)',
    traits: 'Courage · Vengeance · Loyalty',
    title2: 'Survivor of Shouryaanga',
    pledge: 'In shadow I endure. In light I rise.',
  },
  {
    id: 'ghaniyaar',
    name: 'GHANIYAAR',
    symbol: '🦅',
    title: 'The Eagle Clan',
    color: '#8B0000',
    shadowColor: 'rgba(139,0,0,0.3)',
    borderColor: 'rgba(139,0,0,0.25)',
    bg: 'rgba(139,0,0,0.05)',
    bgSelected: 'rgba(139,0,0,0.12)',
    traits: 'Vision · Cunning · Patience',
    title2: 'Eagle of Ghaniyaar',
    pledge: 'I see what others miss. I strike when ready.',
  },
]

type FormState = 'idle' | 'submitted'

interface CitizenCard {
  name: string
  email: string
  clan: (typeof clans)[number]
}

export default function JoinPage() {
  const [selectedClan, setSelectedClan] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [citizen, setCitizen] = useState<CitizenCard | null>(null)

  const selectedClanData = clans.find((c) => c.id === selectedClan) ?? null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedClanData || !name.trim() || !email.trim()) return

    // Local state for now — Supabase integration TODO above
    setCitizen({ name: name.trim(), email: email.trim(), clan: selectedClanData })
    setFormState('submitted')
  }

  const handleReset = () => {
    setFormState('idle')
    setSelectedClan(null)
    setName('')
    setEmail('')
    setCitizen(null)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p
          className="text-[#C9A84C]/60 text-xs tracking-[0.4em] uppercase mb-4"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Community &bull; Allegiance
        </p>
        <h1
          className="text-gold-gradient font-bold tracking-[0.1em] mb-6"
          style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(2rem, 6vw, 4rem)' }}
        >
          CHOOSE YOUR CLAN
        </h1>
        <div className="divider-gold mx-auto mb-6" style={{ width: '160px' }} />
        <p className="text-[#B8B8B8] text-base max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          Every citizen of Khansaar belongs to a clan. Select yours, pledge your loyalty, and receive your
          official citizen card.
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {formState === 'idle' ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Clan Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {clans.map((clan, i) => {
                const isSelected = selectedClan === clan.id
                return (
                  <motion.button
                    key={clan.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    onClick={() => setSelectedClan(clan.id)}
                    className="relative text-left p-6 border transition-all duration-300 group focus:outline-none"
                    style={{
                      borderColor: isSelected ? clan.color : clan.borderColor,
                      background: isSelected ? clan.bgSelected : clan.bg,
                      backgroundColor: '#0a0a0a',
                      boxShadow: isSelected
                        ? `0 0 30px ${clan.shadowColor}, 0 0 1px ${clan.color}`
                        : 'none',
                    }}
                  >
                    {/* Selected check */}
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: clan.color }}
                      >
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.div>
                    )}

                    <div className="text-4xl mb-4">{clan.symbol}</div>
                    <h3
                      className="font-bold tracking-[0.12em] text-lg mb-1"
                      style={{ color: clan.color, fontFamily: 'Cinzel, serif' }}
                    >
                      {clan.name}
                    </h3>
                    <p
                      className="text-[10px] tracking-[0.15em] mb-3"
                      style={{ color: clan.color + '70', fontFamily: 'Cinzel, serif' }}
                    >
                      {clan.title}
                    </p>
                    <div className="h-px mb-3" style={{ background: `linear-gradient(90deg, ${clan.color}30, transparent)` }} />
                    <p className="text-[#999] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {clan.traits}
                    </p>
                  </motion.button>
                )
              })}
            </div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-[#C9A84C]/10 bg-[#0a0a0a] p-8"
            >
              <h2
                className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-8"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Pledge Your Loyalty
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#888] text-[10px] tracking-[0.3em] uppercase mb-3"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-[#111] border border-[#222] text-[#E5E5E5] px-4 py-3 text-sm placeholder-[#333] focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#888] text-[10px] tracking-[0.3em] uppercase mb-3"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full bg-[#111] border border-[#222] text-[#E5E5E5] px-4 py-3 text-sm placeholder-[#333] focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
              </div>

              {/* Selected clan display */}
              {selectedClanData && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-8 p-4 border flex items-center gap-4"
                  style={{
                    borderColor: selectedClanData.color + '30',
                    background: selectedClanData.bg,
                  }}
                >
                  <span className="text-2xl">{selectedClanData.symbol}</span>
                  <div>
                    <p
                      className="text-xs tracking-[0.2em] uppercase"
                      style={{ color: selectedClanData.color, fontFamily: 'Cinzel, serif' }}
                    >
                      Clan Selected: {selectedClanData.name}
                    </p>
                    <p className="text-[#999] text-xs mt-0.5 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                      &ldquo;{selectedClanData.pledge}&rdquo;
                    </p>
                  </div>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={!selectedClan || !name.trim() || !email.trim()}
                className="w-full py-4 text-sm tracking-[0.3em] uppercase transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  fontFamily: 'Cinzel, serif',
                  background: selectedClanData
                    ? `linear-gradient(135deg, ${selectedClanData.color}20, ${selectedClanData.color}10)`
                    : 'rgba(201,168,76,0.05)',
                  border: `1px solid ${selectedClanData ? selectedClanData.color + '60' : 'rgba(201,168,76,0.2)'}`,
                  color: selectedClanData ? selectedClanData.color : '#C9A84C',
                }}
              >
                Pledge Your Loyalty
              </button>
            </motion.form>
          </motion.div>
        ) : (
          /* Citizen Card */
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
            className="max-w-lg mx-auto"
          >
            {citizen && (
              <>
                <div
                  className="relative p-10 border overflow-hidden"
                  style={{
                    borderColor: citizen.clan.color + '50',
                    background: `linear-gradient(135deg, #0a0a0a 0%, ${citizen.clan.bg} 100%)`,
                    boxShadow: `0 0 60px ${citizen.clan.shadowColor}`,
                  }}
                >
                  {/* Corner decorations */}
                  <div
                    className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2"
                    style={{ borderColor: citizen.clan.color + '60' }}
                  />
                  <div
                    className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2"
                    style={{ borderColor: citizen.clan.color + '60' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2"
                    style={{ borderColor: citizen.clan.color + '60' }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2"
                    style={{ borderColor: citizen.clan.color + '60' }}
                  />

                  {/* Header */}
                  <div className="text-center mb-8">
                    <p
                      className="text-[10px] tracking-[0.5em] uppercase mb-2"
                      style={{ color: citizen.clan.color + '60', fontFamily: 'Cinzel, serif' }}
                    >
                      Official Citizen Card &bull; Khansaar
                    </p>
                    <div
                      className="h-px mx-auto"
                      style={{
                        width: '80px',
                        background: `linear-gradient(90deg, transparent, ${citizen.clan.color}, transparent)`,
                      }}
                    />
                  </div>

                  {/* Symbol */}
                  <div className="text-center mb-6">
                    <span className="text-6xl">{citizen.clan.symbol}</span>
                  </div>

                  {/* Name */}
                  <div className="text-center mb-2">
                    <p
                      className="text-[#888] text-[10px] tracking-[0.35em] uppercase mb-2"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      Citizen
                    </p>
                    <h2
                      className="text-[#E5E5E5] text-2xl font-bold tracking-wide"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      {citizen.name}
                    </h2>
                  </div>

                  {/* Clan & Title */}
                  <div className="text-center mb-8">
                    <p
                      className="text-lg font-bold tracking-[0.15em]"
                      style={{ color: citizen.clan.color, fontFamily: 'Cinzel, serif' }}
                    >
                      {citizen.clan.name}
                    </p>
                    <p
                      className="text-xs tracking-[0.2em] mt-1"
                      style={{ color: citizen.clan.color + '70', fontFamily: 'Cinzel, serif' }}
                    >
                      {citizen.clan.title2}
                    </p>
                  </div>

                  {/* Divider */}
                  <div
                    className="h-px mx-auto mb-6"
                    style={{
                      width: '60%',
                      background: `linear-gradient(90deg, transparent, ${citizen.clan.color}40, transparent)`,
                    }}
                  />

                  {/* Pledge */}
                  <div className="text-center mb-6">
                    <p
                      className="text-sm italic"
                      style={{ color: citizen.clan.color + '80', fontFamily: 'Inter, sans-serif' }}
                    >
                      &ldquo;{citizen.clan.pledge}&rdquo;
                    </p>
                  </div>

                  {/* Traits */}
                  <div className="text-center">
                    <p
                      className="text-[10px] tracking-[0.3em] uppercase"
                      style={{ color: citizen.clan.color + '50', fontFamily: 'Cinzel, serif' }}
                    >
                      {citizen.clan.traits}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-3">
                  <p
                    className="text-center text-[#B0B0B0] text-xs"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Welcome to Khansaar, {citizen.name}. Your loyalty has been recorded.
                  </p>
                  <button
                    onClick={handleReset}
                    className="w-full py-3 border border-[#333] text-[#999] text-xs tracking-[0.25em] uppercase hover:border-[#C9A84C]/30 hover:text-[#B8B8B8] transition-all duration-300"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    Choose a Different Clan
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
