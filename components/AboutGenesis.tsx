import React from 'react'
import Image from 'next/image'

export default function AboutGenesis() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-growth-blue/20 to-success-gold/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-authority/5">
              <Image 
                src="/about-lab.png" 
                alt="High-tech Career Intelligence Lab" 
                width={800} 
                height={800} 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-authority/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="font-mono text-[10px] text-white/70 tracking-[0.3em] uppercase mb-2 block">Laboratory Observation</span>
                <h3 className="text-white font-heading font-bold text-xl">InfoArbol Human Potential Lab</h3>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-success-gold text-sm tracking-widest uppercase font-bold">The Genesis</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-authority leading-tight">
                Beyond the &quot;Average&quot; Advice of the Internet
              </h2>
            </div>

            <div className="space-y-6 text-authority/70 text-lg leading-relaxed">
              <p>
                Career Charm was born from a singular, frustrating realization: <span className="text-authority font-semibold">The internet is a library of the obsolete.</span>
              </p>
              <p>
                As the founder, I watched brilliant minds follow the generic breadcrumbs of Google searches and YouTube &quot;gurus,&quot; only to end up with careers that felt like ill-fitting suits. We realized that when you seek advice from the public domain, you are competing for public-domain results—<span className="italic">mediocrity</span>.
              </p>
              <div className="p-6 glass-card rounded-2xl border-l-4 border-growth-blue bg-growth-blue/[0.02]">
                <p className="text-authority font-medium italic">
                  &quot;InfoArbol, our parent company, was established to bridge the chasm between academic certificates and actual professional dominance. We moved away from the noise to build a high-tech laboratory for human potential.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
