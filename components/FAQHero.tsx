import React from 'react'

export default function FAQHero() {
  return (
    <section className="relative pt-24 pb-16 px-6 overflow-hidden mesh-gradient">
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-growth-blue/10 rounded-full blur-3xl morphing-shape"></div>
      <div className="absolute bottom-10 left-[5%] w-80 h-80 bg-success-gold/10 rounded-full blur-3xl morphing-shape" style={{ animationDelay: '-4s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-light mb-8 animate-fade-in-scale">
          <span className="w-2 h-2 rounded-full bg-success-gold animate-pulse"></span>
          <span className="text-authority/60 font-mono text-xs tracking-widest uppercase text-authority font-bold">Your Professional Compass</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-authority mb-6 leading-[1.1] tracking-tight">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl md:text-2xl font-display italic text-authority/80 mb-8 leading-relaxed">
          Finding a career shouldn&apos;t feel like a gamble. We&apos;ve gathered the answers you need to move forward with confidence.
        </p>
      </div>
    </section>
  )
}
