'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '@/lib/supabase'

const clans = [
  {
    id: 'MANNAR',
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
    id: 'SHOURYAANGA',
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
    id: 'GHANIYAAR',
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

interface Member {
  id: string
  name: string
  clan: string
  joined_at: string
}

type FormState = 'idle' | 'loading' | 'submitted' | 'error'

export default function JoinPage() {
  const [selectedClan, setSelectedClan] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [submittedName, setSubmittedName] = useState('')
  const [submittedClanId, setSubmittedClanId] = useState('')
  const [members, setMembers] = useState<Member[]>([])

  const selectedClanData = clans.find((c) => c.id === selectedClan) ?? null
  const submittedClanData = clans.find((c) => c.id === submittedClanId) ?? null

  useEffect(() => {
    fetchMembers()
  }, [])

  async function fetchMembers() {
    const { data } = await supabase
      .from('clan_members')
      .select('id, name, clan, joined_at')
      .order('joined_at', { ascending: false })
    if (data) setMembers(data)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedClan || !name.trim() || !email.trim()) return

    setFormState('loading')
    setErrorMsg('')

    const { error } = await supabase.from('clan_members').insert({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      clan: selectedClan,
      title: clans.find((c) => c.id === selectedClan)?.title2 ?? '',
    })

    if (error) {
      if (error.code === '23505') {
        setErrorMsg('This email has already pledged loyalty to Khansaar.')
      } else {
        setErrorMsg('Something went wrong. Try again.')
      }
      setFormState('error')
      return
    }

    setSubmittedName(name.trim())
    setSubmittedClanId(selectedClan)
    setFormState('submitted')
    fetchMembers()
  }

  const handleReset = () => {
    setFormState('idle')
    setSelectedClan(null)
    setName('')
    setEmail('')
    setErrorMsg('')
  }

  const membersByClan = (clanId: string) => members.filter((m) => m.clan === clanId)

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-[#C9A84C]/60 text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
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
          Every citizen of Khansaar belongs to a clan. Select yours, pledge your loyalty, and receive your official citizen card.
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {formState === 'submitted' && submittedClanData ? (
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
            className="max-w-lg mx-auto"
          >
            <div
              className="relative p-10 border overflow-hidden"
              style={{
                borderColor: submittedClanData.color + '50',
                background: `linear-gradient(135deg, #0a0a0a 0%, ${submittedClanData.bg} 100%)`,
                boxShadow: `0 0 60px ${submittedClanData.shadowColor}`,
              }}
            >
              {['top-0 left-0 border-t-2 border-l-2', 'top-0 right-0 border-t-2 border-r-2', 'bottom-0 left-0 border-b-2 border-l-2', 'bottom-0 right-0 border-b-2 border-r-2'].map((cls, i) => (
                <div key={i} className={`absolute w-10 h-10 ${cls}`} style={{ borderColor: submittedClanData.color + '60' }} />
              ))}
              <div className="text-center mb-8">
                <p className="text-[10px] tracking-[0.5em] uppercase mb-2" style={{ color: submittedClanData.color + '60', fontFamily: 'Cinzel, serif' }}>
                  Official Citizen Card &bull; Khansaar
                </p>
                <div className="h-px mx-auto" style={{ width: '80px', background: `linear-gradient(90deg, transparent, ${submittedClanData.color}, transparent)` }} />
              </div>
              <div className="text-center mb-6"><span className="text-6xl">{submittedClanData.symbol}</span></div>
              <div className="text-center mb-2">
                <p className="text-[#888] text-[10px] tracking-[0.35em] uppercase mb-2" style={{ fontFamily: 'Cinzel, serif' }}>Citizen</p>
                <h2 className="text-[#E5E5E5] text-2xl font-bold tracking-wide" style={{ fontFamily: 'Cinzel, serif' }}>{submittedName}</h2>
              </div>
              <div className="text-center mb-8">
                <p className="text-lg font-bold tracking-[0.15em]" style={{ color: submittedClanData.color, fontFamily: 'Cinzel, serif' }}>{submittedClanData.name}</p>
                <p className="text-xs tracking-[0.2em] mt-1" style={{ color: submittedClanData.color + '70', fontFamily: 'Cinzel, serif' }}>{submittedClanData.title2}</p>
              </div>
              <div className="h-px mx-auto mb-6" style={{ width: '60%', background: `linear-gradient(90deg, transparent, ${submittedClanData.color}40, transparent)` }} />
              <div className="text-center mb-6">
                <p className="text-sm italic" style={{ color: submittedClanData.color + '80', fontFamily: 'Inter, sans-serif' }}>&ldquo;{submittedClanData.pledge}&rdquo;</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: submittedClanData.color + '50', fontFamily: 'Cinzel, serif' }}>{submittedClanData.traits}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <p className="text-center text-[#B0B0B0] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                Welcome to Khansaar, {submittedName}. Your loyalty has been recorded.
              </p>
              <button
                onClick={handleReset}
                className="w-full py-3 border border-[#333] text-[#999] text-xs tracking-[0.25em] uppercase hover:border-[#C9A84C]/30 hover:text-[#B8B8B8] transition-all duration-300"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Choose a Different Clan
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
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
                    className="relative text-left p-6 border transition-all duration-300 focus:outline-none"
                    style={{
                      borderColor: isSelected ? clan.color : clan.borderColor,
                      background: isSelected ? clan.bgSelected : '#0a0a0a',
                      boxShadow: isSelected ? `0 0 30px ${clan.shadowColor}, 0 0 1px ${clan.color}` : 'none',
                    }}
                  >
                    {isSelected && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: clan.color }}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </motion.div>
                    )}
                    <div className="text-4xl mb-4">{clan.symbol}</div>
                    <h3 className="font-bold tracking-[0.12em] text-lg mb-1" style={{ color: clan.color, fontFamily: 'Cinzel, serif' }}>{clan.name}</h3>
                    <p className="text-[10px] tracking-[0.15em] mb-3" style={{ color: clan.color + '70', fontFamily: 'Cinzel, serif' }}>{clan.title}</p>
                    <div className="h-px mb-3" style={{ background: `linear-gradient(90deg, ${clan.color}30, transparent)` }} />
                    <p className="text-[#999] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>{clan.traits}</p>
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
              className="border border-[#C9A84C]/10 bg-[#0a0a0a] p-8 mb-16"
            >
              <h2 className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-8" style={{ fontFamily: 'Cinzel, serif' }}>Pledge Your Loyalty</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="name" className="block text-[#888] text-[10px] tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'Cinzel, serif' }}>Your Name</label>
                  <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter your name"
                    className="w-full bg-[#111] border border-[#222] text-[#E5E5E5] px-4 py-3 text-sm placeholder-[#333] focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#888] text-[10px] tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'Cinzel, serif' }}>Your Email</label>
                  <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email"
                    className="w-full bg-[#111] border border-[#222] text-[#E5E5E5] px-4 py-3 text-sm placeholder-[#333] focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }} />
                </div>
              </div>

              {selectedClanData && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-8 p-4 border flex items-center gap-4"
                  style={{ borderColor: selectedClanData.color + '30', background: selectedClanData.bg }}>
                  <span className="text-2xl">{selectedClanData.symbol}</span>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase" style={{ color: selectedClanData.color, fontFamily: 'Cinzel, serif' }}>Clan Selected: {selectedClanData.name}</p>
                    <p className="text-[#999] text-xs mt-0.5 italic" style={{ fontFamily: 'Inter, sans-serif' }}>&ldquo;{selectedClanData.pledge}&rdquo;</p>
                  </div>
                </motion.div>
              )}

              {formState === 'error' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 text-center text-sm text-red-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {errorMsg}
                </motion.p>
              )}

              <button type="submit" disabled={!selectedClan || !name.trim() || !email.trim() || formState === 'loading'}
                className="w-full py-4 text-sm tracking-[0.3em] uppercase transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  fontFamily: 'Cinzel, serif',
                  background: selectedClanData ? `linear-gradient(135deg, ${selectedClanData.color}20, ${selectedClanData.color}10)` : 'rgba(201,168,76,0.05)',
                  border: `1px solid ${selectedClanData ? selectedClanData.color + '60' : 'rgba(201,168,76,0.2)'}`,
                  color: selectedClanData ? selectedClanData.color : '#C9A84C',
                }}>
                {formState === 'loading' ? 'Recording...' : 'Pledge Your Loyalty'}
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Members by Clan */}
      {members.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="text-center mb-10">
            <h2 className="text-[#C9A84C] text-sm tracking-[0.4em] uppercase mb-2" style={{ fontFamily: 'Cinzel, serif' }}>Citizens of Khansaar</h2>
            <p className="text-[#888] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>{members.length} {members.length === 1 ? 'citizen has' : 'citizens have'} pledged loyalty</p>
            <div className="divider-gold mx-auto mt-4" style={{ width: '80px' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {clans.map((clan) => {
              const clanMembers = membersByClan(clan.id)
              return (
                <div key={clan.id} className="border p-6" style={{ borderColor: clan.borderColor, background: '#0a0a0a' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{clan.symbol}</span>
                    <div>
                      <p className="text-sm font-bold tracking-[0.1em]" style={{ color: clan.color, fontFamily: 'Cinzel, serif' }}>{clan.name}</p>
                      <p className="text-[10px] text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>{clanMembers.length} {clanMembers.length === 1 ? 'citizen' : 'citizens'}</p>
                    </div>
                  </div>
                  <div className="h-px mb-4" style={{ background: `linear-gradient(90deg, ${clan.color}30, transparent)` }} />
                  {clanMembers.length === 0 ? (
                    <p className="text-[#444] text-xs italic" style={{ fontFamily: 'Inter, sans-serif' }}>No citizens yet. Be the first.</p>
                  ) : (
                    <ul className="space-y-2">
                      {clanMembers.map((m) => (
                        <li key={m.id} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full" style={{ background: clan.color }} />
                          <span className="text-[#C0C0C0] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{m.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>
      )}
    </div>
  )
}
