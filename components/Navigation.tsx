export default function Navigation() {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between glass-card-light sticky top-0 z-40 border-b border-authority/5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-authority via-growth-blue to-success-gold flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 shimmer"></div>
          <svg className="w-5 h-5 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <span className="font-heading font-bold text-lg text-authority block leading-none">Career Charm</span>
          <span className="font-mono text-[10px] text-authority/50 tracking-wider">INTELLIGENCE LAB</span>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-8">
        <a href="#features" className="text-authority/70 hover:text-authority transition-all font-medium text-sm relative group">
          Features
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-success-gold transition-all group-hover:w-full"></span>
        </a>
        <a href="#careers" className="text-authority/70 hover:text-authority transition-all font-medium text-sm relative group">
          133 Careers
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-success-gold transition-all group-hover:w-full"></span>
        </a>
        <a href="#pricing" className="text-authority/70 hover:text-authority transition-all font-medium text-sm relative group">
          Pricing
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-success-gold transition-all group-hover:w-full"></span>
        </a>
        <a href="#insights" className="text-authority/70 hover:text-authority transition-all font-medium text-sm relative group">
          Insights
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-success-gold transition-all group-hover:w-full"></span>
        </a>
      </div>
      <button className="bg-growth-blue text-white font-heading font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-growth-blue/20 magnetic-button text-sm">
        Take Test
      </button>
    </nav>
  )
}
