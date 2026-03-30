'use client'

import { motion } from 'framer-motion'

interface Quote {
  text: string
  speaker: string
  about: string
  clanColor: string
  clanName: string
}

const quotes: Quote[] = [
  {
    text: 'A Salaar does not choose his battles. He ends them.',
    speaker: 'Vardha',
    about: 'Speaking of Deva',
    clanColor: '#C9A84C',
    clanName: 'Mannar',
  },
  {
    text: 'Khansaar was built on blood. It will be reclaimed in blood.',
    speaker: 'Bhaarava',
    about: 'On the war to come',
    clanColor: '#A8A8A8',
    clanName: 'Shouryaanga',
  },
  {
    text: 'The Nibandhana was written to be followed, not to be broken by those who wrote it.',
    speaker: 'Radha Rama Raikar',
    about: 'On the corruption of law',
    clanColor: '#8B0000',
    clanName: 'Ghaniyaar',
  },
  {
    text: 'You saved my life once. Now you are my life.',
    speaker: 'Vardha',
    about: 'To Deva',
    clanColor: '#C9A84C',
    clanName: 'Mannar',
  },
  {
    text: 'The wolf was never extinct. It was waiting.',
    speaker: 'Deva',
    about: 'On Shouryaanga\'s survival',
    clanColor: '#A8A8A8',
    clanName: 'Shouryaanga',
  },
  {
    text: 'A king without a Salaar is just a man with a crown.',
    speaker: 'Raja Mannar',
    about: 'On the sacred bond',
    clanColor: '#C9A84C',
    clanName: 'Mannar',
  },
  {
    text: 'Forty years is a long time to wait. It is also a long time to plan revenge.',
    speaker: 'Bhaarava',
    about: 'On the 1985 genocide',
    clanColor: '#A8A8A8',
    clanName: 'Shouryaanga',
  },
  {
    text: 'Shouryaanga does not forgive. It does not forget. It returns.',
    speaker: 'Deva',
    about: 'The wolf clan\'s promise',
    clanColor: '#A8A8A8',
    clanName: 'Shouryaanga',
  },
]

export default function QuotesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)',
          }}
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#C9A84C]/60 text-xs tracking-[0.5em] uppercase mb-4"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          The Ancient Scrolls
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-gold-gradient font-black tracking-[0.15em] mb-6"
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(2rem, 6vw, 4rem)',
          }}
        >
          SCROLLS OF KHANSAAR
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="divider-gold mx-auto mb-6"
          style={{ width: '200px' }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[#888] text-sm tracking-widest max-w-xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Words forged in the fires of Khansaar — by its rulers, its warriors, and those who carried its burden.
        </motion.p>
      </section>

      {/* Quote Cards */}
      <section className="max-w-4xl mx-auto px-4 pb-32 flex flex-col gap-0">
        {quotes.map((quote, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, delay: i * 0.05 }}
            className="relative overflow-hidden py-16 px-6 sm:px-12"
            style={{
              borderBottom: '1px solid rgba(201,168,76,0.08)',
            }}
          >
            {/* Decorative huge quotation mark */}
            <div
              aria-hidden="true"
              className="absolute top-6 left-4 sm:left-8 select-none pointer-events-none leading-none"
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: 'clamp(8rem, 20vw, 14rem)',
                color: 'rgba(201,168,76,0.06)',
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              &ldquo;
            </div>

            {/* Clan accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-0.5"
              style={{ background: `linear-gradient(180deg, transparent, ${quote.clanColor}60, transparent)` }}
            />

            <div className="relative z-10">
              {/* Clan tag */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: quote.clanColor }} />
                <span
                  className="text-[10px] tracking-[0.4em] uppercase"
                  style={{ color: quote.clanColor, fontFamily: 'Cinzel, serif' }}
                >
                  {quote.clanName}
                </span>
              </div>

              {/* Quote text */}
              <blockquote
                className="text-[#E5E5E5] leading-relaxed mb-10"
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{quote.text}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex flex-col gap-1">
                <span
                  className="font-bold tracking-[0.2em] uppercase"
                  style={{ color: quote.clanColor, fontFamily: 'Cinzel, serif', fontSize: '0.85rem' }}
                >
                  — {quote.speaker}
                </span>
                <span
                  className="text-[#666] text-xs tracking-widest"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {quote.about}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  )
}
