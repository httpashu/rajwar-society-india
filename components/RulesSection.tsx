'use client'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const rules = [
  {
    icon: '🤲',
    title: 'सभी सदस्यों का सम्मान करें',
    body: 'Treat every member with dignity and respect, regardless of age, profession, or background. Our community is built on mutual honor and inclusivity for all.',
  },
  {
    icon: '🚫',
    title: 'फेक न्यूज़ और स्पैम शेयर न करें',
    body: 'Do not share unverified news, spam, or misleading information. Always verify before sharing — truth and accuracy strengthen our community\'s trust.',
  },
  {
    icon: '🌟',
    title: 'सकारात्मक वातावरण बनाए रखें',
    body: 'Maintain a positive, encouraging environment. Share uplifting content, achievements, and opportunities that inspire and motivate fellow members.',
  },
  {
    icon: '🤝',
    title: 'एक-दूसरे की मदद करें',
    body: 'Support each other in times of need. Whether career advice, educational guidance, or moral support — we are stronger when we grow together.',
  },
  {
    icon: '⚖️',
    title: 'विवाद और अभद्र भाषा से बचें',
    body: 'Avoid conflict, abusive language, or personal attacks. Disagreements should be resolved peacefully and respectfully at all times within our community.',
  },
]

export default function RulesSection() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section id="rules" className="py-24 px-4 max-w-3xl mx-auto">
      <Reveal>
        <SectionHeader
          tag="Community Guidelines"
          title="समाज के नियम"
          subtitle="Our community thrives on respect, trust, and shared values that unite us all"
        />
      </Reveal>

      <div className="space-y-0">
        {rules.map((rule, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div
              className="border-b cursor-pointer"
              style={{ borderColor: 'rgba(201,168,76,0.12)' }}
              onClick={() => toggle(i)}
            >
              <div className="flex items-center gap-4 py-5 group">
                {/* Number circle */}
                <div
                  className="w-8 h-8 rounded-full border flex items-center justify-center text-xs flex-shrink-0 transition-colors duration-300"
                  style={{
                    borderColor: open === i ? 'var(--gold)' : 'var(--gold-dim)',
                    color: open === i ? 'var(--gold)' : 'var(--gold-dim)',
                    fontFamily: 'Playfair Display, serif',
                  }}
                >
                  {i + 1}
                </div>

                {/* Icon */}
                <span className="text-xl flex-shrink-0">{rule.icon}</span>

                {/* Title */}
                <p
                  className="flex-1 text-sm md:text-base leading-relaxed transition-colors duration-300"
                  style={{
                    fontFamily: 'Jost, sans-serif',
                    color: open === i ? '#F0D080' : '#C5B88A',
                  }}
                >
                  {rule.title}
                </p>

                {/* Arrow */}
                <motion.div
                  animate={{ rotate: open === i ? 90 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0"
                  style={{ color: 'var(--gold-dim)' }}
                >
                  <ChevronRight size={18} />
                </motion.div>
              </div>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p
                      className="text-sm leading-relaxed pb-5 pl-16"
                      style={{ color: '#7A6A4A', fontFamily: 'Jost, sans-serif' }}
                    >
                      {rule.body}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
