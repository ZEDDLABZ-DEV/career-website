import React from 'react'
import Image from 'next/image'

export default function AboutScientific() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-authority relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-growth-blue text-sm tracking-widest uppercase font-bold">The Scientific Edge</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                Your Professional DNA, <span className="text-growth-blue">Decoded</span>
              </h2>
            </div>

            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                We don&apos;t believe in &quot;tests&quot;; we believe in <span className="text-white font-semibold underline decoration-success-gold underline-offset-4">intelligence</span>. 
              </p>
              <p>
                Career Charm utilizes a proprietary <span className="text-white font-semibold">Binary CPT (Career Personality Type) Algorithm</span> to map your cognitive architecture against our 16 Professional Archetypes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-growth-blue/50 transition-all group">
                  <h4 className="text-white font-heading font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-growth-blue"></span>
                    Deep-dive Diagnostic
                  </h4>
                  <p className="text-sm text-white/50">This isn&apos;t a five-minute quiz. It is a rigorous analysis of your cognitive architecture.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-success-gold/50 transition-all group">
                  <h4 className="text-white font-heading font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success-gold"></span>
                    25-Page Blueprint
                  </h4>
                  <p className="text-sm text-white/50">A strategic roadmap for the next 10 years of your life, based on scientific data.</p>
                </div>
              </div>

              <p className="pt-4">
                This blueprint serves as your strategic roadmap, detailing the exact intersections where your natural aptitude meets global market demand.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-growth-blue/20 rounded-[2.5rem] blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/professional-dna.png" 
                alt="Professional DNA Visualization" 
                width={800} 
                height={800} 
                className="w-full h-auto float-rotate"
              />
            </div>
            
            {/* Overlay Stats */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl border border-white/10 animate-float-rotate-delayed">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-growth-blue/20 flex items-center justify-center text-growth-blue">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold">16 Archetypes</div>
                  <div className="text-white/50 text-xs font-mono uppercase tracking-tighter">Mapped Analysis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
