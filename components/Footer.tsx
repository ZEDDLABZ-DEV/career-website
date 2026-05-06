import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 lg:px-24 py-16 bg-authority relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
              <Image 
                src="/logo.jpeg" 
                alt="Career Charm Logo" 
                width={48} 
                height={48} 
                className="rounded-2xl"
              />
              <div>
                <span className="font-heading font-bold text-xl text-white block leading-none">Career Charm</span>
                <span className="font-mono text-[10px] text-white/50 tracking-wider">INTELLIGENCE LAB</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              India&apos;s premier career intelligence platform, helping students discover their true professional potential through scientific assessment.
            </p>
            {/* App Download */}
            <a href="https://play.google.com/store/apps/details?id=com.careercharm.newapp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 glass-card px-4 py-3 rounded-xl hover:bg-white/10 transition-all mb-6 border border-white/10">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <div>
                <div className="text-white/60 text-xs">Get it on</div>
                <div className="text-white font-semibold text-sm">Google Play</div>
              </div>
            </a>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { name: 'Twitter', href: 'https://x.com/thecareercharm', path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
                { name: 'Instagram', href: 'https://www.instagram.com/thecareercharm?igsh=eGxmemxxb3c4dngw', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61560410397737', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { name: 'LinkedIn', href: 'https://www.linkedin.com/in/thecareercharm?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                { name: 'YouTube', href: 'https://youtube.com/@careercharm?si=DeTknXs4aArwE7Ca', path: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' },
              ].map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:bg-white/20 transition-all group">
                  <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-sm">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">About Us</Link>
              </li>
              <li>
                  <a href="https://play.google.com/store/apps/details?id=com.careercharm.newapp" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">Take Assessment</a>
                </li>
              {['133 Careers', 'Salary Tracker', 'School Partners', 'For Counselors'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-sm">Resources</h4>
            <ul className="space-y-3">
              {['Career Blog', 'NEP 2020 Guide', 'Parent Resources', 'Success Stories'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{link}</a>
                </li>
              ))}
              <li>
                <Link href="/faq" className="text-white/60 hover:text-white text-sm transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-sm">Contact</h4>
            <ul className="space-y-3">
              <li className="text-white/60 text-sm">teamcareercharm@gmail.com</li>
              <li className="text-white/60 text-sm">+91 62842-53050</li>
              <li className="text-white/60 text-sm">Mon-Sat, 9AM-5PM IST</li>
            </ul>
            <div className="mt-6 glass-card rounded-xl p-4 border border-success-gold/20">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-success-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/90 text-xs font-semibold">NEP 2020 Certified</span>
              </div>
              <p className="text-white/60 text-xs">Aligned with National Education Policy guidelines</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© 2024 Career Charm Intelligence Lab. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-white/50 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            {['Terms of Service', 'Cookie Policy'].map((link, idx) => (
              <a key={idx} href="#" className="text-white/50 text-sm hover:text-white transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
