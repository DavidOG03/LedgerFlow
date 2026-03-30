import React, { useEffect, useRef } from 'react';

export const AnimatedReveal = ({ as: Component = 'div', className = '', children, delay = 0 }) => {
  const elRef = useRef(null);

  useEffect(() => {
    let ctx;
    
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(elRef.current, 
          { y: 20, opacity: 0 }, 
          { 
              y: 0, 
              opacity: 1, 
              duration: 1, 
              ease: 'power3.out', 
              delay: delay,
              force3D: true,
              scrollTrigger: {
                  trigger: elRef.current,
                  start: 'top 95%',
                  once: true
              }
          }
        );
      }, elRef);
    };

    loadGSAP();
    
    return () => ctx?.revert();
  }, [delay]);

  return (
    <Component ref={elRef} className={className}>
      {children}
    </Component>
  );
};
