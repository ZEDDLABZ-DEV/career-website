'use client'

import React, { useState } from 'react'

const faqData = [
  {
    category: "Trust & Science",
    subtitle: "The \"Is this real?\" section",
    questions: [
      {
        q: "What is the Binary CPT Algorithm?",
        a: "The Binary Career Pathing Technology (CPT) is our proprietary diagnostic engine. Unlike standard personality quizzes, CPT uses a binary-choice architecture to eliminate \"social desirability bias\" (answering how you think you should). It measures cognitive leanings and subconscious interests to map you against our 16 Professional Archetypes, ensuring the results reflect your true DNA, not just a passing hobby."
      },
      {
        q: "How is this different from a random Google search or a free YouTube video?",
        a: "Google gives you \"popular\" advice; we give you \"Zero-Search\" Intelligence. Most free resources are outdated or sponsored by specific universities. Career Charm bypasses the noise by providing raw, verified industry data and market-entry strategies that haven't hit the public blogs yet. We don't just tell you what jobs exist; we tell you which ones you are scientifically wired to excel in."
      },
      {
        q: "How is Career Charm different from \"Generic Personality Tests\" I’ve seen online?",
        a: "Most online tests were designed for the 20th-century social world. Career Charm’s 16 Archetypes are built for the 2026 Workforce. While standard tests focus on your social personality, our Binary CPT Algorithm is specifically calibrated for the AI-Hybrid Economy, Tech-Convergence, and Global Remote Aptitude. We don't just give you a 'Social Label'; we give you a Professional Compass that maps your DNA to the highest-paying 'Shadow Roles' of the next decade."
      }
    ]
  },
  {
    category: "The 25-Page Report",
    subtitle: "The \"Value\" section",
    questions: [
      {
        q: "What exactly will I find in the 25-page Scientific Blueprint?",
        a: "This is your tactical manual for the next five years. It includes: \n• Deep-Dive Archetype Analysis: Your strengths, blind spots, and \"flow state\" environments.\n• The Pillars of Intelligence: Customized data on industry demand, salary trajectories, and required skill stacks.\n• The 2026 Roadmap: A step-by-step guide on which certifications, internships, and networking hubs to prioritize now."
      },
      {
        q: "Why does it take 7-10 days to generate my report?",
        a: "Quality cannot be instant. Once you complete the CPT, your data undergoes a multi-layer verification process. We cross-reference your cognitive profile with our live 2026 Market Intelligence database to ensure the career recommendations are viable in the current economy. This 7-10 day \"incubation\" ensures that your Blueprint is a bespoke document, not a generic template."
      },
      {
        q: "Can I share this report with my school counselor or parents?",
        a: "Absolutely. In fact, we encourage it. The Blueprint is designed to facilitate productive conversations between students, parents, and educators. It provides a common language and objective data to help everyone get on the same page regarding your future."
      }
    ]
  },
  {
    category: "Money & Payments",
    subtitle: "The \"Safety\" section",
    questions: [
      {
        q: "Why is there a fee for the Blueprint?",
        a: "High-level data is an investment. We provide premium, \"non-Googleable\" insights and 2026 market intelligence that requires significant research and algorithmic maintenance. By charging a fee, we remain independent—we don't accept kickbacks from colleges, meaning our only loyalty is to your success."
      },
      {
        q: "Is the payment gateway secure?",
        a: "Yes. We use industry-standard, encrypted payment processors (Razorpay/SSL Secure) to ensure your transaction is protected. Career Charm does not store your credit card or UPI credentials."
      },
      {
        q: "Do you offer a refund if I don't like my Archetype?",
        a: "Because the 25-page Blueprint is a digital product generated specifically based on your unique CPT inputs, we do not offer refunds. Our science is rigorous, but it requires honest input. We recommend reviewing your Free Mini-Report (DNA) first to ensure you value our insights before upgrading to the full Blueprint."
      }
    ]
  },
  {
    category: "For Parents",
    subtitle: "The \"ROI\" section",
    questions: [
      {
        q: "How will this app help my child get a high-paying job in 2026?",
        a: "The biggest threat to a child’s future is \"Career Lag\"—studying for a job that will be automated or saturated by the time they graduate. Career Charm identifies high-growth sectors and aligns them with your child's natural talents. We focus on ROI by highlighting paths with the highest income potential and lowest risk of displacement."
      },
      {
        q: "My child is in 9th or 10th grade; is it too early for this?",
        a: "It is the perfect time. The choices made in 10th and 11th grade (streams, electives, and early skills) set the foundation. Starting now prevents the \"Panic Pivot\" in college, saving you lakhs in wasted tuition fees for degrees they may never use."
      },
      {
        q: "How do I know the data is accurate for the Indian market?",
        a: "While our algorithm is global, our market data is localized. Based in Faridkot, Punjab, we monitor the specific economic shifts within India—from the tech hubs of Bengaluru to the emerging sectors in North India—ensuring your child is prepared for the reality of the Indian corporate and entrepreneurial landscape."
      }
    ]
  },
  {
    category: "Technical Support",
    subtitle: "System help",
    questions: [
      {
        q: "What if I lose my login or access to my report?",
        a: "Don't worry. Your report is tied to the email address used during registration. You can trigger a password reset on the login page, or contact our support team with your transaction ID to have a copy of your Blueprint resent to you."
      },
      {
        q: "Can I retake the CPT test?",
        a: "The CPT is designed to capture your core cognitive traits, which rarely change. However, if you feel you were distracted or unwell during the first attempt, you can request a \"Reset\" through the app settings once every 6 months."
      }
    ]
  }
]

function FAQItem({ q, a, index }: { q: string, a: string, index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`mb-4 overflow-hidden transition-all duration-300 ${isOpen ? 'glass-card-light' : 'bg-clean-white border border-authority/5'} rounded-2xl`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between group"
      >
        <span className={`font-heading font-bold text-lg transition-colors ${isOpen ? 'text-growth-blue' : 'text-authority'}`}>
          {q}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-growth-blue text-white rotate-180' : 'bg-authority/5 text-authority'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="p-6 pt-0 text-authority/70 leading-relaxed whitespace-pre-line border-t border-authority/5 mt-2">
          {a}
        </div>
      </div>
    </div>
  )
}

export default function FAQContent() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-clean-white relative">
      <div className="max-w-4xl mx-auto">
        {faqData.map((category, catIdx) => (
          <div key={catIdx} className="mb-16 last:mb-0">
            <div className="mb-8">
              <span className="font-mono text-success-gold text-xs tracking-widest uppercase font-bold block mb-2">{category.subtitle}</span>
              <h2 className="text-3xl font-heading font-bold text-authority">{category.category}</h2>
            </div>
            <div className="space-y-4">
              {category.questions.map((item, qIdx) => (
                <FAQItem key={qIdx} q={item.q} a={item.a} index={qIdx} />
              ))}
            </div>
          </div>
        ))}
        
        {/* Support CTA */}
        <div className="mt-24 p-8 md:p-12 glass-card rounded-[3rem] border border-growth-blue/10 bg-gradient-to-br from-growth-blue/[0.02] to-success-gold/[0.02] text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-authority mb-4">Still have questions?</h3>
          <p className="text-authority/60 mb-8 max-w-xl mx-auto">
            Our team of career intelligence experts is here to help you navigate your journey.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="mailto:teamcareercharm@gmail.com" className="bg-authority text-white px-8 py-3 rounded-xl font-heading font-bold hover:bg-authority/90 transition-all flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Support
            </a>
            <a href="https://wa.me/916284253050" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-3 rounded-xl font-heading font-bold hover:opacity-90 transition-all flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
