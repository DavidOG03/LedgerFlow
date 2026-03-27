import React from 'react'
import { AmbientGlow } from '../ui/AmbientGlow'
import { AnimatedText } from '../ui/AnimatedText'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import { HoverCard } from '../ui/HoverCard'

const Pricing = () => {
  return (
    <section className="py-24 w-full bg-code-bg mx-auto px-4 border-t border-border/50 relative overflow-hidden">
      <AmbientGlow position="top-left" />
      <div className="text-center mb-16">
        <AnimatedText as="h2" className="text-3xl md:text-5xl font-bold text-text-h mb-4 tracking-tighter">Transparent Pricing</AnimatedText>
        <AnimatedReveal as="p" className="text-text/80">Simple no-surprise plans. Cancel anytime.</AnimatedReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Starter Plan */}
        <HoverCard className="p-8">
          <h3 className="text-text-h text-xl font-medium mb-2">Starter</h3>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-4xl font-bold text-text-h">$0</span>
            <span className="text-text/60">/month</span>
          </div>
          <ul className="flex flex-col gap-4 text-text text-sm mb-8 flex-1">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              50 transactions
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Basic Invoicing
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Real-time balances
            </li>
          </ul>
          <Button variant="outline" className="w-full justify-center py-3">Add Free</Button>
        </HoverCard>

        {/* Pro Plan */}
        <HoverCard className="p-8 shadow-[0_0_50px_rgba(16,185,129,0.1)] transform md:-translate-y-4" glowColor="rgba(16,185,129,0.9)">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <Badge>POPULAR</Badge>
          </div>
          <h3 className="text-text-h text-xl font-medium mb-2 mt-2">Pro</h3>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-4xl font-bold text-text-h">$15</span>
            <span className="text-text/60">/month</span>
          </div>
          <ul className="flex flex-col gap-4 text-text text-sm mb-8 flex-1">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Unlimited clients
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Advanced Invoicing
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Premium Policy Network
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Priority Support
            </li>
          </ul>
          <Button variant="primary" className="w-full justify-center py-3">Start Free Trial</Button>
        </HoverCard>

        {/* Team Plan */}
        <HoverCard className="p-8">
          <h3 className="text-text-h text-xl font-medium mb-2">Team</h3>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-4xl font-bold text-text-h">$49</span>
            <span className="text-text/60">/month</span>
          </div>
          <ul className="flex flex-col gap-4 text-text text-sm mb-8 flex-1">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Everything in Pro
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Custom reporting API
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Dedicated Account Manager
            </li>
          </ul>
          <Button variant="outline" className="w-full justify-center py-3">Request Demo</Button>
        </HoverCard>
      </div>
    </section>
  )
}

export default Pricing
