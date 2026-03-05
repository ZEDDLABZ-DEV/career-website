'use client'

import { useEffect, useRef } from 'react'

export default function Careers() {
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

  const careers = [
    { emoji: '🤖', title: 'AI/ML Engineer', category: 'Tech', salary: '₹22-60L', status: 'High Demand', gradient: 'from-blue-500 to-blue-600' },
    { emoji: '🚀', title: 'Aerospace Eng.', category: 'Engineering', salary: '₹18-45L', status: 'Specialized', gradient: 'from-purple-500 to-purple-600' },
    { emoji: '💹', title: 'FinTech Analyst', category: 'Finance', salary: '₹15-50L', status: 'Growing', gradient: 'from-green-500 to-green-600' },
    { emoji: '🧬', title: 'Biotechnology', category: 'Life Sciences', salary: '₹12-38L', status: 'Research', gradient: 'from-pink-500 to-pink-600' },
    { emoji: '🔒', title: 'Cybersecurity', category: 'Tech', salary: '₹20-55L', status: 'Critical', gradient: 'from-red-500 to-red-600' },
    { emoji: '🎮', title: 'Game Dev', category: 'Creative Tech', salary: '₹10-40L', status: 'Creative', gradient: 'from-yellow-500 to-yellow-600' },
    { emoji: '⚡', title: 'Clean Energy', category: 'Sustainability', salary: '₹14-42L', status: 'Emerging', gradient: 'from-teal-500 to-teal-600' },
    { emoji: '📊', title: 'Data Science', category: 'Analytics', salary: '₹18-55L', status: 'High Demand', gradient: 'from-indigo-500 to-indigo-600' },
  ]

  return (
    <section id="careers" className="w-full px-6 md:px-12 lg:px-24 py-24 bg-gradient-to-b from-white to-clean-white relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-mono text-xs text-success-gold tracking-wider uppercase bg-success-gold/10 px-4 py-2 rounded-full">Career Database</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-authority mb-4">
            133 Future-Ready <span className="gradient-text">Careers</span>
          </h2>
          <p className="text-authority/70 max-w-2xl mx-auto text-lg">Curated library spanning emerging tech, traditional professions, and hybrid domains</p>
        </div>
        {/* Career Tags - Advanced Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {careers.map((career, index) => (
            <div
              key={index}
              ref={(el) => { if (el) spotlightRefs.current[index] = el }}
              className="glass-card-light career-tag-advanced rounded-2xl p-5 border border-authority/10 spotlight"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${career.gradient} flex items-center justify-center text-2xl`}>
                  {career.emoji}
                </div>
                <div className="flex-1">
                  <div className="font-heading font-bold text-sm text-authority">{career.title}</div>
                  <div className="font-mono text-xs text-authority/50">{career.category}</div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-authority/10">
                <span className="font-mono text-xs text-success-gold font-semibold">{career.salary}</span>
                <span className="text-xs text-authority/60">{career.status}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="glass-card-light px-8 py-4 rounded-xl border border-authority/20 hover:border-authority/40 transition-all font-heading font-semibold text-authority flex items-center gap-3 mx-auto group magnetic-button">
            <span>Explore All 133 Careers</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
