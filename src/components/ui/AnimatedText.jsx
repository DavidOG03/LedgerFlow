import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const splitText = (children) => {
  return React.Children.map(children, (child) => {
    if (typeof child === 'string') {
      return child.split('').map((char, index) => (
        <span 
          key={index} 
          className="char inline-block" 
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal', willChange: 'transform, opacity, filter' }}
        >
          {char}
        </span>
      ));
    }
    if (React.isValidElement(child)) {
      if (child.type === 'br') return child;
      return React.cloneElement(child, {
        ...child.props,
        children: splitText(child.props.children)
      });
    }
    return child;
  });
};

export const AnimatedText = ({ as: Component = 'div', className = '', children, delay = 0, stagger=0.025 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.char', 
        { 
          opacity: 0, 
          scale: 1.5, 
          filter: 'blur(8px)',
          y: 20,
        },
        { 
          opacity: 1, 
          scale: 1, 
          filter: 'blur(0px)',
          y: 0,
          duration: 1.2, 
          stagger: stagger, 
          ease: 'power3.out',
          delay: delay,
          force3D: true,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 95%',
            once: true
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, [delay, stagger]);

  return (
    <Component ref={containerRef} className={className} style={{ perspective: '1000px' }}>
      {splitText(children)}
    </Component>
  );
};
