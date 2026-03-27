import React, { useRef } from 'react'

export const HoverCard = ({ children, className = '', glowColor = 'rgba(16, 185, 129, 0.6)' }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Store raw mouse position for the glow
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    // Calculate normalized position relative to card center (-1 to 1)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const normalX = (x - centerX) / centerX; // -1 (left) to 1 (right)
    const normalY = (y - centerY) / centerY; // -1 (top)  to 1 (bottom)

    // Tilt AWAY from cursor: if cursor is on the right, tilt left (negative rotateY)
    const maxTilt = 8; // degrees
    const rotateY = -(normalX * maxTilt);
    const rotateX = normalY * maxTilt;

    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`bg-linear-to-tr from-card-alt via-card to-card-alt border border-border rounded-2xl group flex flex-col relative overflow-hidden transition-[border-color] hover:border-border/80 ${className}`}
        style={{ 
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out',
          willChange: 'transform',
        }}
    >
      {/* Mouse-following border glow via mask */}
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
