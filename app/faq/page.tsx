import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FAQHero from '@/components/FAQHero'
import FAQContent from '@/components/FAQContent'
import ScrollProgress from '@/components/ScrollProgress'
import StickyBar from '@/components/StickyBar'
import MobileCTA from '@/components/MobileCTA'

export default function FAQPage() {
  return (
    <div id="app-wrapper" className="w-full h-full overflow-auto">
      <ScrollProgress />
      <StickyBar />
      <Navigation />
      <FAQHero />
      <FAQContent />
      <Footer />
      <MobileCTA />
    </div>
  )
}
