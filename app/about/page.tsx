import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AboutHero from '@/components/AboutHero'
import AboutGenesis from '@/components/AboutGenesis'
import AboutScientific from '@/components/AboutScientific'
import AboutZeroSearch from '@/components/AboutZeroSearch'
import AboutMission from '@/components/AboutMission'
import ScrollProgress from '@/components/ScrollProgress'
import StickyBar from '@/components/StickyBar'
import MobileCTA from '@/components/MobileCTA'

export default function AboutPage() {
  return (
    <div id="app-wrapper" className="w-full h-full overflow-auto">
      <ScrollProgress />
      <StickyBar />
      <Navigation />
      <AboutHero />
      <AboutGenesis />
      <AboutScientific />
      <AboutZeroSearch />
      <AboutMission />
      <Footer />
      <MobileCTA />
    </div>
  )
}
