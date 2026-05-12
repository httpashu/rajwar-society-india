'use client'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function DonationSection() {
  return (
    <section id="donate" className="py-24 px-4 text-center">
      <Reveal>
        <SectionHeader
          tag="Contribute"
          title="Support The Rajwar Society"
          subtitle="आपका सहयोग समाज के शिक्षा, टेक्नोलॉजी और युवा विकास मिशन को मजबूत बनाएगा।"
        />
      </Reveal>

      <Reveal delay={0.2}>
        <div className="inline-block max-w-md w-full mx-auto">
          <div
            className="donation-card glass-card p-10 relative"
            style={{
              border: '1px solid rgba(201,168,76,0.4)',
              borderRadius: '8px',
            }}
          >
            {/* Corner decorations */}
            <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-gold" />
            <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-gold" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-gold" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-gold" />

            <p
              className="text-xs tracking-[4px] uppercase mb-6"
              style={{ color: '#A89868' }}
            >
              Scan to Donate
            </p>

            {/* QR placeholder */}
            <div
              className="w-44 h-44 mx-auto mb-6 flex items-center justify-center relative"
              style={{
                border: '2px dashed var(--gold-dim)',
                borderRadius: '4px',
                background: 'rgba(201,168,76,0.03)',
              }}
            >
              {/* Minimal QR illustration */}
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 opacity-70">
                <rect x="10" y="10" width="30" height="30" rx="3" fill="none" stroke="#C9A84C" strokeWidth="3.5"/>
                <rect x="16" y="16" width="18" height="18" rx="1" fill="rgba(201,168,76,0.25)" stroke="#C9A84C" strokeWidth="1.5"/>
                <rect x="60" y="10" width="30" height="30" rx="3" fill="none" stroke="#C9A84C" strokeWidth="3.5"/>
                <rect x="66" y="16" width="18" height="18" rx="1" fill="rgba(201,168,76,0.25)" stroke="#C9A84C" strokeWidth="1.5"/>
                <rect x="10" y="60" width="30" height="30" rx="3" fill="none" stroke="#C9A84C" strokeWidth="3.5"/>
                <rect x="16" y="66" width="18" height="18" rx="1" fill="rgba(201,168,76,0.25)" stroke="#C9A84C" strokeWidth="1.5"/>
                <rect x="50" y="50" width="7" height="7" fill="rgba(201,168,76,0.7)"/>
                <rect x="62" y="50" width="7" height="7" fill="rgba(201,168,76,0.7)"/>
                <rect x="74" y="50" width="7" height="7" fill="rgba(201,168,76,0.7)"/>
                <rect x="86" y="50" width="7" height="7" fill="rgba(201,168,76,0.7)"/>
                <rect x="50" y="62" width="7" height="7" fill="rgba(201,168,76,0.7)"/>
                <rect x="74" y="62" width="7" height="7" fill="rgba(201,168,76,0.7)"/>
                <rect x="50" y="74" width="7" height="7" fill="rgba(201,168,76,0.7)"/>
                <rect x="62" y="74" width="7" height="7" fill="rgba(201,168,76,0.7)"/>
                <rect x="86" y="74" width="7" height="7" fill="rgba(201,168,76,0.7)"/>
                <rect x="86" y="86" width="7" height="7" fill="rgba(201,168,76,0.7)"/>
                <rect x="50" y="86" width="7" height="7" fill="rgba(201,168,76,0.7)"/>
              </svg>
            </div>

            {/* UPI */}
            <p className="text-xs tracking-[2px] mb-1" style={{ color: '#7A6A4A' }}>UPI ID</p>
            <p
              className="text-xl mb-2 tracking-widest"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--gold)' }}
            >
              example@upi
            </p>

            <div
              className="w-24 h-px mx-auto my-5"
              style={{ background: 'linear-gradient(to right, transparent, var(--gold-dim), transparent)' }}
            />

            <p className="text-xs leading-loose mb-6 max-w-xs mx-auto" style={{ color: '#7A6A4A' }}>
              Every contribution, big or small, strengthens our community&apos;s education, technology and youth development mission.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="btn-gold py-3 px-6 text-xs">
                💛 Donate Now
              </button>
              <button className="btn-outline py-3 px-6 text-xs">
                📷 Scan &amp; Support
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
