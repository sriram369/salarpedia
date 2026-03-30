'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const DARK_RED = '#8B0000'
const DARK_RED_LIGHT = '#c0002a'

interface Theory {
  id: string
  text: string
  confidence: number
  detail: string
}

const theories: Theory[] = [
  {
    id: 'deva-karta',
    text: 'Deva will claim the Karta throne',
    confidence: 78,
    detail:
      'As the last Shouryaanga heir, Deva holds the constitutional right to the rotating Karta seat. The Nibandhana demands it.',
  },
  {
    id: 'vardha-enemy',
    text: 'Vardha and Deva will turn enemies',
    confidence: 65,
    detail:
      'The weight of duty over brotherhood — Vardha must uphold Mannar supremacy. Deva must reclaim Shouryaanga. These paths cannot coexist.',
  },
  {
    id: 'bhaarava-army',
    text: 'Bhaarava leads the Shouryaanga army',
    confidence: 90,
    detail:
      'Bhaarava has spent forty years building a shadow army. Part 2\'s subtitle — Shouryaanga Parvam — is named for its return. He is the spear.',
  },
  {
    id: 'nibandhana-rewritten',
    text: 'The Nibandhana will be rewritten',
    confidence: 45,
    detail:
      'A broken constitution cannot govern a nation born from betrayal. Prashanth Neel may use Part 2 to rebuild the law from ashes.',
  },
  {
    id: 'radha-sides',
    text: 'Radha Rama switches sides',
    confidence: 55,
    detail:
      'He is the guardian of the law, not the ruler. When the law is violated beyond repair, his loyalty shifts to whoever restores it.',
  },
]

const unansweredQuestions = [
  'Who are the surviving members of Shouryaanga beyond Deva?',
  'What was the full content of the Nibandhana that Mannar violated?',
  'How did Bhaarava survive the 1985 genocide and build his forces?',
  'What is Radha Rama\'s true allegiance — law, or clan?',
  'Will Aadhya discover Deva\'s true identity as Shouryaanga?',
  'Who ordered the original betrayal — Raja Mannar alone, or with Ghaniyaar?',
  'What is the significance of the wolf clan\'s survival in the mountains?',
  'Can the ceasefire of Part 1 hold into Part 2, or is war inevitable?',
]

interface ConfidenceMeterProps {
  value: number
}

function ConfidenceMeter({ value }: ConfidenceMeterProps) {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-2">
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: DARK_RED_LIGHT, fontFamily: 'Cinzel, serif' }}
        >
          Likelihood
        </span>
        <span
          className="text-sm font-bold"
          style={{ color: DARK_RED_LIGHT, fontFamily: 'Cinzel, serif' }}
        >
          {value}%
        </span>
      </div>
      <div
        className="h-1 rounded-full overflow-hidden"
        style={{ background: 'rgba(139,0,0,0.15)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${DARK_RED}, ${DARK_RED_LIGHT})`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  )
}

export default function Part2Page() {
  const [pledge, setPledge] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (pledge.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,0,0,0.08) 0%, transparent 70%)',
          }}
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xs tracking-[0.5em] uppercase mb-4"
          style={{ color: `${DARK_RED_LIGHT}80`, fontFamily: 'Cinzel, serif' }}
        >
          Coming Soon
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-black tracking-[0.15em] mb-3"
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            background: `linear-gradient(135deg, ${DARK_RED} 0%, ${DARK_RED_LIGHT} 50%, ${DARK_RED} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          SALAAR: PART II
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[#888] tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: 'Cinzel, serif', fontSize: '0.9rem' }}
        >
          Shouryaanga Parvam
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mb-6"
          style={{
            width: '200px',
            height: '1px',
            background: `linear-gradient(90deg, transparent, ${DARK_RED}, transparent)`,
          }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-[#888] text-sm max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          The wolf is no longer waiting. Theories, predictions, and unanswered questions from the war to come.
        </motion.p>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-32 space-y-24">
        {/* Section 1: What is Shouryaanga Parvam */}
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-0.5 h-8" style={{ background: DARK_RED }} />
            <h2
              className="text-sm tracking-[0.4em] uppercase"
              style={{ color: DARK_RED_LIGHT, fontFamily: 'Cinzel, serif' }}
            >
              What is Shouryaanga Parvam?
            </h2>
          </div>

          <div
            className="p-8 rounded-sm"
            style={{
              background: 'rgba(139,0,0,0.04)',
              border: '1px solid rgba(139,0,0,0.15)',
            }}
          >
            <p
              className="text-[#C9A84C] text-xl mb-6 leading-relaxed"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              &ldquo;Shouryaanga Parvam&rdquo; — The Chapter of the Wolf Clan
            </p>
            <div className="space-y-4 text-[#B0B0B0] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p>
                <strong style={{ color: '#E5E5E5' }}>Shouryaanga</strong> is the name of the wolf clan — the Dhaara Raisaars of Khansaar, the rightful rulers who were genocided in 1985. Their name translates to the warrior spirit of the wolf: fierce, loyal, and impossible to fully exterminate.
              </p>
              <p>
                <strong style={{ color: '#E5E5E5' }}>Parvam</strong> is a Sanskrit and Kannada word meaning <em>chapter</em>, <em>era</em>, or <em>epoch</em> — a major division of time or story. In the Mahabharata, each Parva marks a pivotal phase of the war.
              </p>
              <p>
                Together, <strong style={{ color: '#E5E5E5' }}>Shouryaanga Parvam</strong> signals the beginning of the wolf clan&apos;s era — their return from exile, their reclamation of Khansaar, and their reckoning with those who thought them dead.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Unanswered Questions */}
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-0.5 h-8" style={{ background: DARK_RED }} />
            <h2
              className="text-sm tracking-[0.4em] uppercase"
              style={{ color: DARK_RED_LIGHT, fontFamily: 'Cinzel, serif' }}
            >
              Unanswered Questions from Part I
            </h2>
          </div>

          <ul className="space-y-4">
            {unansweredQuestions.map((q, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-4"
              >
                <span
                  className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center text-[10px] font-bold rounded-sm"
                  style={{
                    background: 'rgba(139,0,0,0.15)',
                    border: '1px solid rgba(139,0,0,0.3)',
                    color: DARK_RED_LIGHT,
                    fontFamily: 'Cinzel, serif',
                  }}
                >
                  {i + 1}
                </span>
                <p className="text-[#B0B0B0] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {q}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Section 3: Fan Theories */}
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-0.5 h-8" style={{ background: DARK_RED }} />
            <h2
              className="text-sm tracking-[0.4em] uppercase"
              style={{ color: DARK_RED_LIGHT, fontFamily: 'Cinzel, serif' }}
            >
              Fan Theories
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {theories.map((theory, i) => (
              <motion.div
                key={theory.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-sm"
                style={{
                  background: 'rgba(139,0,0,0.04)',
                  border: '1px solid rgba(139,0,0,0.15)',
                }}
              >
                <h3
                  className="text-[#E5E5E5] font-semibold mb-3 leading-snug"
                  style={{ fontFamily: 'Cinzel, serif', fontSize: '0.9rem' }}
                >
                  {theory.text}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {theory.detail}
                </p>
                <ConfidenceMeter value={theory.confidence} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 4: Pledge Your Prediction */}
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-0.5 h-8" style={{ background: DARK_RED }} />
            <h2
              className="text-sm tracking-[0.4em] uppercase"
              style={{ color: DARK_RED_LIGHT, fontFamily: 'Cinzel, serif' }}
            >
              Pledge Your Prediction
            </h2>
          </div>

          <div
            className="p-8 rounded-sm"
            style={{
              background: 'rgba(139,0,0,0.04)',
              border: '1px solid rgba(139,0,0,0.15)',
            }}
          >
            <p className="text-[#888] text-sm mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              What do you believe will happen in Shouryaanga Parvam? Write your theory. Let the scrolls record it.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8"
              >
                <p
                  className="text-lg mb-2"
                  style={{ color: DARK_RED_LIGHT, fontFamily: 'Cinzel, serif' }}
                >
                  Your pledge has been recorded.
                </p>
                <p className="text-[#666] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  The scrolls of Khansaar remember all.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setPledge('') }}
                  className="mt-6 text-xs tracking-widest uppercase transition-colors"
                  style={{ color: DARK_RED_LIGHT, fontFamily: 'Cinzel, serif' }}
                >
                  Pledge another &rarr;
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={pledge}
                  onChange={(e) => setPledge(e.target.value)}
                  placeholder="Write your theory here…"
                  rows={4}
                  className="w-full bg-black/50 text-[#E5E5E5] placeholder-[#444] resize-none outline-none p-4 rounded-sm text-sm leading-relaxed transition-colors"
                  style={{
                    border: `1px solid rgba(139,0,0,0.25)`,
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(139,0,0,0.5)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(139,0,0,0.25)'
                  }}
                />
                <button
                  type="submit"
                  disabled={!pledge.trim()}
                  className="px-8 py-3 text-sm tracking-[0.25em] uppercase transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: 'Cinzel, serif',
                    border: `1px solid rgba(139,0,0,0.4)`,
                    color: DARK_RED_LIGHT,
                    background: 'rgba(139,0,0,0.08)',
                  }}
                >
                  Pledge to the Scrolls
                </button>
              </form>
            )}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
