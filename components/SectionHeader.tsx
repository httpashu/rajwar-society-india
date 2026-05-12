interface SectionHeaderProps {
  tag: string
  title: string
  subtitle?: string
}

export default function SectionHeader({ tag, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <p
        className="text-xs tracking-[5px] uppercase mb-3"
        style={{ color: 'var(--gold)', fontFamily: 'Jost, sans-serif' }}
      >
        {tag}
      </p>
      <div className="gold-line mb-4" />
      <h2
        className="text-4xl md:text-5xl font-black text-white mb-4"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-sm leading-relaxed max-w-xl mx-auto"
          style={{ color: '#A89868', fontFamily: 'Jost, sans-serif' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
