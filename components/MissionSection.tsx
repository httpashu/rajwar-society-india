'use client'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const missions = [
  {
    num: '01',
    hi: 'समाज में एकता और भाईचारा बढ़ाना',
    en: 'Building unity and brotherhood across all Rajwar communities nationwide.',
  },
  {
    num: '02',
    hi: 'युवाओं को शिक्षा और करियर में सहायता देना',
    en: 'Empowering youth through scholarships, mentorship and career guidance.',
  },
  {
    num: '03',
    hi: 'जॉब और बिजनेस अवसर साझा करना',
    en: 'Creating a platform to openly share job openings and business opportunities.',
  },
  {
    num: '04',
    hi: 'AI और डिजिटल स्किल्स के प्रति जागरूक बनाना',
    en: 'Driving awareness about AI, technology and digital skills for the future.',
  },
  {
    num: '05',
    hi: 'समाज की संस्कृति और विरासत को आगे बढ़ाना',
    en: 'Preserving and celebrating the rich cultural heritage of the Rajwar community.',
  },
  {
    num: '06',
    hi: 'एक मजबूत राजवार नेटवर्क बनाना',
    en: 'Building a powerful, connected and supportive Rajwar network across India.',
  },
]

export default function MissionSection() {
  return (
    <div
      className="py-24 px-4 heritage-pattern"
      style={{ background: 'linear-gradient(180deg, var(--navy) 0%, var(--navy3) 50%, var(--navy) 100%)' }}
    >
      <section id="mission" className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeader
            tag="Our Purpose"
            title="हमारा उद्देश्य"
            subtitle="Six pillars that guide The Rajwar Society of India toward a stronger, united future"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {missions.map((m, i) => (
            <Reveal key={m.num} delay={i * 0.1}>
              <div
                className="mission-card flex items-start gap-5 glass-card p-6 rounded transition-all duration-300"
                style={{ borderRadius: '6px' }}
              >
                {/* Number */}
                <span
                  className="text-4xl font-black leading-none flex-shrink-0 w-14"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--gold-dim)',
                    opacity: 0.7,
                  }}
                >
                  {m.num}
                </span>
                {/* Text */}
                <div>
                  <p
                    className="text-sm font-medium mb-1.5 leading-snug"
                    style={{ color: '#D4C090', fontFamily: 'Jost, sans-serif' }}
                  >
                    {m.hi}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: '#7A6A4A' }}>
                    {m.en}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
