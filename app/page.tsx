'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BullIcon, WolfIcon, EagleIcon } from '@/components/ClanIcons'

const clans = [
  {
    name: 'MANNAR',
    symbol: '🐂',
    title: 'The Bull Clan',
    color: '#C9A84C',
    shadowColor: 'rgba(201,168,76,0.35)',
    borderColor: 'rgba(201,168,76,0.3)',
    bgGradient: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.02) 100%)',
    description: 'Strength & Authority. Currently ruling Khansaar.',
    status: 'RULING',
    statusColor: '#C9A84C',
    href: '/world#mannar',
  },
  {
    name: 'SHOURYAANGA',
    symbol: '🐺',
    title: 'The Wolf Clan',
    color: '#A8A8A8',
    shadowColor: 'rgba(168,168,168,0.3)',
    borderColor: 'rgba(168,168,168,0.25)',
    bgGradient: 'linear-gradient(135deg, rgba(168,168,168,0.08) 0%, rgba(168,168,168,0.02) 100%)',
    description: 'Courage & Vengeance. Genocided in 1985. Secretly surviving.',
    status: 'EXILED',
    statusColor: '#A8A8A8',
    href: '/world#shouryaanga',
  },
  {
    name: 'GHANIYAAR',
    symbol: '🦅',
    title: 'The Eagle Clan',
    color: '#8B0000',
    shadowColor: 'rgba(139,0,0,0.4)',
    borderColor: 'rgba(139,0,0,0.3)',
    bgGradient: 'linear-gradient(135deg, rgba(139,0,0,0.1) 0%, rgba(139,0,0,0.03) 100%)',
    description: 'Vision & Cunning. Allied with Mannar. Watchers of power.',
    status: 'ALLIED',
    statusColor: '#8B0000',
    href: '/world#ghaniyaar',
  },
]

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="grain-overlay relative min-h-[100svh] flex flex-col items-center justify-center px-4 text-center">
        {/* Deep atmospheric background layers */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              'radial-gradient(ellipse 120% 80% at 50% -10%, rgba(20,10,0,0.95) 0%, transparent 60%)',
              'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 70%)',
              'radial-gradient(ellipse 60% 40% at 20% 80%, rgba(139,0,0,0.06) 0%, transparent 60%)',
              'radial-gradient(ellipse 50% 35% at 80% 90%, rgba(168,168,168,0.04) 0%, transparent 55%)',
            ].join(', '),
          }}
        />
        {/* Smoke/fog layers using CSS */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              'radial-gradient(ellipse 200% 30% at 50% 100%, rgba(5,3,0,0.8) 0%, transparent 50%)',
              'radial-gradient(ellipse 150% 20% at 50% 0%, rgba(0,0,0,0.9) 0%, transparent 40%)',
            ].join(', '),
          }}
        />

        {/* Animated vertical lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px"
              style={{
                left: `${15 + i * 14}%`,
                top: 0,
                bottom: 0,
                background: `linear-gradient(180deg, transparent 0%, rgba(201,168,76,${0.03 + i * 0.01}) 50%, transparent 100%)`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.15, duration: 1.5 }}
            />
          ))}
        </div>

        <div className="relative z-20 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span
              className="text-[#C9A84C]/60 text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Prashanth Neel &bull; Hombale Films
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gold-gradient font-black leading-none tracking-[0.15em] mb-6"
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(2rem, 7vw, 5.5rem)',
            }}
          >
            SALARPEDIA
          </motion.h1>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="divider-gold mx-auto mb-6"
            style={{ width: '240px' }}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[#A8A8A8] text-xl sm:text-2xl tracking-[0.25em] uppercase mb-12"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            The Complete Lore of Khansaar
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-24"
          >
            <Link
              href="/world"
              className="px-8 py-3 border border-[#C9A84C]/50 text-[#C9A84C] text-sm tracking-[0.25em] uppercase hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] transition-all duration-300"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Explore The World
            </Link>
            <Link
              href="/join"
              className="px-8 py-3 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C]/80 text-sm tracking-[0.25em] uppercase hover:bg-[#C9A84C]/20 transition-all duration-300"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Join Khansaar
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span
            className="text-[#999] text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Scroll
          </span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-[#C9A84C]/50 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      </section>

      {/* Clan Cards Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-[#C9A84C] text-sm tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            The Three Clans
          </h2>
          <p
            className="text-[#B8B8B8] text-base max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Three warrior tribes founded Khansaar in 1127. Their ancient pact governs all.
          </p>
          <div className="divider-gold mx-auto mt-6" style={{ width: '120px' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clans.map((clan, i) => (
            <motion.div
              key={clan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative group cursor-pointer"
            >
              <Link href={clan.href}>
                <div
                  className="relative p-8 border rounded-sm overflow-hidden transition-all duration-300"
                  style={{
                    background: '#0a0a0a',
                    borderColor: clan.borderColor,
                  }}
                >
                  {/* Hover glow overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-sm"
                    style={{ boxShadow: `inset 0 0 40px ${clan.shadowColor}` }}
                  />

                  <div className="mb-6" style={{ color: clan.color }}>
                    {clan.name === 'MANNAR' && <BullIcon size={60} />}
                    {clan.name === 'SHOURYAANGA' && <WolfIcon size={60} />}
                    {clan.name === 'GHANIYAAR' && <EagleIcon size={60} />}
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: clan.statusColor }} />
                    <span
                      className="text-[10px] tracking-[0.35em] uppercase"
                      style={{ color: clan.statusColor, fontFamily: 'Cinzel, serif' }}
                    >
                      {clan.status}
                    </span>
                  </div>

                  <h3
                    className="text-2xl font-bold tracking-[0.15em] mb-1"
                    style={{ color: clan.color, fontFamily: 'Cinzel, serif' }}
                  >
                    {clan.name}
                  </h3>
                  <p
                    className="text-xs tracking-[0.2em] mb-4"
                    style={{ color: clan.color + '80', fontFamily: 'Cinzel, serif' }}
                  >
                    {clan.title}
                  </p>

                  <div
                    className="h-px mb-4"
                    style={{ background: `linear-gradient(90deg, ${clan.color}40, transparent)` }}
                  />

                  <p
                    className="text-[#C0C0C0] text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {clan.description}
                  </p>

                  <div
                    className="mt-6 text-xs tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: clan.color, fontFamily: 'Cinzel, serif' }}
                  >
                    Explore &rarr;
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick navigation section */}
      <section className="py-16 px-4 max-w-7xl mx-auto border-t border-[#C9A84C]/10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              href: '/world',
              label: 'The World',
              desc: "Khansaar's constitution, clans, hierarchy, and history",
              icon: '🏛',
            },
            {
              href: '/situation',
              label: 'Current Situation',
              desc: 'Characters, power balance, and where Part 1 ends',
              icon: '⚔️',
            },
            {
              href: '/join',
              label: 'Join Khansaar',
              desc: 'Choose your clan and pledge your loyalty',
              icon: '🤝',
            },
          ].map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={item.href}
                className="block p-6 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 bg-[#0a0a0a] hover:bg-[#111] transition-all duration-300 group"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3
                  className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase mb-2 group-hover:text-[#e2c070] transition-colors"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {item.label}
                </h3>
                <p className="text-[#999] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
