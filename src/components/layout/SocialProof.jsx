import React from 'react'
import Badge from '../ui/Badge'

const SocialProof = () => {
  return (
    <section className="py-20 border-b border-border/50 relative z-10 w-full bg-bg">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* <p className="text-sm text-text/80 font-medium mb-8">Trusted by ambitious startups teams worldwide</p> */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale contrast-200 hover:grayscale-0 transition-all duration-500">
          {/* Mock SVGs for logos */}
          <div className="text-xl font-bold font-sans tracking-tight">INTERCOM</div>
          <div className="text-xl font-bold font-sans tracking-tighter">Webflow</div>
          <div className="text-xl font-semibold tracking-wide">VERCEL</div>
          <div className="text-xl font-bold tracking-tight">stripe</div>
          <div className="text-xl font-black italic">LINEAR</div>
          <div className="text-xl font-bold">gumroad</div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
