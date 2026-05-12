'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Mission', href: '#mission' },
  { label: 'Donate', href: '#donate' },
  { label: 'Community', href: '#community' },
  { label: 'Rules', href: '#rules' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy/90 backdrop-blur-xl border-b border-gold/20 py-3'
            : 'bg-transparent py-5'
        }`}
        style={{ fontFamily: 'Jost, sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-3"
          >
            <div
              className="w-9 h-9 rounded-full border border-gold/60 flex items-center justify-center text-gold text-sm"
              style={{ boxShadow: '0 0 12px rgba(201,168,76,0.25)' }}
            >
              ⚜
            </div>
            <span
              className="hidden sm:block text-gold text-sm font-medium tracking-[3px] uppercase"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Rajwar Society
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="nav-link text-[#A89868] hover:text-gold text-xs tracking-[2px] uppercase transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#donate')}
              className="btn-gold text-xs py-2 px-5"
            >
              Support
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-gold"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 glass-card border-b border-gold/20 py-6 px-6 md:hidden"
            style={{ background: 'rgba(6,11,26,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-[#A89868] hover:text-gold text-sm tracking-[2px] uppercase transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#donate')}
                className="btn-gold text-xs py-2.5 w-full mt-2"
              >
                ✦ Support Society
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
