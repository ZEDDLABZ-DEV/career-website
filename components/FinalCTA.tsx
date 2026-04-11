export default function FinalCTA() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-24 bg-gradient-to-br from-growth-blue via-blue-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 noise-texture"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl morphing-shape"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-success-gold/10 rounded-full blur-3xl morphing-shape" style={{ animationDelay: '-4s' }}></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="inline-block mb-6">
          <span className="font-mono text-xs text-white/70 tracking-wider uppercase bg-white/10 px-4 py-2 rounded-full">Limited Time Offer</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
          Ready to Decode Their <br />
          Professional DNA?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Join 12,450+ families who&apos;ve discovered their child&apos;s ideal career path through scientific intelligence mapping.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="https://play.google.com/store/apps/details?id=com.careercharm.newapp" target="_blank" rel="noopener noreferrer" className="bg-white text-growth-blue font-heading font-bold px-10 py-5 rounded-xl hover:bg-gray-100 transition-all shadow-2xl flex items-center justify-center gap-3 group magnetic-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>Start Free Assessment</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.careercharm.newapp" target="_blank" rel="noopener noreferrer" className="glass-card text-white font-heading font-semibold px-10 py-5 rounded-xl border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all flex items-center justify-center gap-3 magnetic-button">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
            <span>Download App</span>
          </a>
        </div>
        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/20">
          {[
            'No Credit Card Required',
            '15-Min Assessment',
            'Instant Results',
          ].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 text-white/80 text-sm">
              <svg className="w-5 h-5 text-success-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
