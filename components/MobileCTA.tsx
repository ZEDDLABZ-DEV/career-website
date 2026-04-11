export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 glass-card border-t border-authority/10 p-4 z-50">
      <div className="flex gap-3">
        <button className="flex-1 bg-success-gold text-authority font-heading font-bold py-4 rounded-xl shadow-xl magnetic-button flex items-center justify-center gap-2">
          <span>Get Success Pass</span>
          <span className="font-mono">₹2,999</span>
        </button>
        <a href="https://play.google.com/store/apps/details?id=com.careercharm.newapp" target="_blank" rel="noopener noreferrer" className="bg-authority text-white px-4 py-4 rounded-xl shadow-xl magnetic-button flex items-center justify-center">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
