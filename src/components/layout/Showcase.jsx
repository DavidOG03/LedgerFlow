import React from 'react'
import { AmbientGlow } from '../ui/AmbientGlow'
import { AnimatedText } from '../ui/AnimatedText'
import { AnimatedReveal } from '../ui/AnimatedReveal'

const Showcase = () => {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4 relative overflow-hidden">
      <AmbientGlow position="top-right" />
      <div className="bg-card border border-border rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
        <div className="flex-1 z-10">
          <AnimatedText as="h2" className="text-3xl md:text-5xl font-bold text-text-h mb-6 leading-tight tracking-tighter">
            See LedgerFlow <br /> In Action
          </AnimatedText>
          <AnimatedReveal as="p" className="text-text/80 text-lg mb-8 max-w-md">
            Take a self-guided tour through our precision interface and see how we handle high-density data without the chaos.
          </AnimatedReveal>
          <button className="bg-text-h text-bg px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
            Watch the Video
          </button>
        </div>
        <div className="flex-1 relative z-10 w-full h-full min-h-[300px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-video bg-card-alt rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
             {/* Mock Dashboard UI for the video thumbnail */}
             <div className="w-full h-full relative p-4 flex flex-col gap-4 opacity-50">
                <div className="h-4 w-1/4 bg-border rounded"></div>
                <div className="flex-1 flex gap-4">
                    <div className="w-1/3 bg-border rounded flex flex-col gap-2 p-2">
                        <div className="w-full h-2 bg-card-alt rounded"></div>
                        <div className="w-5/6 h-2 bg-card-alt rounded"></div>
                    </div>
                    <div className="flex-1 bg-border rounded p-2">
                        <div className="w-full h-32 bg-accent/20 rounded mb-2"></div>
                    </div>
                </div>
             </div>
             <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full bg-text-h/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                     <svg className="w-8 h-8 text-text-h ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                 </div>
             </div>
          </div>
        </div>
        {/* Decorative background glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 blur-[100px] rounded-full z-0 block pointer-events-none"></div>
      </div>
    </section>
  )
}

export default Showcase
