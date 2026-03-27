import React from 'react'

const Badge = ({ children, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 justify-center bg-accent-bg border border-accent-border rounded-full w-fit px-3 py-1 ${className}`}>
        <div className="rounded-full w-1.5 h-1.5 bg-accent shadow-[0_0_8px_rgba(16,185,129,1)]"></div>
        <span className='text-accent text-xs font-semibold tracking-wider uppercase'>{children}</span>
    </div>
  )
}
export default Badge
