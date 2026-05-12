import ParticleCanvas from '@/components/ParticleCanvas'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import MissionSection from '@/components/MissionSection'
import DonationSection from '@/components/DonationSection'
import CommunitySection from '@/components/CommunitySection'
import RulesSection from '@/components/RulesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      {/* Floating particle background */}
      <ParticleCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <DonationSection />
      <CommunitySection />
      <RulesSection />
      <Footer />
    </main>
  )
}
