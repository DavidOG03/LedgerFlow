import React from 'react'
import { AmbientGlow } from '../ui/AmbientGlow'
import { AnimatedText } from '../ui/AnimatedText'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import Button from '../ui/Button'

const CTA = () => {
  return (
    <section className="py-32 w-full mx-auto px-4 text-center bg-radial-[at_50%_50%] from-card-alt to-code-bg relative overflow-hidden">
      <AmbientGlow position="center-right" />
      <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-text-h mb-6 tracking-tighter">Ready for Precision Atmosphere?</AnimatedText>
      <AnimatedReveal as="p" className="text-text/80 text-lg mb-10 max-w-2xl mx-auto">
        Join over 1,000 businesses that have simplified their finance with LedgerFlow. Start your 14-day free trial today.
      </AnimatedReveal>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="primary" className="w-full sm:w-auto px-8">Create free account</Button>
        <Button variant="outline" className="w-full sm:w-auto px-8 !border-border hover:!bg-border">Request a demo</Button>
      </div>
      <div className="mt-8 flex items-center justify-center gap-6 text-xs text-text/60 font-medium">
          <span className="flex items-center gap-1"><span className="text-accent">✔</span> No credit card required</span>
          <span className="flex items-center gap-1"><span className="text-accent">✔</span> 14-day trial</span>
      </div>
    </section>
  )
}

export default CTA
