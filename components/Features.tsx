'use client'

import { useEffect, useRef } from 'react'

export default function Features() {
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
    <section id="features" className="w-full px-6 md:px-12 lg:px-24 py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 fade-in-scale">
          <div className="inline-block mb-4">
            <span className="font-mono text-xs text-growth-blue tracking-wider uppercase bg-growth-blue/10 px-4 py-2 rounded-full">The Intelligence Suite</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-authority mb-4">
            Elite Career <span className="gradient-text">Intelligence</span>
          </h2>
          <p className="text-authority/70 max-w-2xl mx-auto text-lg">Powered by advanced psychometric algorithms and real-time market data</p>
        </div>
        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Feature Card */}
          <div 
            ref={(el) => { if (el) spotlightRefs.current[0] = el }}
            className="lg:col-span-2 glass-card-light rounded-3xl p-8 card-3d border border-authority/10 spotlight fade-in-scale fade-in-delay-1"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-growth-blue to-blue-600 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 shimmer"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-xl text-authority mb-2">Real-Time Salary Intelligence</h3>
                <p className="text-authority/70 leading-relaxed">Live compensation data across 133 careers with 10-year trajectory forecasting powered by industry partnerships and government labor statistics.</p>
              </div>
            </div>
            {/* Interactive Chart */}
            <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-authority/5 to-growth-blue/5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading font-semibold text-sm text-authority">Data Science Career Path</span>
                <span className="font-mono text-xs text-success-gold bg-success-gold/10 px-3 py-1 rounded-full">+127% Growth</span>
              </div>
              <svg viewBox="0 0 300 100" className="w-full h-24 mb-3">
                <defs>
                  <linearGradient id="chartGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#007BFF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#007BFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,80 Q50,75 75,60 T150,40 T225,22 T300,10 L300,100 L0,100 Z" fill="url(#chartGradient1)" />
                <path d="M0,80 Q50,75 75,60 T150,40 T225,22 T300,10" fill="none" stroke="#007BFF" strokeWidth="3" />
                <circle cx="0" cy="80" r="4" fill="#007BFF" />
                <circle cx="75" cy="60" r="4" fill="#007BFF" />
                <circle cx="150" cy="40" r="4" fill="#007BFF" />
                <circle cx="225" cy="22" r="4" fill="#007BFF" />
                <circle cx="300" cy="10" r="5" fill="#D4AF37" className="radar-pulse" />
              </svg>
              <div className="flex justify-between text-xs text-authority/50">
                <span>Entry</span>
                <span>3 Years</span>
                <span>7 Years</span>
                <span className="font-semibold text-success-gold">10 Years</span>
              </div>
              {/* Salary Range */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div>
                  <div className="text-xs text-authority/50 mb-1">Entry Level</div>
                  <div className="font-mono font-bold text-authority">₹8-12L</div>
                </div>
                <div>
                  <div className="text-xs text-authority/50 mb-1">Mid Level</div>
                  <div className="font-mono font-bold text-authority">₹18-28L</div>
                </div>
                <div>
                  <div className="text-xs text-authority/50 mb-1">Senior</div>
                  <div className="font-mono font-bold text-success-gold">₹35-60L</div>
                </div>
              </div>
            </div>
          </div>
          {/* Vertical Feature Card */}
          <div 
            ref={(el) => { if (el) spotlightRefs.current[1] = el }}
            className="glass-card-light rounded-3xl p-8 card-3d border border-authority/10 spotlight fade-in-scale fade-in-delay-2"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-success-gold to-yellow-500 flex items-center justify-center mb-6 relative overflow-hidden">
              <div className="absolute inset-0 shimmer"></div>
              <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-xl text-authority mb-3">Multi-Intelligence Mapping</h3>
            <p className="text-authority/70 leading-relaxed mb-6">Advanced psychometric assessment evaluating 8 intelligence types beyond traditional IQ metrics.</p>
            {/* Progress Indicators */}
            <div className="space-y-4">
              {[
                { label: 'Logical-Mathematical', value: 94, colorClass: 'text-success-gold', gradientFrom: 'from-success-gold', gradientTo: 'to-yellow-400' },
                { label: 'Visual-Spatial', value: 78, colorClass: 'text-growth-blue', gradientFrom: 'from-growth-blue', gradientTo: 'to-blue-400', delay: '0.1s' },
                { label: 'Interpersonal', value: 85, colorClass: 'text-authority', gradientFrom: 'from-authority', gradientTo: 'to-slate-600', delay: '0.2s' },
                { label: 'Naturalistic', value: 62, colorClass: 'text-authority/70', gradientFrom: 'from-authority/40', gradientTo: 'to-slate-400', delay: '0.3s' },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-authority/70 font-medium">{item.label}</span>
                    <span className={`${item.colorClass} font-bold font-mono`}>{item.value}%</span>
                  </div>
                  <div className="h-2 bg-authority/5 rounded-full overflow-hidden">
                    <div 
                      className={`progress-fill h-full bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} rounded-full`}
                      style={{ width: `${item.value}%`, animationDelay: item.delay || '0s' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Wide Feature Card */}
          <div 
            ref={(el) => { if (el) spotlightRefs.current[2] = el }}
            className="md:col-span-2 glass-card-light rounded-3xl p-8 card-3d border border-authority/10 spotlight fade-in-scale fade-in-delay-3"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-authority to-slate-700 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 shimmer"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-xl text-authority mb-3">Elite Blueprint Reports</h3>
                <p className="text-authority/70 leading-relaxed mb-6">Comprehensive 30-page career roadmap with personalized skill development timelines, institution recommendations, and industry mentor connections.</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: '📊', section: 'SECTION 1', title: 'Career Match', desc: 'Top 5 aligned paths', borderClass: 'border-success-gold/20', bgClass: 'bg-success-gold/20' },
                    { icon: '🎯', section: 'SECTION 2', title: 'Skill Roadmap', desc: '5-year development', borderClass: 'border-growth-blue/20', bgClass: 'bg-growth-blue/20' },
                    { icon: '🏛️', section: 'SECTION 3', title: 'Institutions', desc: 'Curated list', borderClass: 'border-authority/20', bgClass: 'bg-authority/20' },
                  ].map((item, idx) => (
                    <div key={idx} className={`glass-card rounded-xl p-4 border ${item.borderClass}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-lg ${item.bgClass} flex items-center justify-center`}>
                          <span className="text-lg">{item.icon}</span>
                        </div>
                        <span className="font-mono text-xs text-authority/50">{item.section}</span>
                      </div>
                      <div className="text-sm font-semibold text-authority mb-1">{item.title}</div>
                      <div className="text-xs text-authority/60">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Small Feature Card */}
          <div 
            ref={(el) => { if (el) spotlightRefs.current[3] = el }}
            className="glass-card-light rounded-3xl p-8 card-3d border border-authority/10 spotlight text-center fade-in-scale fade-in-delay-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 relative overflow-hidden">
              <div className="absolute inset-0 shimmer"></div>
              <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-lg text-authority mb-2">AI Matching</h3>
            <p className="text-authority/70 text-sm leading-relaxed mb-4">Neural network-based career alignment with 97.3% accuracy rate.</p>
            <div className="inline-flex items-center gap-2 bg-success-gold/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-success-gold animate-pulse"></div>
              <span className="font-mono text-xs text-authority font-semibold">Live Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
