import React from 'react'
import { AmbientGlow } from '../ui/AmbientGlow'
import { AnimatedText } from '../ui/AnimatedText'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import Badge from '../ui/Badge'
import FeatureCard from '../ui/FeatureCard'

const Chaos = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <AmbientGlow position="top-top" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          <AnimatedReveal delay={0.1} className='text-accent text-sm font-bold tracking-widest px-2 py-1 mr-auto'>
            THE CHAOS
          </AnimatedReveal>
          <AnimatedText delay={0.2} as="h2" className="text-4xl md:text-5xl font-bold text-text-h tracking-tighter">Finances shouldn't feel <br/> like a second job.</AnimatedText>
          <AnimatedReveal delay={1.2} as="p" className="text-text/80 text-lg max-w-md">
            Most businesses struggle with fragmented data. When your disconnected data is hard to find, you lose context, time, and eventually money.
          </AnimatedReveal>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FeatureCard 
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
            title="Messy Spreadsheets"
            description="Stop manual data entry. Missing values and formulas lead to errors and stress."
            className="md:translate-y-8"
          />
          <FeatureCard 
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            title="Forgotten Invoices"
            description="Late payments hurt your business flow. Stop losing revenue on forgotten bills."
          />
        </div>
      </div>
    </section>
  )
}

export default Chaos
