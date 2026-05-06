import React from 'react'

export default function AboutZeroSearch() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-authority/40 text-sm tracking-[0.4em] uppercase mb-4 block">Exclusivity Report</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-authority">
            The <span className="gradient-text">&quot;Zero-Search&quot;</span> Promise
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-card-light p-10 md:p-16 rounded-[3rem] border-authority/5 relative group overflow-hidden bg-clean-white shadow-xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-growth-blue/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
             
             <div className="relative z-10">
               <h3 className="text-3xl font-heading font-bold text-authority mb-6">Intelligence You Can’t Google</h3>
               <p className="text-xl text-authority/70 leading-relaxed mb-8">
                If it&apos;s on a generic search engine, it&apos;s already too late. At Career Charm, we specialize in <span className="text-authority font-bold underline decoration-growth-blue/30 decoration-4">Zero-Search Intelligence</span>.
               </p>
               <div className="flex flex-wrap gap-4">
                  <div className="px-5 py-3 bg-authority text-white rounded-full text-sm font-mono tracking-tighter">#SHADOW_ROLES</div>
                  <div className="px-5 py-3 bg-growth-blue/10 text-growth-blue rounded-full text-sm font-mono tracking-tighter border border-growth-blue/20">#TECH_CONVERGENCE</div>
                  <div className="px-5 py-3 bg-success-gold/10 text-success-gold rounded-full text-sm font-mono tracking-tighter border border-success-gold/20">#INSIDER_EDGE</div>
               </div>
             </div>
          </div>

          <div className="bg-authority rounded-[3rem] p-10 flex flex-col justify-between relative group overflow-hidden">
            <div className="absolute inset-0 grid-lines opacity-10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-white font-heading font-bold text-2xl mb-4">Invisible Trajectories</h4>
              <p className="text-white/60 leading-relaxed">
                We identify high-wealth, high-impact positions emerging at the edge of Tech-Convergence that remain invisible to the general public.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-success-gold font-mono text-xs uppercase tracking-widest">Visibility Index</span>
                <span className="text-white font-bold">0.02%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full mt-2">
                <div className="w-[5%] h-full bg-success-gold rounded-full animate-progress-fill"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
