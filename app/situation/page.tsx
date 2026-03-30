'use client'

import { motion } from 'framer-motion'

function CharacterSilhouette({ role, color }: { role: string; color: string }) {
  // Different silhouette shapes based on role
  const isWarrior = role.toLowerCase().includes('salaar') || role.toLowerCase().includes('infiltrator')
  const isRoyal = role.toLowerCase().includes('karta') || role.toLowerCase().includes('prince') || role.toLowerCase().includes('regent')
  const isSchemer = role.toLowerCase().includes('regent') || role.toLowerCase().includes('deranged')

  return (
    <svg
      width="48"
      height="56"
      viewBox="0 0 48 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color }}
    >
      {/* Head */}
      <circle cx="24" cy="10" r="7" fill="currentColor" opacity="0.18" stroke="currentColor" strokeWidth="1.2" />
      {isRoyal && (
        // Crown points
        <>
          <path d="M17 7 L18 3 L21 6 L24 2 L27 6 L30 3 L31 7" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" strokeLinejoin="round" strokeLinecap="round" />
        </>
      )}
      {/* Body */}
      {isWarrior ? (
        // Warrior stance — slight lean, weapon arm raised
        <>
          <path d="M24 17 L24 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
          <path d="M24 20 L14 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
          <path d="M24 20 L38 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
          {/* Weapon hint */}
          <line x1="38" y1="16" x2="42" y2="10" stroke="currentColor" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
          <path d="M20 36 L16 52" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.25" />
          <path d="M28 36 L32 52" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.25" />
        </>
      ) : isSchemer ? (
        // Schemer — hunched, hands clasped
        <>
          <path d="M24 17 L24 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.22" />
          <path d="M24 22 L14 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.28" />
          <path d="M24 22 L32 29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.28" />
          <circle cx="28" cy="30" r="2" fill="currentColor" opacity="0.2" />
          <path d="M20 34 L17 52" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.22" />
          <path d="M28 34 L31 52" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.22" />
        </>
      ) : (
        // Royal / default — upright, regal
        <>
          <path d="M24 17 L24 36" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" opacity="0.22" />
          <path d="M24 20 L12 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.28" />
          <path d="M24 20 L36 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.28" />
          <path d="M20 36 L17 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.22" />
          <path d="M28 36 L31 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.22" />
        </>
      )}
      {/* Subtle body fill */}
      <ellipse cx="24" cy="26" rx="7" ry="9" fill="currentColor" opacity="0.07" />
    </svg>
  )
}

const characters = [
  {
    name: 'Deva',
    fullName: 'Devaratha Raisaar',
    actor: 'Prabhas',
    clan: 'Shouryaanga',
    clanColor: '#A8A8A8',
    role: 'The Salaar',
    status: 'ALIVE',
    statusColor: '#4CAF50',
    description:
      'The hidden prince. Last surviving heir of the Shouryaanga bloodline — the clan that was genocided in 1985. Raised in the shadows, his true identity concealed until Vardha reveals him as the Salaar.',
    traits: ['Hidden Prince', 'Last Heir', 'Declared Salaar', 'Unstoppable Fighter'],
    symbol: '🐺',
  },
  {
    name: 'Vardha',
    fullName: 'Vardha Mannar',
    actor: 'Prithviraj Sukumaran',
    clan: 'Mannar',
    clanColor: '#C9A84C',
    role: 'The Ambitious Prince',
    status: 'ALIVE',
    statusColor: '#4CAF50',
    description:
      'Son of Raja Mannar. A complex figure driven by ambition and a calculated vision for Khansaar. He is the one who declares Deva his Salaar — setting the entire conflict into motion.',
    traits: ['Prince of Mannar', 'Political Visionary', 'Declared Deva as Salaar', 'Decisive Vote Caster'],
    symbol: '🐂',
  },
  {
    name: 'Raja Mannar',
    fullName: 'Raja Mannar',
    actor: 'Jagapathi Babu',
    clan: 'Mannar',
    clanColor: '#C9A84C',
    role: 'The Karta',
    status: 'ALIVE',
    statusColor: '#4CAF50',
    description:
      'The current king of Khansaar. Ordered the genocide of the Shouryaanga clan in 1985, killing Dhaara Raisaar and violating the Nibandhana. Rules with absolute power and brutal authority.',
    traits: ['King of Khansaar', 'Constitutional Violator', 'Ordered 1985 Genocide', 'Iron Ruler'],
    symbol: '👑',
  },
  {
    name: 'Radha Rama',
    fullName: 'Radha Rama',
    actor: 'Sriya Reddy',
    clan: 'Mannar',
    clanColor: '#C9A84C',
    role: 'The Regent',
    status: 'ALIVE',
    statusColor: '#4CAF50',
    description:
      'The political schemer of Khansaar. As regent, she operates behind the throne — pulling strings, managing alliances, and ensuring Mannar dominance through calculation rather than force.',
    traits: ['Political Regent', 'Master Schemer', 'Mannar Alliance', 'Shadow Power'],
    symbol: '♟',
  },
  {
    name: 'Bhaarava',
    fullName: 'Bhaarava',
    actor: 'Bobby Simha',
    clan: 'Shouryaanga',
    clanColor: '#A8A8A8',
    role: 'The Infiltrator',
    status: 'ALIVE',
    statusColor: '#4CAF50',
    description:
      'A Dora secretly of Shouryaanga blood — embedded within the system, working against Mannar from the inside. His true allegiance is hidden, making him one of the most dangerous figures in Khansaar.',
    traits: ['Hidden Shouryaanga', 'Dora in Disguise', 'Deep Infiltrator', 'Working Against Mannar'],
    symbol: '🕵',
  },
  {
    name: 'Ranga',
    fullName: 'Ranga',
    actor: '—',
    clan: 'Ghaniyaar',
    clanColor: '#8B0000',
    role: 'The Deranged Dora',
    status: 'DECEASED',
    statusColor: '#8B0000',
    description:
      'A Dora of the Ghaniyaar clan — volatile, unpredictable, and dangerous. His erratic nature made him a wildcard in Khansaar\'s power games. He does not survive Part 1.',
    traits: ['Ghaniyaar Dora', 'Volatile & Deranged', 'Wildcard', 'Deceased — Part 1'],
    symbol: '🦅',
  },
]

const powerBalance = [
  {
    faction: 'Mannar',
    color: '#C9A84C',
    power: 75,
    status: 'Dominant',
    detail: 'Controls the Karta seat, majority of Doras, and Ghaniyaar alliance',
  },
  {
    faction: 'Shouryaanga',
    color: '#A8A8A8',
    power: 20,
    status: 'Rising',
    detail: 'Deva revealed. Bhaarava embedded. The tide is turning.',
  },
  {
    faction: 'Ghaniyaar',
    color: '#8B0000',
    power: 15,
    status: 'Fractured',
    detail: 'Ranga\'s death has weakened internal cohesion. Loyalty uncertain.',
  },
]

export default function SituationPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p
          className="text-[#C9A84C]/60 text-xs tracking-[0.4em] uppercase mb-4"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Characters &bull; Power &bull; State of Play
        </p>
        <h1
          className="text-gold-gradient font-bold tracking-[0.1em] mb-6"
          style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(2rem, 6vw, 4rem)' }}
        >
          CURRENT SITUATION
        </h1>
        <div className="divider-gold mx-auto mb-6" style={{ width: '160px' }} />
        <p className="text-[#B8B8B8] text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          Where we stand after Part 1 — Ceasefire ends. Every major player, their allegiance, and the fragile
          power balance of Khansaar.
        </p>
      </motion.div>

      {/* Character Cards */}
      <section className="mb-24">
        <h2
          className="text-[#C9A84C] text-sm tracking-[0.35em] uppercase mb-10"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Major Characters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {characters.map((char, i) => (
            <motion.div
              key={char.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 border border-[#C9A84C]/10 bg-[#0a0a0a] hover:border-[#C9A84C]/20 transition-colors duration-300 group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div style={{ color: char.clanColor }}>
                    <CharacterSilhouette role={char.role} color={char.clanColor} />
                  </div>
                  <div>
                    <h3
                      className="text-[#E5E5E5] font-bold text-lg tracking-wide"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      {char.name}
                    </h3>
                    {char.fullName !== char.name && (
                      <p className="text-[#999] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {char.fullName}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span
                    className="text-[10px] tracking-[0.3em] uppercase px-2 py-0.5 border"
                    style={{
                      color: char.statusColor,
                      borderColor: char.statusColor + '40',
                      background: char.statusColor + '10',
                      fontFamily: 'Cinzel, serif',
                    }}
                  >
                    {char.status}
                  </span>
                </div>
              </div>

              {/* Actor + Clan */}
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <p className="text-[#999] text-[10px] uppercase tracking-wider mb-0.5" style={{ fontFamily: 'Cinzel, serif' }}>
                    Portrayed by
                  </p>
                  <p className="text-[#B0B0B0] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {char.actor}
                  </p>
                </div>
                <div className="w-px h-8 bg-[#333]" />
                <div>
                  <p className="text-[#999] text-[10px] uppercase tracking-wider mb-0.5" style={{ fontFamily: 'Cinzel, serif' }}>
                    Clan
                  </p>
                  <p
                    className="text-xs font-medium"
                    style={{ color: char.clanColor, fontFamily: 'Cinzel, serif' }}
                  >
                    {char.clan}
                  </p>
                </div>
                <div className="w-px h-8 bg-[#333]" />
                <div>
                  <p className="text-[#999] text-[10px] uppercase tracking-wider mb-0.5" style={{ fontFamily: 'Cinzel, serif' }}>
                    Role
                  </p>
                  <p className="text-[#B0B0B0] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {char.role}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#1a1a1a] mb-4" />

              {/* Description */}
              <p className="text-[#C0C0C0] text-sm leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                {char.description}
              </p>

              {/* Traits */}
              <div className="flex flex-wrap gap-2">
                {char.traits.map((trait) => (
                  <span
                    key={trait}
                    className="text-[10px] px-2 py-1 border border-[#222] text-[#D0D0D0] tracking-wide"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Power Balance */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-24"
      >
        <h2
          className="text-[#C9A84C] text-sm tracking-[0.35em] uppercase mb-10"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Power Balance — After Part 1
        </h2>
        <div className="border border-[#C9A84C]/10 bg-[#0a0a0a] p-8">
          <div className="flex flex-col gap-8">
            {powerBalance.map((item, i) => (
              <motion.div
                key={item.faction}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-sm font-bold tracking-[0.15em]"
                      style={{ color: item.color, fontFamily: 'Cinzel, serif' }}
                    >
                      {item.faction}
                    </span>
                    <span
                      className="text-[10px] tracking-[0.25em] uppercase px-2 py-0.5"
                      style={{
                        color: item.color,
                        background: item.color + '15',
                        border: `1px solid ${item.color}30`,
                        fontFamily: 'Cinzel, serif',
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                  <span
                    className="text-sm font-bold"
                    style={{ color: item.color, fontFamily: 'Cinzel, serif' }}
                  >
                    {item.power}%
                  </span>
                </div>
                {/* Power bar */}
                <div className="h-1.5 bg-[#111] rounded-full overflow-hidden mb-2">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: item.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.power}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
                  />
                </div>
                <p className="text-[#B0B0B0] text-xs leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Teaser */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grain-overlay relative border border-[#A8A8A8]/15 bg-[#0a0a0a] p-10 sm:p-16 text-center overflow-hidden"
      >
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(168,168,168,0.05) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-20">
          <p
            className="text-[#A8A8A8]/50 text-[10px] tracking-[0.5em] uppercase mb-4"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            What Comes Next
          </p>
          <h3
            className="text-[#A8A8A8] text-2xl sm:text-3xl font-bold tracking-[0.1em] mb-6"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Shouryaanga Parvam
          </h3>
          <div
            className="h-px mx-auto mb-6"
            style={{
              width: '100px',
              background: 'linear-gradient(90deg, transparent, #A8A8A8, transparent)',
            }}
          />
          <p className="text-[#B0B0B0] text-sm max-w-lg mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Part 1 ends with Khansaar at the precipice. Deva is revealed. The ceasefire is over. In{' '}
            <span className="text-[#A8A8A8]">Salaar: Part 2 — Shouryaanga Parvam</span>, the wolf clan
            rises. Vengeance for 1985 begins.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#A8A8A8]/40 animate-pulse" />
            <span
              className="text-[#A8A8A8]/40 text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              To Be Continued
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#A8A8A8]/40 animate-pulse" />
          </div>
        </div>
      </motion.section>
    </div>
  )
}
