export default function Pricing() {
  return (
    <section id="pricing" className="w-full px-6 md:px-12 lg:px-24 py-24 bg-authority relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-success-gold/10 rounded-full blur-3xl morphing-shape"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-growth-blue/10 rounded-full blur-3xl morphing-shape" style={{ animationDelay: '-4s' }}></div>
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-mono text-xs text-success-gold tracking-wider uppercase bg-success-gold/10 px-4 py-2 rounded-full">Investment Plans</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Invest in Their <span className="gradient-text">Future</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Choose the perfect plan to unlock your child&apos;s career potential</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Launchpad Plan */}
          <div className="glass-card rounded-3xl p-8 border border-white/10 card-3d spotlight">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-heading font-bold text-2xl text-white mb-1">The Launchpad</h3>
                <p className="text-white/60 text-sm">Basic Plan - Quick Start Package</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-heading text-5xl font-bold text-white">₹1,999</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>30 Days Access</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                { title: 'One-Time Aptitude/CPT Test', desc: 'Complete assessment access' },
                { title: '25-Page PDF Career Report', desc: 'Download & keep forever' },
                { title: 'Premium Content Library', desc: 'Full access for 30 days' },
                { title: 'Email Support', desc: 'Standard response time' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white/80">
                  <svg className="w-5 h-5 text-success-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium block">{item.title}</span>
                    <span className="text-white/50 text-xs">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <button className="w-full glass-card-light text-authority font-heading font-semibold py-4 rounded-xl border border-authority/10 hover:border-authority/30 transition-all magnetic-button">
              Start with Launchpad
            </button>
          </div>
          {/* Success Pass - Premium */}
          <div className="glass-card rounded-3xl p-8 border-2 border-success-gold relative overflow-hidden pulse-glow-advanced">
            {/* Premium Badge */}
            <div className="absolute top-0 right-0 bg-success-gold text-authority text-xs font-heading font-bold px-4 py-2 rounded-bl-xl">
              ⭐ MOST POPULAR
            </div>
            <div className="flex items-center justify-between mb-6 mt-6">
              <div>
                <h3 className="font-heading font-bold text-2xl text-white mb-1">Success Pass</h3>
                <p className="text-white/60 text-sm">Full Year Access - Complete Suite</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success-gold to-yellow-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-authority" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-heading text-5xl font-bold text-white">₹2,999</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-success-gold/20 text-success-gold text-xs font-semibold px-3 py-1.5 rounded-full mb-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>365 Days Access (12 Months)</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Everything in Launchpad +</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                { title: 'Premium Content Library', desc: 'Continuous 12-month access' },
                { title: 'Career Readiness Certificate', desc: 'Unlocks after module completion' },
                { title: 'Bi-Annual Test Retake', desc: 'Retake aptitude test every 6 months' },
                { title: 'Weekly Industry Trends', desc: 'Push notifications enabled' },
                { title: 'Priority Support', desc: 'Fast-track response times' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white">
                  <svg className="w-5 h-5 text-success-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium block">{item.title}</span>
                    <span className="text-success-gold/80 text-xs">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <button className="w-full bg-success-gold text-authority font-heading font-bold py-4 rounded-xl hover:bg-yellow-400 transition-all shadow-xl shadow-success-gold/30 magnetic-button">
              Get Success Pass →
            </button>
            {/* NEP Badge */}
            <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-white/10">
              <svg className="w-4 h-4 text-success-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white/70 text-xs font-medium">NEP 2020 Certified Platform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
