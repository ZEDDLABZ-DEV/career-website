'use client'

import { useEffect, useState } from 'react'

export default function StickyBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`sticky-bar fixed top-0 left-0 right-0 z-50 glass-card ${isVisible ? 'visible' : ''}`}>
      <div className="px-4 py-3 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="text-success-gold font-bold text-sm">Success Pass:</span>
          <span className="font-heading font-bold text-white">₹2,999</span>
          <span className="text-white/70 text-xs hidden sm:inline">(Full Year Access)</span>
        </div>
        <button className="bg-success-gold text-authority font-heading font-bold px-4 sm:px-6 py-2 rounded-lg hover:bg-yellow-400 transition-all text-sm magnetic-button">
          Buy Now →
        </button>
      </div>
    </div>
  )
}
