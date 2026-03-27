import React from 'react'
import { AmbientGlow } from '../ui/AmbientGlow'
import { AnimatedText } from '../ui/AnimatedText'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { HoverCard } from '../ui/HoverCard'

const AllInOne = () => {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4 relative overflow-hidden">
      <AmbientGlow position="top-left" />
      <div className="flex flex-col items-center text-center mb-16">
        <AnimatedText as="h2" className="text-3xl md:text-5xl font-bold text-text-h mb-6 tracking-tighter">
          Everything You Need to Run Your <br /> Finances In One Place
        </AnimatedText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Card 1 */}
        <HoverCard className="p-8 gap-4">
            {/* <img src="/invoice-gif.png" alt="invoice gif" className='w-full h-full object-cover' /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" className='text-accent'>
	<path fill="currentColor" d="M13.5 9.75a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75m-1 3a.75.75 0 0 0-.75-.75h-5a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 .75-.75m.25 2.25a.75.75 0 1 1 0 1.5h-6a.75.75 0 0 1 0-1.5z"></path>
	<path fill="currentColor" fillRule="evenodd" d="M6 21.75h13A2.75 2.75 0 0 0 21.75 19v-5.5a.75.75 0 0 0-.75-.75h-3.25V4.943c0-1.423-1.609-2.251-2.767-1.424l-.175.125a2.26 2.26 0 0 1-2.622-.004a3.77 3.77 0 0 0-4.372 0a2.26 2.26 0 0 1-2.622.004l-.175-.125c-1.158-.827-2.767 0-2.767 1.424V18A3.75 3.75 0 0 0 6 21.75M8.686 4.86a2.27 2.27 0 0 1 2.628 0a3.76 3.76 0 0 0 4.366.005l.175-.125a.25.25 0 0 1 .395.203V19c0 .45.108.875.3 1.25H6A2.25 2.25 0 0 1 3.75 18V4.943a.25.25 0 0 1 .395-.203l.175.125a3.76 3.76 0 0 0 4.366-.005M17.75 19v-4.75h2.5V19a1.25 1.25 0 0 1-2.5 0" clipRule="evenodd"></path>
</svg>
            <h3 className="text-xl font-semibold text-text-h mt-2">Smart Invoicing</h3>
            <p className="text-text/80 text-sm leading-relaxed mb-4">
                Look pro and increase invoice payments. Automated follow-ups ensure you get paid on time.
            </p>
        </HoverCard>

        {/* Card 2 */}
        <HoverCard className="p-8 gap-4">
            
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
            
            <h3 className="text-xl font-semibold text-text-h mt-2">Bank Account Integration</h3>
            <p className="text-text/80 text-sm leading-relaxed">
                Connect everything from one place. Easy connect and automatically get deep insights.
            </p>
        </HoverCard>

        {/* Card 3 */}
        <HoverCard className="p-8 gap-4">
            
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>

            <h3 className="text-xl font-semibold text-text-h mt-2">Expense Tracking</h3>
            <p className="text-text/80 text-sm leading-relaxed">
                Control how you spend proactively. Automatically recognize every single transaction.
            </p>
        </HoverCard>
      </div>

      <HoverCard className="p-8 flex-col md:flex-row items-center justify-between gap-6 h-auto">
          <div className="flex-1 w-full">
              <h3 className="text-xl font-semibold text-text-h mb-2">Unified Financial Statement</h3>
              <AnimatedReveal as="p" className="text-text/80 text-sm mb-4">
                  Get a clear view of all the numbers regardless. Need access? Give export files to your accountant without granting access everywhere.
              </AnimatedReveal>
              <a href="#" className="text-accent text-sm font-semibold flex items-center gap-2 hover:underline">
                  Explore Dashboard
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
          </div>
          <div className="bg-card-alt rounded-xl h-32 border border-border/50 flex flex-col justify-center px-6 gap-3 z-10 mt-8">
              <div className="flex items-center justify-between">
                  <div className="h-2 w-1/4 bg-gray-600 rounded"></div>
                  <div className="h-2 w-12 bg-accent/50 rounded"></div>
              </div>
              <div className="h-px w-full bg-border"></div>
              <div className="flex items-center justify-between">
                  <div className="h-2 w-1/3 bg-gray-600 rounded"></div>
                  <div className="h-2 w-16 bg-accent/50 rounded"></div>
              </div>
          </div>
      </HoverCard>
    </section>
  )
}

export default AllInOne
