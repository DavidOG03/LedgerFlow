import React from 'react'

export const AmbientGlow = ({ position = 'top-left', className = '' }) => {
  const positionClasses = {
    'top-left': 'top-20 -left-[400px]',
    'top-right': 'top-20 -right-[400px]',
    'bottom-left': 'bottom-20 -left-[400px]',
    'bottom-right': 'bottom-20 -right-[400px]',
    'center-right': 'top-1/2 -translate-y-1/2 -right-[400px]',
    'center-left': 'top-1/2 -translate-y-1/2 -left-[400px]',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'top-top': 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  const selectedPosition = positionClasses[position] || positionClasses['top-left'];

  return (
    <div 
      className={`absolute ${selectedPosition} w-[250px] md:w-[700px] h-[250px] rounded-[50%] bg-accent opacity-20 dark:opacity-60 blur-[80px] pointer-events-none z-[1] overflow-hidden ${className}`} 
    />
  );
};
