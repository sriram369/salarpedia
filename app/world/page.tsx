'use client'

import { motion } from 'framer-motion'
import KhansaarMap from '@/components/KhansaarMap'
import ProvinceStats from '@/components/ProvinceStats'
import { BullIcon, WolfIcon, EagleIcon } from '@/components/ClanIcons'

const clans = [
  {
    id: 'mannar',
    name: 'MANNAR',
    symbol: '🐂',
    title: 'The Bull Clan',
    color: '#C9A84C',
    shadowColor: 'rgba(201,168,76,0.2)',
    borderColor: 'rgba(201,168,76,0.25)',
    bg: 'rgba(201,168,76,0.04)',
    status: 'Currently Ruling',
    statusColor: '#C9A84C',
    traits: 'Strength & Authority',
    detail:
      'The dominant clan of Khansaar. Currently holding the Karta seat after the 1985 betrayal of the constitutional rotation. Raja Mannar rules with iron authority from the capital.',
  },
  {
    id: 'shouryaanga',
    name: 'SHOURYAANGA',
    symbol: '🐺',
    title: 'The Wolf Clan',
    color: '#A8A8A8',
    shadowColor: 'rgba(168,168,168,0.2)',
    borderColor: 'rgba(168,168,168,0.2)',
    bg: 'rgba(168,168,168,0.04)',
    status: 'Secretly Surviving',
    statusColor: '#A8A8A8',
    traits: 'Courage & Vengeance',
    detail:
      'The rightful rulers of Khansaar, genocided in 1985 by Raja Mannar who ordered the killing of the Dhaara Raisaar. Believed extinct — but secretly surviving in the shadows, waiting.',
  },
  {
    id: 'ghaniyaar',
    name: 'GHANIYAAR',
    symbol: '🦅',
    title: 'The Eagle Clan',
    color: '#8B0000',
    shadowColor: 'rgba(139,0,0,0.25)',
    borderColor: 'rgba(139,0,0,0.25)',
    bg: 'rgba(139,0,0,0.05)',
    status: 'Allied with Mannar',
    statusColor: '#8B0000',
    traits: 'Vision & Cunning',
    detail:
      'The third clan — watchers and schemers. Allied with Mannar to maintain power. Their eagle eyes miss nothing. Masters of politics, intelligence, and calculated betrayal.',
  },
]

const timelineEvents = [
  {
    year: '1127',
    title: 'Khansaar Founded',
    desc: 'Three warrior tribes unite to form the autonomous nation-state of Khansaar within India. The ancient pact of equal rule is sworn.',
    color: '#C9A84C',
  },
  {
    year: '1947',
    title: 'Nibandhana Established',
    desc: 'The constitutional framework is codified. The 40-year rotation system is enshrined — each clan rules for 40 years, then power transfers peacefully.',
    color: '#C9A84C',
  },
  {
    year: '1985',
    title: 'The Great Betrayal',
    desc: 'Raja Mannar orders the genocide of the Shouryaanga clan. Dhaara Raisaar is killed. The constitution is violated for the first time. Mannar seizes permanent power.',
    color: '#8B0000',
  },
  {
    year: '2010',
    title: 'Ceasefire Terminated',
    desc: "Vardha casts the deciding vote to terminate the ceasefire. The fragile peace that held Khansaar together begins to crack.",
    color: '#8B0000',
  },
  {
    year: '2017',
    title: 'Deva Revealed',
    desc: 'Devaratha Raisaar — the last surviving heir of the Shouryaanga bloodline — is revealed. Vardha declares Deva his Salaar. The reckoning begins.',
    color: '#A8A8A8',
  },
]

const hierarchy = [
  {
    role: 'Karta',
    desc: 'King of Khansaar',
    count: '1 person',
    provinces: '15 provinces',
    votes: '—',
    color: '#C9A84C',
    size: 'text-lg',
  },
  {
    role: 'Doras',
    desc: 'Lords of Khansaar',
    count: '8 people',
    provinces: '10–12 provinces each',
    votes: '3 votes',
    color: '#A8A8A8',
    size: 'text-base',
  },
  {
    role: 'Kapus',
    desc: 'Governors',
    count: '61 people',
    provinces: '1 province each',
    votes: '1 vote',
    color: '#888',
    size: 'text-sm',
  },
]

export default function WorldPage() {
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
          Lore &bull; Encyclopedia
        </p>
        <h1
          className="text-gold-gradient font-bold tracking-[0.1em] mb-6"
          style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(2rem, 6vw, 4rem)' }}
        >
          THE WORLD
        </h1>
        <div className="divider-gold mx-auto mb-6" style={{ width: '160px' }} />
        <p className="text-[#B8B8B8] text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          Everything you need to understand Khansaar — its laws, clans, hierarchy, and blood-soaked history.
        </p>
      </motion.div>

      {/* What is Khansaar */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <h2
          className="text-[#C9A84C] text-sm tracking-[0.35em] uppercase mb-6"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          What is Khansaar?
        </h2>
        <div className="p-8 border border-[#C9A84C]/15 bg-[#0a0a0a]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { label: 'Status', value: 'Autonomous Nation-State within India' },
              { label: 'Founded', value: '1127 AD by Three Warrior Tribes' },
              { label: 'Governance', value: 'Constitutional Monarchy with Rotation' },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="text-[#C9A84C]/60 text-[10px] tracking-[0.3em] uppercase mb-2"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {item.label}
                </p>
                <p className="text-[#E5E5E5] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="divider-gold mt-8 mb-8" />
          <p className="text-[#C0C0C0] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Khansaar is a sovereign territory embedded within modern India — operating under its own ancient
            constitutional order, the Nibandhana. It is not merely a kingdom but a civilization, with its own
            laws, clans, and a delicate balance of power maintained through centuries of blood and oath.
          </p>
        </div>
      </motion.section>

      {/* Interactive Map */}
      <KhansaarMap />

      {/* Province Stats */}
      <ProvinceStats />

      {/* The Nibandhana */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <h2
          className="text-[#C9A84C] text-sm tracking-[0.35em] uppercase mb-6"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          The Nibandhana — Constitution of Khansaar
        </h2>
        <div className="border border-[#C9A84C]/15 bg-[#0a0a0a] divide-y divide-[#C9A84C]/10">
          {[
            {
              title: 'Established',
              detail: '1947 — codified alongside India\'s independence',
            },
            {
              title: 'Rotation System',
              detail: 'Each clan rules for 40 years, then power rotates to the next — by constitutional law',
            },
            {
              title: 'Voting — Doras',
              detail: 'Lords (Doras) receive thick bangles and 3 votes each in governance decisions',
            },
            {
              title: 'Voting — Kapus',
              detail: 'Governors (Kapus) receive thin bangles and 1 vote each',
            },
            {
              title: 'The Bangles System',
              detail: 'Thin bangle = Kapu (1 vote) / Thick bangle = Dora (3 votes). Bangles are the mark of legitimacy.',
            },
            {
              title: 'Violation',
              detail: '1985 — Raja Mannar violated the Nibandhana by ordering the Shouryaanga genocide. The first constitutional breach in Khansaar\'s history.',
            },
          ].map((item) => (
            <div key={item.title} className="px-8 py-5 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8">
              <span
                className="text-[#C9A84C]/70 text-xs tracking-[0.2em] uppercase min-w-[160px]"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {item.title}
              </span>
              <span className="text-[#C0C0C0] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Three Clans */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <h2
          className="text-[#C9A84C] text-sm tracking-[0.35em] uppercase mb-6"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          The Three Clans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {clans.map((clan, i) => (
            <motion.div
              key={clan.id}
              id={clan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="p-6 border group transition-all duration-300"
              style={{
                borderColor: clan.borderColor,
                background: clan.bg,
                backgroundColor: '#0a0a0a',
              }}
            >
              <div className="mb-4" style={{ color: clan.color }}>
                {clan.id === 'mannar' && <BullIcon size={56} />}
                {clan.id === 'shouryaanga' && <WolfIcon size={56} />}
                {clan.id === 'ghaniyaar' && <EagleIcon size={56} />}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: clan.statusColor }} />
                <span
                  className="text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: clan.statusColor, fontFamily: 'Cinzel, serif' }}
                >
                  {clan.status}
                </span>
              </div>
              <h3
                className="text-xl font-bold tracking-[0.12em] mb-1"
                style={{ color: clan.color, fontFamily: 'Cinzel, serif' }}
              >
                {clan.name}
              </h3>
              <p
                className="text-xs tracking-[0.15em] mb-1"
                style={{ color: clan.color + '70', fontFamily: 'Cinzel, serif' }}
              >
                {clan.title}
              </p>
              <p
                className="text-xs mb-4"
                style={{ color: clan.color + '90', fontFamily: 'Cinzel, serif' }}
              >
                {clan.traits}
              </p>
              <div className="h-px mb-4" style={{ background: `linear-gradient(90deg, ${clan.color}30, transparent)` }} />
              <p className="text-[#C0C0C0] text-xs leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {clan.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Hierarchy */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <h2
          className="text-[#C9A84C] text-sm tracking-[0.35em] uppercase mb-6"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          The Hierarchy — 101 Provinces
        </h2>
        {/* Pyramid visual */}
        <div className="flex flex-col items-center gap-2 mb-10 w-full">
          {hierarchy.map((tier, i) => (
            <motion.div
              key={tier.role}
              initial={{ opacity: 0, scaleX: 0.6 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex items-center justify-center text-center border"
              style={{
                width: `clamp(280px, ${40 + i * 30}%, 100%)`,
                padding: '16px 24px',
                borderColor: tier.color + '30',
                background: tier.color + '08',
              }}
            >
              <div>
                <p
                  className="font-bold tracking-[0.15em] uppercase mb-1"
                  style={{ color: tier.color, fontFamily: 'Cinzel, serif', fontSize: i === 0 ? '1.1rem' : i === 1 ? '1rem' : '0.9rem' }}
                >
                  {tier.role}
                </p>
                <p className="text-[#A8A8A8] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {tier.desc} &bull; {tier.count} &bull; {tier.provinces}
                  {tier.votes !== '—' && ` · ${tier.votes}`}
                </p>
              </div>
            </motion.div>
          ))}
          <div
            className="mt-4 text-center text-[#A8A8A8] text-xs"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Total: 101 Provinces across all three tiers
          </div>
        </div>
      </motion.section>

      {/* Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2
          className="text-[#C9A84C] text-sm tracking-[0.35em] uppercase mb-10"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          History of Khansaar — Timeline
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[40px] sm:left-[60px] top-0 bottom-0 w-px bg-[#C9A84C]/15" />

          <div className="flex flex-col gap-10">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex gap-6 sm:gap-10 pl-[64px] sm:pl-[90px]"
              >
                {/* Year dot */}
                <div
                  className="absolute left-[30px] sm:left-[48px] top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: event.color,
                    background: '#000',
                    transform: 'translateX(-50%)',
                    left: '40px',
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: event.color }}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                    <span
                      className="text-lg font-bold"
                      style={{ color: event.color, fontFamily: 'Cinzel, serif' }}
                    >
                      {event.year}
                    </span>
                    <span
                      className="text-[#E5E5E5] text-sm font-medium tracking-wide"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      {event.title}
                    </span>
                  </div>
                  <p className="text-[#C0C0C0] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
