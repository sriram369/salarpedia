'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Territory {
  id: string
  name: string
  symbol: string
  color: string
  glowColor: string
  fillColor: string
  strokeColor: string
  status: string
  provinces: number
  provinceNames: string[]
  characters: string[]
  description: string
  path: string
  labelX: number
  labelY: number
}

const territories: Territory[] = [
  {
    id: 'mannar',
    name: 'MANNAR',
    symbol: '⬡',
    color: '#C9A84C',
    glowColor: 'rgba(201,168,76,0.6)',
    fillColor: 'rgba(201,168,76,0.12)',
    strokeColor: 'rgba(201,168,76,0.7)',
    status: 'Ruling',
    provinces: 42,
    provinceNames: ['Khanpur', 'Varad', 'Sundara', 'Malla', 'Devapur', 'Rajan', 'Bhumi'],
    characters: ['Raja Mannar', 'Vardha Mannar', 'Radha Rama'],
    description: 'The heartland of Khansaar. Seat of the Karta. Vast fertile plains and the great capital fortress.',
    // Center/dominant territory — large irregular organic shape
    path: 'M 300 120 C 330 100, 380 95, 420 110 C 460 125, 490 145, 500 175 C 512 205, 510 230, 505 255 C 498 285, 480 305, 460 320 C 440 335, 415 342, 395 348 C 370 356, 345 358, 320 352 C 295 346, 272 332, 258 315 C 242 296, 238 272, 240 248 C 242 222, 252 198, 268 178 C 282 160, 295 138, 300 120 Z',
    labelX: 372,
    labelY: 228,
  },
  {
    id: 'shouryaanga',
    name: 'SHOURYAANGA',
    symbol: '◈',
    color: '#A8A8A8',
    glowColor: 'rgba(168,168,168,0.5)',
    fillColor: 'rgba(168,168,168,0.08)',
    strokeColor: 'rgba(168,168,168,0.6)',
    status: 'Exiled',
    provinces: 35,
    provinceNames: ['Shaurya', 'Vana', 'Parva', 'Dhaara', 'Raisaapur', 'Vraka', 'Sinhval'],
    characters: ['Deva (Devaratha Raisaar)', 'Bhaarava (hidden)'],
    description: 'Mountain strongholds and ancient wolf-warrior fortresses. Believed empty since 1985 — haunted by ghosts of the genocided.',
    // Outer/northern mountainous region — jagged irregular organic shape
    path: 'M 140 80 C 160 55, 200 42, 245 48 C 282 53, 300 75, 300 120 C 295 138, 282 160, 268 178 C 252 198, 242 222, 240 248 C 238 272, 242 296, 258 315 C 245 325, 228 330, 210 325 C 188 318, 170 302, 158 282 C 142 258, 135 228, 132 200 C 128 168, 130 138, 132 115 C 134 100, 138 88, 140 80 Z',
    labelX: 195,
    labelY: 210,
  },
  {
    id: 'ghaniyaar',
    name: 'GHANIYAAR',
    symbol: '◉',
    color: '#8B0000',
    glowColor: 'rgba(139,0,0,0.6)',
    fillColor: 'rgba(139,0,0,0.1)',
    strokeColor: 'rgba(139,0,0,0.65)',
    status: 'Allied',
    provinces: 24,
    provinceNames: ['Ghani', 'Azura', 'Falcon Ridge', 'Karvath', 'Eyrie'],
    characters: ['Ranga (deceased)', 'Ghaniyaar Doras'],
    description: 'Eastern eagle-lands. Commanding high ground and trade routes. Watchers of all who enter Khansaar.',
    // Eastern territory — different organic shape
    path: 'M 500 175 C 520 160, 548 155, 572 162 C 598 170, 618 190, 625 218 C 632 246, 626 276, 612 298 C 598 320, 575 334, 550 340 C 525 346, 498 340, 480 330 C 480 318, 476 305, 460 320 C 480 305, 498 285, 505 255 C 510 230, 512 205, 500 175 Z',
    labelX: 552,
    labelY: 248,
  },
]

// Province sub-region paths within each territory
const provinceLines = [
  // Mannar provinces - internal division lines
  { d: 'M 340 150 C 355 165, 365 180, 368 200', territory: 'mannar' },
  { d: 'M 420 140 C 430 160, 435 185, 430 210', territory: 'mannar' },
  { d: 'M 460 200 C 450 220, 440 240, 430 255', territory: 'mannar' },
  { d: 'M 390 260 C 375 270, 360 278, 345 280', territory: 'mannar' },
  { d: 'M 300 240 C 315 250, 330 258, 345 260', territory: 'mannar' },
  { d: 'M 350 190 C 365 200, 375 215, 380 235', territory: 'mannar' },
  // Shouryaanga provinces
  { d: 'M 175 130 C 185 150, 188 170, 182 192', territory: 'shouryaanga' },
  { d: 'M 210 100 C 215 125, 218 148, 215 172', territory: 'shouryaanga' },
  { d: 'M 160 200 C 175 215, 185 230, 182 250', territory: 'shouryaanga' },
  { d: 'M 195 250 C 200 268, 200 285, 195 300', territory: 'shouryaanga' },
  // Ghaniyaar provinces
  { d: 'M 530 190 C 540 210, 545 230, 540 250', territory: 'ghaniyaar' },
  { d: 'M 560 210 C 568 228, 570 248, 565 268', territory: 'ghaniyaar' },
  { d: 'M 510 255 C 522 265, 530 278, 528 295', territory: 'ghaniyaar' },
]

// Decorative mountains
const mountains = [
  { x: 155, y: 95, scale: 1.1 },
  { x: 175, y: 82, scale: 0.9 },
  { x: 200, y: 75, scale: 1.2 },
  { x: 225, y: 68, scale: 0.8 },
  { x: 248, y: 80, scale: 1.0 },
  { x: 580, y: 170, scale: 0.9 },
  { x: 600, y: 160, scale: 1.1 },
  { x: 620, y: 170, scale: 0.85 },
]

// River paths
const rivers = [
  'M 240 248 C 255 268, 272 288, 295 305 C 315 320, 340 328, 360 330',
  'M 395 348 C 410 365, 430 375, 455 372 C 475 369, 490 355, 490 338',
]

function MountainIcon({ x, y, scale }: { x: number; y: number; scale: number }) {
  const s = scale * 14
  return (
    <polygon
      points={`${x},${y - s} ${x - s * 0.7},${y + s * 0.4} ${x + s * 0.7},${y + s * 0.4}`}
      fill="rgba(100,100,120,0.15)"
      stroke="rgba(180,180,200,0.25)"
      strokeWidth="1"
    />
  )
}

interface TooltipState {
  territory: Territory
  x: number
  y: number
}

export default function KhansaarMap() {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  function handleTerritoryEnter(territory: Territory, e: React.MouseEvent) {
    const rect = (e.currentTarget.closest('svg') as SVGSVGElement).getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setTooltip({ territory, x, y })
    setHoveredId(territory.id)
  }

  function handleTerritoryLeave() {
    setTooltip(null)
    setHoveredId(null)
  }

  function handleTerritoryMove(e: React.MouseEvent) {
    if (!tooltip) return
    const rect = (e.currentTarget.closest('svg') as SVGSVGElement).getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setTooltip((prev) => prev ? { ...prev, x, y } : null)
  }

  function handleTerritoryTap(territory: Territory, e: React.TouchEvent) {
    e.preventDefault()
    if (hoveredId === territory.id) {
      setTooltip(null)
      setHoveredId(null)
      return
    }
    const touch = e.touches[0] || e.changedTouches[0]
    const rect = (e.currentTarget.closest('svg') as SVGSVGElement).getBoundingClientRect()
    const x = touch.clientX - rect.left
    const y = touch.clientY - rect.top
    setTooltip({ territory, x, y })
    setHoveredId(territory.id)
  }

  return (
    <section className="py-20 px-4">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <p
          className="text-[#C9A84C]/50 text-[10px] tracking-[0.5em] uppercase mb-3"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Territory &bull; Dominion
        </p>
        <h2
          className="text-[#E5E5E5] font-bold tracking-[0.2em] mb-4"
          style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.2rem, 4vw, 2rem)' }}
        >
          THE KINGDOM OF KHANSAAR
        </h2>
        <div className="divider-gold mx-auto" style={{ width: '180px' }} />
      </motion.div>

      {/* Map container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative max-w-4xl mx-auto overflow-x-auto"
      >
        <div className="min-w-[320px]">
        {/* Outer glow border */}
        <div
          className="absolute inset-0 rounded-sm pointer-events-none"
          style={{
            boxShadow: '0 0 60px rgba(201,168,76,0.08), inset 0 0 80px rgba(0,0,0,0.8)',
            border: '1px solid rgba(201,168,76,0.15)',
          }}
        />

        {/* Map SVG */}
        <div
          className="relative overflow-hidden rounded-sm"
          style={{ background: 'radial-gradient(ellipse at 50% 40%, #0d0d12 0%, #000 70%)' }}
        >
          <svg
            viewBox="0 0 760 440"
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            style={{ display: 'block' }}
          >
            {/* Background texture dots */}
            {Array.from({ length: 60 }).map((_, i) => (
              <circle
                key={i}
                cx={(i * 137.5) % 760}
                cy={(i * 89.3) % 440}
                r="0.8"
                fill="rgba(201,168,76,0.06)"
              />
            ))}

            {/* Kingdom outer border (rough organic shape) */}
            <motion.path
              d="M 132 80 C 155 52, 195 40, 248 46 C 282 50, 300 75, 300 120 C 330 100, 380 95, 420 110 C 460 125, 490 145, 500 175 C 520 160, 548 155, 572 162 C 598 170, 618 190, 625 218 C 632 246, 626 276, 612 298 C 598 320, 575 334, 550 340 C 525 346, 498 340, 480 330 C 480 318, 476 305, 460 320 C 440 335, 415 342, 395 348 C 370 356, 345 358, 320 352 C 295 346, 272 332, 258 315 C 245 325, 228 330, 210 325 C 188 318, 170 302, 158 282 C 142 258, 135 228, 132 200 C 128 168, 130 138, 132 115 Z"
              fill="none"
              stroke="rgba(201,168,76,0.3)"
              strokeWidth="2"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />

            {/* Rivers */}
            {rivers.map((d, i) => (
              <motion.path
                key={i}
                d={d}
                fill="none"
                stroke="rgba(80,140,200,0.35)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="4 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 + i * 0.4 }}
              />
            ))}

            {/* Province divider lines */}
            {provinceLines.map((line, i) => (
              <motion.path
                key={i}
                d={line.d}
                fill="none"
                stroke={
                  line.territory === 'mannar'
                    ? 'rgba(201,168,76,0.2)'
                    : line.territory === 'shouryaanga'
                    ? 'rgba(168,168,168,0.18)'
                    : 'rgba(139,0,0,0.2)'
                }
                strokeWidth="1"
                strokeDasharray="3 3"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + i * 0.08 }}
              />
            ))}

            {/* Territory fills + interactive hit areas */}
            {territories.map((territory, i) => (
              <motion.path
                key={territory.id}
                d={territory.path}
                fill={hoveredId === territory.id ? territory.fillColor.replace('0.12', '0.22').replace('0.08', '0.18').replace('0.1', '0.2') : territory.fillColor}
                stroke={territory.strokeColor}
                strokeWidth={hoveredId === territory.id ? 2.5 : 1.8}
                style={{
                  cursor: 'pointer',
                  filter: hoveredId === territory.id
                    ? `drop-shadow(0 0 12px ${territory.glowColor}) drop-shadow(0 0 24px ${territory.glowColor.replace('0.6', '0.3')})`
                    : `drop-shadow(0 0 4px ${territory.glowColor.replace('0.6', '0.2').replace('0.5', '0.15')})`,
                  transition: 'all 0.3s ease',
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.2 }}
                onMouseEnter={(e) => handleTerritoryEnter(territory, e)}
                onMouseLeave={handleTerritoryLeave}
                onMouseMove={handleTerritoryMove}
              />
            ))}

            {/* Mountains */}
            {mountains.map((m, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 + i * 0.06 }}
              >
                <MountainIcon x={m.x} y={m.y} scale={m.scale} />
              </motion.g>
            ))}

            {/* Territory labels */}
            {territories.map((territory, i) => (
              <motion.g
                key={territory.id + '-label'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.2 }}
              >
                <text
                  x={territory.labelX}
                  y={territory.labelY - 10}
                  textAnchor="middle"
                  fill={territory.color}
                  fontSize="10"
                  letterSpacing="3"
                  fontFamily="Cinzel, serif"
                  fontWeight="700"
                  opacity="0.9"
                >
                  {territory.name}
                </text>
                <text
                  x={territory.labelX}
                  y={territory.labelY + 6}
                  textAnchor="middle"
                  fill={territory.color}
                  fontSize="7.5"
                  letterSpacing="1.5"
                  fontFamily="Cinzel, serif"
                  opacity="0.55"
                >
                  {territory.provinces} PROVINCES
                </text>
              </motion.g>
            ))}

            {/* Capital star marker */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, type: 'spring' }}
            >
              <circle cx="372" cy="228" r="5" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.9" />
              <circle cx="372" cy="228" r="2.5" fill="#C9A84C" opacity="0.9" />
              <circle cx="372" cy="228" r="8" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
            </motion.g>

            {/* River label */}
            <motion.text
              x="320"
              y="345"
              fill="rgba(80,140,200,0.5)"
              fontSize="7"
              letterSpacing="2"
              fontFamily="Cinzel, serif"
              fontStyle="italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              River Khaanvati
            </motion.text>

            {/* Compass rose (top-right corner) */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
            >
              <circle cx="700" cy="60" r="20" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="1" />
              <line x1="700" y1="42" x2="700" y2="78" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5" />
              <line x1="682" y1="60" x2="718" y2="60" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5" />
              <polygon points="700,42 697,54 700,51 703,54" fill="rgba(201,168,76,0.7)" />
              <text x="700" y="38" textAnchor="middle" fill="rgba(201,168,76,0.6)" fontSize="8" fontFamily="Cinzel, serif">N</text>
            </motion.g>
          </svg>

          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                key="tooltip"
                initial={{ opacity: 0, scale: 0.9, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 8 }}
                transition={{ duration: 0.18 }}
                className="absolute pointer-events-none z-30"
                style={{
                  left: tooltip.x + 16,
                  top: tooltip.y - 20,
                  maxWidth: '240px',
                }}
              >
                <div
                  className="p-4 rounded-sm"
                  style={{
                    background: 'rgba(6,6,8,0.96)',
                    border: `1px solid ${tooltip.territory.strokeColor}`,
                    boxShadow: `0 0 24px ${tooltip.territory.glowColor.replace('0.6', '0.25').replace('0.5', '0.2')}`,
                  }}
                >
                  {/* Clan name */}
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: tooltip.territory.color }}
                    />
                    <span
                      className="text-xs font-bold tracking-[0.2em]"
                      style={{ color: tooltip.territory.color, fontFamily: 'Cinzel, serif' }}
                    >
                      {tooltip.territory.name}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-[9px] tracking-[0.25em] uppercase px-1.5 py-0.5"
                      style={{
                        color: tooltip.territory.color,
                        background: tooltip.territory.color + '18',
                        border: `1px solid ${tooltip.territory.color}30`,
                        fontFamily: 'Cinzel, serif',
                      }}
                    >
                      {tooltip.territory.status}
                    </span>
                    <span className="text-[#555] text-[9px]" style={{ fontFamily: 'Cinzel, serif' }}>
                      {tooltip.territory.provinces} Provinces
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#666] text-[10px] leading-relaxed mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {tooltip.territory.description}
                  </p>

                  {/* Characters */}
                  <div>
                    <p
                      className="text-[8px] tracking-[0.25em] uppercase mb-1"
                      style={{ color: tooltip.territory.color + '80', fontFamily: 'Cinzel, serif' }}
                    >
                      Key Characters
                    </p>
                    {tooltip.territory.characters.map((c) => (
                      <p key={c} className="text-[#888] text-[9px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        · {c}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 101 Provinces counter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-6"
        >
          <span
            className="text-[#C9A84C]/50 text-[11px] tracking-[0.5em] uppercase"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            101 Provinces &bull; 3 Clans &bull; 1 Kingdom
          </span>
        </motion.div>
      </motion.div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-6 mt-8"
      >
        {territories.map((t) => (
          <div key={t.id} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-sm"
              style={{
                background: t.fillColor,
                border: `1.5px solid ${t.strokeColor}`,
                boxShadow: `0 0 6px ${t.glowColor.replace('0.6', '0.3')}`,
              }}
            />
            <span
              className="text-[10px] tracking-[0.25em] uppercase"
              style={{ color: t.color, fontFamily: 'Cinzel, serif' }}
            >
              {t.name}
            </span>
            <span className="text-[#444] text-[9px]" style={{ fontFamily: 'Cinzel, serif' }}>
              {t.status}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-0.5"
            style={{ background: 'rgba(80,140,200,0.5)', borderTop: '1px dashed rgba(80,140,200,0.5)' }}
          />
          <span className="text-[10px] tracking-[0.2em] text-[#446]" style={{ fontFamily: 'Cinzel, serif' }}>
            Rivers
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-0.5"
            style={{ background: 'rgba(201,168,76,0.3)', borderTop: '1px dashed rgba(201,168,76,0.3)' }}
          />
          <span className="text-[10px] tracking-[0.2em] text-[#664]" style={{ fontFamily: 'Cinzel, serif' }}>
            Kingdom Border
          </span>
        </div>
      </motion.div>
    </section>
  )
}
