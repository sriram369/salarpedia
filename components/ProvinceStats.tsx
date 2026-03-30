'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  value: number
  label: string
  suffix?: string
  color: string
}

const stats: Stat[] = [
  { value: 101, label: 'Total Provinces', color: '#C9A84C' },
  { value: 3, label: 'Founding Tribes', color: '#A8A8A8' },
  { value: 8, label: 'Doras (Lords)', color: '#C9A84C' },
  { value: 61, label: 'Kapus (Governors)', color: '#A8A8A8' },
  { value: 40, label: 'Years Per Ruling Cycle', color: '#8B0000', suffix: 'yr' },
]

function AnimatedNumber({ target, color, suffix }: { target: number; color: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const steps = 50
    const increment = target / steps
    const interval = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums" style={{ color }}>
      {count}
      {suffix && <span className="text-sm ml-0.5">{suffix}</span>}
    </span>
  )
}

export default function ProvinceStats() {
  return (
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
        Kingdom at a Glance
      </h2>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px"
        style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.12)' }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-center justify-center py-8 px-4 text-center"
            style={{ background: '#050505' }}
          >
            <p
              className="font-bold mb-2 leading-none"
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              }}
            >
              <AnimatedNumber target={stat.value} color={stat.color} suffix={stat.suffix} />
            </p>
            <p
              className="text-[#555] text-[10px] tracking-[0.2em] uppercase"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
