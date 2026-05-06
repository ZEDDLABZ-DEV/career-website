import React from 'react'

export default function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 px-6 overflow-hidden mesh-gradient">
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-growth-blue/10 rounded-full blur-3xl morphing-shape"></div>
      <div className="absolute bottom-10 left-[5%] w-80 h-80 bg-success-gold/10 rounded-full blur-3xl morphing-shape" style={{ animationDelay: '-4s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-light mb-8 animate-fade-in-scale">
          <span className="w-2 h-2 rounded-full bg-growth-blue animate-pulse"></span>
          <span className="text-authority/60 font-mono text-xs tracking-widest uppercase">The Architect of Your Future</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-authority mb-6 leading-[1.1] tracking-tight">
          Stop the <span className="gradient-text">10-Lakh Gamble</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl md:text-2xl font-display italic text-authority/80 mb-12 leading-relaxed">
          The Indian education system has become a high-stakes game of &quot;Career Bingo,&quot; where students bet their best years on 2010 hearsay and outdated degrees.
        </p>

        <div className="max-w-4xl mx-auto glass-card-light p-8 md:p-12 rounded-[2.5rem] border-authority/5 shadow-2xl relative group overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-growth-blue to-success-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
           <p className="text-lg md:text-xl text-authority/70 leading-relaxed text-left">
            While millions of families invest a lifetime of savings into a 10-Lakh gamble, they are often purchasing a ticket to unemployability in an economy that no longer rewards &quot;average.&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
