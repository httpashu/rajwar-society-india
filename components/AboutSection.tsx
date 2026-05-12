'use client'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const features = [
  { icon: '🎓', title: 'Education', desc: 'Scholarships, resources & academic guidance for all students' },
  { icon: '💼', title: 'Career', desc: 'Job opportunities, mentorship & professional growth paths' },
  { icon: '🤖', title: 'AI & Technology', desc: 'Digital skills, modern tech awareness & future readiness' },
  { icon: '🤝', title: 'Networking', desc: 'Connect with professionals and leaders across India' },
  { icon: '🏛️', title: 'Culture & Heritage', desc: 'Preserve and celebrate our rich Rajwar traditions' },
  { icon: '📈', title: 'Business', desc: 'Entrepreneurship support and business opportunities' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <Reveal>
        <SectionHeader
          tag="Our Foundation"
          title="राजवार समाज के बारे में"
          subtitle="A trusted, progressive community dedicated to unity, education & opportunity"
        />
      </Reveal>

      {/* About card */}
      <Reveal delay={0.1}>
        <div
          className="glass-card rounded-lg p-8 md:p-12 mb-12 relative overflow-hidden"
          style={{ borderRadius: '8px' }}
        >
          {/* Top glow line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }}
          />
          {/* Corner decorations */}
          <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-gold/50" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 border-gold/50" />

          <p
            className="text-lg md:text-xl leading-[2] mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#C5B88A' }}
          >
            राजवार समाज को एकजुट करने, आगे बढ़ाने और नई पीढ़ी को बेहतर अवसर देने के उद्देश्य से{' '}
            <strong style={{ color: 'var(--gold-light)' }}>
              &lsquo;The Rajwar Society of India&rsquo;
            </strong>{' '}
            एक विश्वसनीय और प्रगतिशील समुदाय है।
          </p>
          <p
            className="text-lg md:text-xl leading-[2]"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#C5B88A' }}
          >
            यह केवल एक WhatsApp Community नहीं, बल्कि एक ऐसा प्लेटफ़ॉर्म है जहाँ समाज के युवा,
            विद्यार्थी, परिवार और प्रोफेशनल लोग एक-दूसरे से जुड़कर सीख सकते हैं, सहयोग कर सकते हैं
            और साथ मिलकर आगे बढ़ सकते हैं।
          </p>
        </div>
      </Reveal>

      {/* Feature cards grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.08}>
            <div
              className="feature-card glass-card rounded p-6 text-center cursor-default"
              style={{ borderRadius: '6px', minHeight: '160px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3
                className="text-sm font-semibold mb-2"
                style={{ color: 'var(--gold)', fontFamily: 'Playfair Display, serif' }}
              >
                {f.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#7A6A4A' }}>
                {f.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
