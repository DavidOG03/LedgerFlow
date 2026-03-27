import React from 'react'
import { AmbientGlow } from '../ui/AmbientGlow'
import { AnimatedText } from '../ui/AnimatedText'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { HoverCard } from '../ui/HoverCard'

const Testimonials = () => {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4 relative overflow-hidden">
      <AmbientGlow position="center-left" />
      <AnimatedText as="h2" className="text-3xl md:text-5xl font-bold text-text-h mb-16 text-center tracking-tighter">Voices of Precision</AnimatedText>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <HoverCard className="p-8 justify-between">
          <AnimatedReveal as="p" className="text-text text-lg leading-relaxed mb-8">
            "LedgerFlow transferred what we use into smooth flow. We saved precious lost revenue processing taxes on auto mode!"
          </AnimatedReveal>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-text-h font-bold">E</div>
            <div>
              <h4 className="text-text-h font-medium">Eleanor Pena</h4>
              <p className="text-text/60 text-sm">CEO, TechFlow</p>
            </div>
          </div>
        </HoverCard>

        {/* Testimonial 2 */}
        <HoverCard className="p-8 justify-between">
          <AnimatedReveal as="p" className="text-text text-lg leading-relaxed mb-8">
            "The automated tracking saved our agency over $100k last month. It perfectly compliments what we've needed for so long."
          </AnimatedReveal>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-text-h font-bold">B</div>
            <div>
              <h4 className="text-text-h font-medium">Bessie Cooper</h4>
              <p className="text-text/60 text-sm">VP of Marketing</p>
            </div>
          </div>
        </HoverCard>

        {/* Testimonial 3 */}
        <HoverCard className="p-8 justify-between">
          <AnimatedReveal as="p" className="text-text text-lg leading-relaxed mb-8">
            "Finally, a finance tool built with modern scale. The interface is crisp and let you work closely alongside small nuances."
          </AnimatedReveal>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-text-h font-bold">F</div>
            <div>
              <h4 className="text-text-h font-medium">Floyd Miles</h4>
              <p className="text-text/60 text-sm">Founder, Metric Media</p>
            </div>
          </div>
        </HoverCard>
      </div>
    </section>
  )
}

export default Testimonials
