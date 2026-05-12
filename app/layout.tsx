import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Rajwar Society of India | एकता • शिक्षा • प्रगति • संस्कृति',
  description: 'A trusted, progressive community dedicated to uniting the Rajwar community, empowering youth through education, careers, AI & technology, and preserving cultural heritage.',
  keywords: 'Rajwar Society, Rajwar Community, India, Education, Unity, Heritage',
  openGraph: {
    title: 'The Rajwar Society of India',
    description: 'एकता • शिक्षा • प्रगति • संस्कृति — Uniting the Rajwar Community',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
