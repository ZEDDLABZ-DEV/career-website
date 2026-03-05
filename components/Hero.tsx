'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const spotlightRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, index: number) => {
      const card = spotlightRefs.current[index]
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      card.style.setProperty('--mouse-x', `${x}%`)
      card.style.setProperty('--mouse-y', `${y}%`)
    }

    spotlightRefs.current.forEach((card, index) => {
      if (card) {
        card.addEventListener('mousemove', (e) => handleMouseMove(e, index))
      }
    })

    return () => {
      spotlightRefs.current.forEach((card, index) => {
        if (card) {
          card.removeEventListener('mousemove', (e) => handleMouseMove(e as any, index))
        }
      })
    }
  }, [])

  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-32 relative overflow-hidden mesh-gradient noise-texture">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-growth-blue/10 to-transparent rounded-full blur-3xl morphing-shape"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-success-gold/10 to-transparent rounded-full blur-3xl morphing-shape" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-authority/5 to-transparent rounded-full blur-3xl morphing-shape" style={{ animationDelay: '-2s' }}></div>
      </div>
      {/* Grid Lines */}
      <div className="absolute inset-0 grid-lines opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative">
        {/* Left Content */}
        <div className="fade-in-scale z-10">
          {/* Badge with Icon */}
          <div className="inline-flex items-center gap-2 glass-card-light px-4 py-2.5 rounded-full mb-8 border border-success-gold/20">
            <div className="w-5 h-5 rounded-full bg-success-gold flex items-center justify-center">
              <svg className="w-3 h-3 text-authority" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-semibold text-sm text-authority tracking-wide">NEP 2020 CERTIFIED</span>
            <div className="w-2 h-2 rounded-full bg-success-gold animate-pulse"></div>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-authority leading-[1.1] mb-6 tracking-tight">
            Your Professional DNA, <span className="gradient-text">Decoded</span>.
          </h1>
          <p className="font-heading text-lg md:text-xl text-authority/70 mb-10 leading-relaxed max-w-xl">
            India&apos;s First Logic-Driven Career Intelligence Platform. Discover your child&apos;s true potential with scientific aptitude mapping across 133 future-ready careers.
          </p>
          {/* Real-Time Counter */}
          <div className="flex items-stretch gap-4 mb-10">
            <div className="glass-card-light rounded-2xl p-5 flex-1 border border-authority/10 bento-item">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-authority/50 tracking-wider uppercase">Live Stats</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-authority counter-pop mb-1">
                12,450+
              </div>
              <div className="text-authority/60 text-xs font-medium">
                Careers Mapped Today
              </div>
            </div>
            <div className="w-px bg-authority/10"></div>
            <div className="glass-card-light rounded-2xl p-5 flex-1 border border-success-gold/20 bento-item">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-authority/50 tracking-wider uppercase">Database</span>
                <svg className="w-3 h-3 text-success-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-success-gold mb-1">
                133
              </div>
              <div className="text-authority/60 text-xs font-medium">
                Career Pathways
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-growth-blue text-white font-heading font-semibold px-8 py-4 rounded-xl hover:bg-blue-600 transition-all shadow-xl shadow-growth-blue/30 flex items-center justify-center gap-3 group magnetic-button">
              <span>Take Free Assessment</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="glass-card-light text-authority font-heading font-semibold px-8 py-4 rounded-xl border border-authority/10 hover:border-authority/30 transition-all flex items-center justify-center gap-3 group magnetic-button">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Download App</span>
            </button>
          </div>
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-authority/10">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
              </div>
              <div className="text-xs text-authority/60">
                <div className="font-semibold text-authority">2,450+ Schools</div>
                <div>Trust our platform</div>
              </div>
            </div>
            <div className="w-px h-10 bg-authority/10"></div>
            <div className="flex items-center gap-2">
              <div className="flex text-success-gold">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-xs text-authority/60">
                <div className="font-semibold text-authority">4.9/5 Rating</div>
                <div>From 8,200+ reviews</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Content - Advanced 3D Mockup */}
        <div className="relative fade-in-scale fade-in-delay-2 z-10">
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            {/* Main Dashboard Card */}
            <div 
              ref={(el) => { if (el) spotlightRefs.current[0] = el }}
              className="glass-card rounded-3xl p-8 shadow-2xl spotlight float-rotate"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-growth-blue to-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Aanya Sharma</div>
                    <div className="text-white/50 text-xs">Grade 10 • Science</div>
                  </div>
                </div>
                <div className="glass-card-light rounded-lg px-3 py-1">
                  <span className="font-mono text-xs text-authority font-semibold">92%</span>
                </div>
              </div>
              {/* Radar Chart */}
              <div className="glass-card-light rounded-2xl p-6 mb-6">
                <div className="text-center mb-4">
                  <span className="font-heading font-semibold text-authority text-sm">Multi-Intelligence Profile</span>
                </div>
                <svg viewBox="0 0 200 200" className="w-full h-52">
                  <defs>
                    <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#007BFF', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: '#D4AF37', stopOpacity: 0.3 }} />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Grid */}
                  <polygon points="100,20 180,70 165,160 35,160 20,70" fill="none" stroke="#1A2B48" strokeWidth="0.5" opacity="0.15" />
                  <polygon points="100,35 165,75 152,150 48,150 35,75" fill="none" stroke="#1A2B48" strokeWidth="0.5" opacity="0.15" />
                  <polygon points="100,50 150,80 140,140 60,140 50,80" fill="none" stroke="#1A2B48" strokeWidth="0.5" opacity="0.15" />
                  <polygon points="100,65 135,85 128,130 72,130 65,85" fill="none" stroke="#1A2B48" strokeWidth="0.5" opacity="0.15" />
                  <polygon points="100,80 120,90 116,120 84,120 80,90" fill="none" stroke="#1A2B48" strokeWidth="0.5" opacity="0.15" />
                  {/* Grid Lines */}
                  <line x1="100" y1="100" x2="100" y2="20" stroke="#1A2B48" strokeWidth="0.5" opacity="0.15" />
                  <line x1="100" y1="100" x2="180" y2="70" stroke="#1A2B48" strokeWidth="0.5" opacity="0.15" />
                  <line x1="100" y1="100" x2="165" y2="160" stroke="#1A2B48" strokeWidth="0.5" opacity="0.15" />
                  <line x1="100" y1="100" x2="35" y2="160" stroke="#1A2B48" strokeWidth="0.5" opacity="0.15" />
                  <line x1="100" y1="100" x2="20" y2="70" stroke="#1A2B48" strokeWidth="0.5" opacity="0.15" />
                  {/* Data Area */}
                  <polygon points="100,25 170,65 155,155 45,150 28,75" fill="url(#radarGradient)" stroke="#007BFF" strokeWidth="2.5" filter="url(#glow)" className="radar-pulse" />
                  {/* Data Points */}
                  <circle cx="100" cy="25" r="5" fill="#D4AF37" className="radar-pulse" style={{ animationDelay: '0s' }} />
                  <circle cx="170" cy="65" r="5" fill="#D4AF37" className="radar-pulse" style={{ animationDelay: '0.2s' }} />
                  <circle cx="155" cy="155" r="5" fill="#D4AF37" className="radar-pulse" style={{ animationDelay: '0.4s' }} />
                  <circle cx="45" cy="150" r="5" fill="#D4AF37" className="radar-pulse" style={{ animationDelay: '0.6s' }} />
                  <circle cx="28" cy="75" r="5" fill="#D4AF37" className="radar-pulse" style={{ animationDelay: '0.8s' }} />
                  {/* Labels */}
                  <text x="100" y="12" textAnchor="middle" className="text-xs fill-authority font-semibold">Analytical</text>
                  <text x="190" y="72" textAnchor="start" className="text-xs fill-authority font-semibold">Creative</text>
                  <text x="170" y="175" textAnchor="middle" className="text-xs fill-authority font-semibold">Technical</text>
                  <text x="30" y="175" textAnchor="middle" className="text-xs fill-authority font-semibold">Social</text>
                  <text x="5" y="72" textAnchor="start" className="text-xs fill-authority font-semibold">Leader</text>
                </svg>
              </div>
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="glass-card-light rounded-xl p-3 text-center bento-item border border-success-gold/20">
                  <div className="text-success-gold font-heading font-bold text-lg mb-1">94%</div>
                  <div className="text-authority/60 text-xs font-medium">STEM</div>
                </div>
                <div className="glass-card-light rounded-xl p-3 text-center bento-item border border-growth-blue/20">
                  <div className="text-growth-blue font-heading font-bold text-lg mb-1">89%</div>
                  <div className="text-authority/60 text-xs font-medium">AI Ready</div>
                </div>
                <div className="glass-card-light rounded-xl p-3 text-center bento-item border border-authority/20">
                  <div className="text-authority font-heading font-bold text-lg mb-1">Top 3%</div>
                  <div className="text-authority/60 text-xs font-medium">Rank</div>
                </div>
              </div>
            </div>
            {/* Floating Career Tags */}
            <div className="absolute -top-6 -right-6 glass-card-light career-tag-advanced rounded-2xl px-5 py-3 shadow-xl float-rotate-delayed border border-authority/10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <div>
                  <div className="font-heading font-bold text-sm text-authority">Aerospace</div>
                  <div className="font-mono text-xs text-success-gold">₹18-45L</div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/3 -left-8 glass-card-light career-tag-advanced rounded-2xl px-5 py-3 shadow-xl float-rotate border border-authority/10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                <div>
                  <div className="font-heading font-bold text-sm text-authority">AI/ML</div>
                  <div className="font-mono text-xs text-growth-blue">₹22-60L</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-8 glass-card-light career-tag-advanced rounded-2xl px-5 py-3 shadow-xl float-rotate-delayed border border-authority/10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💹</span>
                <div>
                  <div className="font-heading font-bold text-sm text-authority">FinTech</div>
                  <div className="font-mono text-xs text-success-gold">₹15-50L</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
