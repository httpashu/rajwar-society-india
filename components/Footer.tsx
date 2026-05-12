'use client'
import { Instagram, Youtube, Linkedin, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="text-center pt-16 pb-8 px-4"
      style={{
        background: '#030710',
        borderTop: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      {/* Logo */}
      <div className="mb-2">
        <span
          className="text-2xl font-black tracking-[4px] uppercase"
          style={{ fontFamily: 'Playfair Display, serif', color: 'var(--gold)' }}
        >
          ⚜ The Rajwar Society of India
        </span>
      </div>
      <p
        className="text-xs tracking-[5px] uppercase mb-8"
        style={{ color: '#7A6A4A' }}
      >
        Built for Unity &amp; Progress
      </p>

      {/* WhatsApp CTA */}
      <a
        href="https://chat.whatsapp.com/HG3blzeQ7ydEKCTkOtmLYr"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-7 py-3 rounded-full text-white text-sm font-semibold tracking-wider uppercase mb-8 transition-all duration-300 hover:-translate-y-1"
        style={{
          background: 'linear-gradient(135deg, #1a5c35, #25D366 40%, #1a5c35)',
          boxShadow: '0 0 25px rgba(37,211,102,0.25)',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 50px rgba(37,211,102,0.45)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 25px rgba(37,211,102,0.25)'
        }}
      >
        <MessageCircle size={18} />
        Join WhatsApp Community
      </a>

      {/* Gold divider */}
      <div
        className="w-48 h-px mx-auto mb-8"
        style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }}
      />

      {/* Social links */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {[
          { icon: <Instagram size={16} />, label: 'Instagram', href: '#' },
          { icon: <Youtube size={16} />, label: 'YouTube', href: '#' },
          { icon: <Linkedin size={16} />, label: 'LinkedIn', href: '#' },
          { icon: <MessageCircle size={16} />, label: 'WhatsApp', href: '#' },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              border: '1px solid rgba(201,168,76,0.2)',
              color: '#7A6A4A',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--gold)'
              e.currentTarget.style.color = 'var(--gold)'
              e.currentTarget.style.boxShadow = '0 0 15px rgba(201,168,76,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
              e.currentTarget.style.color = '#7A6A4A'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Navigation links */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {['About', 'Mission', 'Donate', 'Community', 'Rules'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-xs tracking-[2px] uppercase transition-colors duration-300 hover:text-gold"
            style={{ color: '#7A6A4A', textDecoration: 'none' }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p
        className="text-xs tracking-[2px]"
        style={{ color: 'var(--gold-dim)' }}
      >
        © {new Date().getFullYear()} The Rajwar Society of India
        &nbsp;•&nbsp;
        एकता • शिक्षा • प्रगति • संस्कृति
      </p>
    </footer>
  )
}
