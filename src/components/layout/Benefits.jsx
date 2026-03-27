import React from 'react'
import { AmbientGlow } from '../ui/AmbientGlow'
import { AnimatedText } from '../ui/AnimatedText'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Logs, FrameIcon, Building, CreditCard } from 'lucide-react'

const Benefits = () => {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4 text-center relative overflow-hidden">
      <AmbientGlow position="top-right" />
      <AnimatedText as="h2" className="text-3xl md:text-5xl font-bold text-text-h mb-16 tracking-tighter">Built for Modern Teams</AnimatedText>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        <div className="flex flex-col items-center text-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-accent shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-110 transition-transform duration-300">
                <Logs size={22} />
            </div>
            <h3 className="text-lg font-semibold text-text-h">No logs</h3>
            <p className="text-text/80 text-sm">Get back valuable minutes with automatic receipt scanning.</p>
        </div>

        <div className="flex flex-col items-center text-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-accent shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-110 transition-transform duration-300">
                <FrameIcon size={22} />
            </div>
            <h3 className="text-lg font-semibold text-text-h">APIs</h3>
            <p className="text-text/80 text-sm">Build simple extensions easily through our top tier framework capabilities.</p>
        </div>

        <div className="flex flex-col items-center text-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-accent shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-110 transition-transform duration-300">
                <Building size={22} />
            </div>
            <h3 className="text-lg font-semibold text-text-h">Agencies</h3>
            <p className="text-text/80 text-sm">Manage multiple client financial accounts securely under brand holding.</p>
        </div>

        <div className="flex flex-col items-center text-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-accent shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-110 transition-transform duration-300">
                <CreditCard size={22} />
            </div>
            <h3 className="text-lg font-semibold text-text-h">Finance Teams</h3>
            <p className="text-text/80 text-sm">Collaborate and process global transfers without limits instantly.</p>
        </div>
      </div>
    </section>
  )
}

export default Benefits
