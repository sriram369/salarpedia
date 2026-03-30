'use client'

import { motion } from 'framer-motion'

// ─── Data ────────────────────────────────────────────────────────────────────

const articles = [
  {
    numeral: 'I',
    title: 'The Rotation Doctrine',
    text: 'Each tribe rules for exactly 40 years. After 40 years, power transfers to the next tribe in the agreed order. No extensions, no exceptions.',
  },
  {
    numeral: 'II',
    title: 'The Voting System',
    text: 'All major decisions require a vote. Doras (Lords) carry 3 votes each. Kapus (Governors) carry 1 vote each. The Karta holds final authority but cannot override a supermajority.',
  },
  {
    numeral: 'III',
    title: 'The Bangle Mandate',
    text: "Every citizen's rank must be physically displayed via bangles. Thin bangles = Kapu rank. Thick bangles = Dora rank. Rank cannot be hidden or misrepresented.",
  },
  {
    numeral: 'IV',
    title: 'The Ceasefire Provision',
    text: 'Any Dora or Kapu may call for a ceasefire vote to pause inter-clan conflict. A majority vote activates a ceasefire period.',
  },
  {
    numeral: 'V',
    title: 'The Salaar Decree',
    text: 'In times of existential threat, the ruling Karta may appoint a Salaar — a supreme military commander who operates outside normal hierarchy, answerable only to the Karta.',
  },
  {
    numeral: 'VI',
    title: 'Territorial Rights',
    text: 'Each Dora controls 10–12 provinces. Each Kapu controls 1 province. The Karta holds 15 provinces directly. Total: 101 provinces.',
  },
]

const impliedLaws = [
  'A Karta cannot be removed mid-term by vote alone.',
  'Tribal identity is inherited — children belong to their father\'s tribe.',
  'The Salaar role is temporary and dissolves when the crisis ends.',
  'Betrayal of the Nibandhana by a Karta is technically a constitutional violation but has no enforcement mechanism — the biggest flaw in the system.',
  'A Dora who gives away territory loses their rank and voting power.',
]

const part2Questions = [
  'Will Deva invoke his right as the Shouryaanga heir?',
  'Can the Nibandhana be reinstated after a 32-year violation?',
  'Is there a war council that can strip a Karta of power?',
  'These remain unanswered until Part 2.',
]

// ─── Decorative Divider ───────────────────────────────────────────────────────

function GoldDivider() {
  return (
    <div className="flex items-center gap-4 my-16">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A84C]/40" />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect
          x="8"
          y="1"
          width="9"
          height="9"
          transform="rotate(45 8 8)"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="1"
          strokeOpacity="0.6"
        />
        <rect x="6.5" y="6.5" width="3" height="3" transform="rotate(45 8 8)" fill="#C9A84C" fillOpacity="0.5" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A84C]/40" />
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function NibandhanaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">

      {/* ── Hero ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center mb-16"
      >
        <p
          className="text-[#C9A84C]/60 text-xs tracking-[0.4em] uppercase mb-4"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Constitutional Law &bull; Khansaar
        </p>

        <h1
          className="text-gold-gradient font-black tracking-[0.12em] mb-4"
          style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(2.2rem, 7vw, 5rem)' }}
        >
          THE NIBANDHANA
        </h1>

        <div className="divider-gold mx-auto mb-6" style={{ width: '200px' }} />

        <p
          className="text-[#A8A8A8] text-base sm:text-lg tracking-[0.2em] uppercase"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          The Sacred Constitution of Khansaar &mdash; Established 1947
        </p>

        {/* Parchment container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 mx-auto max-w-2xl p-8 border border-[#C9A84C]/20 bg-[#0a0a0a] relative"
          style={{
            boxShadow: 'inset 0 0 60px rgba(201,168,76,0.04), 0 0 40px rgba(0,0,0,0.8)',
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #C9A84C60, transparent)' }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #C9A84C60, transparent)' }}
          />
          <p
            className="text-[#C0C0C0] text-sm leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Codified in 1947 alongside India&apos;s independence, the Nibandhana is the supreme law of
            Khansaar — the autonomous nation-state governed by three founding tribes. It replaced
            rule-by-force with structured constitutional governance, enshrining the 40-year rotation
            and the rights of every clan. Written and agreed upon by the Mannar, Shouryaanga, and
            Ghaniyaar — it has been violated only once.
          </p>
        </motion.div>
      </motion.div>

      <GoldDivider />

      {/* ── Section 1: Origins ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <h2
          className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-8"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Origins
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              label: 'Established',
              value: '1947 — codified after Indian independence to give Khansaar formal constitutional standing.',
            },
            {
              label: 'Purpose',
              value: 'Prevent any single tribe from monopolizing power. Replace rule-by-force with structured governance.',
            },
            {
              label: 'Founding Signatories',
              value: 'All three tribes — Mannar, Shouryaanga, and Ghaniyaar — wrote and agreed upon the document.',
            },
            {
              label: 'What it replaced',
              value: 'The old system of military conquest. Whoever was strongest ruled. The Nibandhana ended that.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-5 border border-[#C9A84C]/10 bg-[#0a0a0a]"
            >
              <p
                className="text-[#C9A84C]/70 text-[10px] tracking-[0.3em] uppercase mb-2"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {item.label}
              </p>
              <p className="text-[#C0C0C0] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <GoldDivider />

      {/* ── Section 2: Core Laws ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <h2
          className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-2"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          The Core Laws
        </h2>
        <p
          className="text-[#999] text-xs tracking-[0.2em] uppercase mb-10"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Confirmed from the film
        </p>

        <div className="flex flex-col gap-5">
          {articles.map((article, i) => (
            <motion.div
              key={article.numeral}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="flex gap-6 p-6 border-l-2 border-[#C9A84C]/50 bg-[#0a0a0a] border border-[#C9A84C]/10 border-l-[#C9A84C]/50"
              style={{
                borderLeftColor: '#C9A84C',
                borderLeftWidth: '2px',
              }}
            >
              <div className="flex-shrink-0 w-10">
                <span
                  className="text-[#C9A84C]/40 font-bold"
                  style={{ fontFamily: 'Cinzel, serif', fontSize: '1.6rem', lineHeight: 1 }}
                >
                  {article.numeral}
                </span>
              </div>
              <div className="flex-1">
                <p
                  className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase mb-2"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Article {article.numeral} &mdash; {article.title}
                </p>
                <p className="text-[#C0C0C0] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {article.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <GoldDivider />

      {/* ── Section 3: Implied Laws ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <div className="flex items-center gap-4 mb-2">
          <h2
            className="text-[#888] text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Implied Laws
          </h2>
          <span
            className="text-[10px] tracking-[0.25em] uppercase px-2 py-0.5 border border-[#8B0000]/60 text-[#c0002a] bg-[#8B0000]/10"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Unconfirmed
          </span>
        </div>
        <p
          className="text-[#999] text-xs tracking-[0.2em] uppercase mb-10"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Implied — Not Explicitly Stated
        </p>

        <div className="flex flex-col gap-3">
          {impliedLaws.map((law, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="flex items-start gap-4 p-5 border border-[#555]/20 bg-[#0a0a0a]"
            >
              <span
                className="flex-shrink-0 text-[10px] tracking-[0.25em] uppercase px-1.5 py-0.5 border border-[#8B0000]/40 text-[#8B0000] bg-[#8B0000]/08 mt-0.5"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                ?
              </span>
              <p className="text-[#C0C0C0] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {law}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <GoldDivider />

      {/* ── Section 4: The 1985 Violation ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <h2
          className="text-[#8B0000] text-xs tracking-[0.4em] uppercase mb-8"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          The 1985 Violation
        </h2>

        <div
          className="p-8 border border-[#8B0000]/30 bg-[#0a0a0a] relative overflow-hidden"
          style={{ boxShadow: 'inset 0 0 60px rgba(139,0,0,0.06)' }}
        >
          {/* Red accent top bar */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: 'linear-gradient(90deg, transparent, #8B0000, transparent)' }}
          />

          <div className="flex flex-col gap-6">
            {[
              {
                label: 'The Act',
                text: 'Raja Mannar violated Articles I and VI when he ordered the Shouryaanga genocide.',
              },
              {
                label: 'The Method',
                text: 'Instead of allowing the rotation, he eliminated the next tribe in line — erasing their claim permanently.',
              },
              {
                label: 'The Flaw',
                text: 'The Nibandhana had no enforcement mechanism — no army, no court to stop him. The document had no teeth.',
              },
              {
                label: 'The Consequence',
                text: 'This single violation is the root cause of all conflict in the film. Every act of blood traces back to 1985.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8"
              >
                <span
                  className="text-[#8B0000]/80 text-[10px] tracking-[0.3em] uppercase flex-shrink-0 min-w-[130px]"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {item.label}
                </span>
                <p className="text-[#C0C0C0] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <GoldDivider />

      {/* ── Section 5: What Part 2 May Reveal ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center gap-3 mb-8">
          {/* Lock icon */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <h2
            className="text-[#C9A84C]/60 text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            What Part 2 May Reveal
          </h2>
        </div>

        <div
          className="p-8 border border-[#C9A84C]/10 bg-[#0a0a0a] relative"
          style={{
            boxShadow: 'inset 0 0 40px rgba(201,168,76,0.03)',
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(201,168,76,0.02) 28px, rgba(201,168,76,0.02) 29px)',
          }}
        >
          {/* Sealed overlay effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 60%, rgba(0,0,0,0.4) 100%)',
            }}
          />

          <div className="relative z-10 flex flex-col gap-5">
            {part2Questions.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <div
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                  style={{ background: 'rgba(201,168,76,0.3)' }}
                />
                <p
                  className="text-[#B0B0B0] text-sm leading-relaxed italic"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {q}
                </p>
              </motion.div>
            ))}
          </div>

          <p
            className="relative z-10 mt-8 text-[#C9A84C]/30 text-[10px] tracking-[0.3em] uppercase text-center"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Shouryaanga Parvam &mdash; Sealed Until Release
          </p>
        </div>
      </motion.section>
    </div>
  )
}
