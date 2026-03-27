import React from 'react'

const Button = ({children, onClick, variant = 'primary', className = ''}) => {
  const baseClasses = "px-5 py-2.5 rounded-full font-medium transition-all duration-200 border text-sm flex items-center justify-center gap-2"
  const variants = {
    primary: "bg-accent text-text-h border-accent hover:opacity-90 shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    secondary: "bg-accent-bg text-accent border-accent-border hover:bg-accent/20",
    outline: "bg-accent/20 text-text-h border-text hover:bg-text-h/5",
    ghost: "bg-none text-text border-transparent hover:text-text-h dark:text-text dark:hover:text-bg"
  }
  
  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}

export default Button