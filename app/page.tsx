import ScrollProgress from '@/components/ScrollProgress'
import StickyBar from '@/components/StickyBar'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Careers from '@/components/Careers'
import Pricing from '@/components/Pricing'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import MobileCTA from '@/components/MobileCTA'

export default function Home() {
  return (
    <div id="app-wrapper" className="w-full h-full overflow-auto">
      <ScrollProgress />
      <StickyBar />
      <Navigation />
      <Hero />
      <Features />
      <Careers />
      <Pricing />
      <FinalCTA />
      <Footer />
      <MobileCTA />
    </div>
  )
}
