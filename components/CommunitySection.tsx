'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const stats = [
  { id: 'members', target: 1200, label: 'Members', suffix: '+' },
  { id: 'students', target: 340, label: 'Students', suffix: '+' },
  { id: 'professionals', target: 180, label: 'Professionals', suffix: '+' },
  { id: 'opportunities', target: 650, label: 'Opportunities Shared', suffix: '+' },
]

function CounterNum({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      const eased = Math.easeOut ? Math.easeOut(step / steps) : step / steps
      current = Math.min(Math.round(increment * step * (1 - Math.pow(step / steps - 1, 3))), target)
      setCount(current)
      if (step >= steps) {
        setCount(target)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="stat-number font-serif text-5xl md:text-6xl font-black block">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function CommunitySection() {
  return (
    <div
      id="community"
      className="py-20 px-4"
      style={{
        background: 'var(--navy2)',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeader
            tag="Growing Together"
            title="Our Community"
            subtitle="A rapidly growing family united by shared values, ambitions and pride"
          />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.1}>
              <div className="text-center">
                <CounterNum target={s.target} suffix={s.suffix} />
                <p
                  className="text-xs tracking-[3px] uppercase mt-3"
                  style={{ color: '#A89868', fontFamily: 'Jost, sans-serif' }}
                >
                  {s.label}
                </p>
                <div
                  className="w-8 h-px mx-auto mt-3"
                  style={{ background: 'var(--gold-dim)' }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Timeline bar */}
        <Reveal delay={0.4}>
          <div className="mt-16 relative">
            <p
              className="text-center text-xs tracking-[3px] uppercase mb-6"
              style={{ color: '#7A6A4A' }}
            >
              Community Growth Timeline
            </p>
            <div className="flex items-center gap-0">
              {['2022', '2023', '2024', '2025', '2026+'].map((year, i, arr) => (
                <div key={year} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-3 h-3 rounded-full border-2 transition-all duration-500"
                      style={{
                        borderColor: 'var(--gold)',
                        background: i < arr.length - 1 ? 'var(--gold)' : 'transparent',
                        boxShadow: i === arr.length - 2 ? '0 0 12px rgba(201,168,76,0.6)' : 'none',
                      }}
                    />
                    <span
                      className="text-[10px] mt-2 tracking-wider"
                      style={{ color: i < arr.length - 1 ? 'var(--gold)' : 'var(--gold-dim)' }}
                    >
                      {year}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div
                      className="flex-1 h-px"
                      style={{
                        background: i < arr.length - 2
                          ? 'var(--gold)'
                          : 'linear-gradient(to right, var(--gold), var(--gold-dim))',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
