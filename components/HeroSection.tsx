'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4"
    >
      {/* Background layers */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, #1A2A5E 0%, #0A1228 50%, #060B1A 100%)',
        }}
      />

      {/* Conic rays */}
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          background: 'conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(201,168,76,0.04) 30deg, transparent 60deg, rgba(201,168,76,0.03) 120deg, transparent 150deg, rgba(201,168,76,0.03) 240deg, transparent 270deg)',
        }}
      />

      {/* Heritage pattern */}
      <div className="absolute inset-0 z-0 heritage-pattern opacity-30" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Emblem */}
        <motion.div variants={itemVariants}>
          <div
            className="w-24 h-24 rounded-full border-2 border-gold/70 flex items-center justify-center mb-8 animate-pulse-ring"
            style={{
              boxShadow: '0 0 30px rgba(201,168,76,0.3), inset 0 0 20px rgba(201,168,76,0.05)',
            }}
          >
            <span className="text-4xl">⚜</span>
          </div>
        </motion.div>

        {/* Tag */}
        <motion.p
          variants={itemVariants}
          className="text-gold text-xs tracking-[5px] uppercase mb-4 font-medium"
          style={{ fontFamily: 'Jost, sans-serif' }}
        >
          Est. for Unity &amp; Progress
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] text-white mb-4"
          style={{
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 0 80px rgba(201,168,76,0.25)',
          }}
        >
          THE RAJWAR
          <br />
          <span className="gold-shimmer">SOCIETY OF INDIA</span>
        </motion.h1>

        {/* Hindi subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl tracking-[6px] mb-10"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            color: '#A89868',
            letterSpacing: '5px',
          }}
        >
          एकता &bull; शिक्षा &bull; प्रगति &bull; संस्कृति
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button
            className="btn-gold"
            onClick={() => scrollTo('#community')}
          >
            ✦ Join Community
          </button>
          <button
            className="btn-outline"
            onClick={() => scrollTo('#donate')}
          >
            ◇ Support Society
          </button>
        </motion.div>

        {/* Decorative gold line */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex items-center gap-4"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-gold/40 text-xs tracking-[4px] uppercase">Royal Community</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/40" />
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('#about')}
      >
        <span className="text-[#A89868] text-[10px] tracking-[3px] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-gold/60" size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
