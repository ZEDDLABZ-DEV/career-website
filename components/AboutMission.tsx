import React from 'react'
import Image from 'next/image'

export default function AboutMission() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-clean-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card-light p-8 md:p-16 rounded-[3rem] border-authority/5 relative overflow-hidden bg-gradient-to-br from-white to-growth-blue/5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative z-10">
              <div className="space-y-4">
                <span className="font-mono text-success-gold text-sm tracking-widest uppercase font-bold">The Mission</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-authority leading-tight">
                  Empowering <span className="gradient-text">India 2026</span>
                </h2>
              </div>

              <div className="space-y-6 text-authority/70 text-lg leading-relaxed">
                <p>
                  Based in <span className="text-authority font-semibold">Faridkot</span> and serving the pulse of the nation, Career Charm is more than a consultancy; it is an engine for India 2026.
                </p>
                <p>
                  In alignment with the <span className="text-growth-blue font-semibold">NEP 2020</span>, our mission is to transform the Indian youth from a pool of job-seekers into a force of globally competitive specialists.
                </p>
                <p>
                  We are not just helping students find jobs; we are architecting the leadership class of a modern, prosperous India. We deliver the ROI that a traditional degree can no longer guarantee.
                </p>
              </div>

              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-heading font-extrabold text-authority">100%</div>
                  <div className="text-xs font-mono text-authority/50 leading-tight uppercase">NEP 2020<br/>Aligned</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-heading font-extrabold text-authority">ROI</div>
                  <div className="text-xs font-mono text-authority/50 leading-tight uppercase">Guaranteed<br/>Intelligence</div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-success-gold/10 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-authority/5">
                <Image 
                  src="/india-2026.png" 
                  alt="India 2026 Youth Leadership" 
                  width={800} 
                  height={800} 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
