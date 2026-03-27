import React, { useRef } from 'react'

export const HoverCard = ({ children, className = '', glowColor = 'rgba(16, 185, 129, 0.6)' }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={`bg-linear-to-tr from-card-alt via-card to-card-alt border border-border rounded-2xl group flex flex-col relative overflow-hidden transition-colors hover:border-border/80 ${className}`}
    >
      <div 
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 z-10"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), ${glowColor}, transparent 40%)`,
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
      
      <div className="relative z-20 h-full w-full flex flex-col">
        {children}
      </div>
    </div>
  )
}
