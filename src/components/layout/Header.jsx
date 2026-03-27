import React from 'react'
import { useTheme } from '../ThemeProvider'
import Button from '../ui/Button';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className='flex justify-between items-center px-8 py-5 fixed top-0 left-0 right-0 w-full z-50 border-b border-border/50 bg-bg/40 backdrop-blur-sm'>
        <div className='flex items-center gap-2'>
            {/* <div className="w-6 h-6 rounded bg-accent flex items-center justify-center text-xs font-bold text-bg">L</div> */}
            <span className='text-lg font-bold text-text-h tracking-tight'>LedgerFlow</span>
        </div>
        <nav className="hidden md:block">
            <ul className='flex items-center gap-8 text-sm font-medium text-text'>
                <li><a href="#" className="hover:text-text-h transition-colors">Product</a></li>
                <li><a href="#" className="hover:text-text-h transition-colors">Solutions</a></li>
                <li><a href="#" className="hover:text-text-h transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-text-h transition-colors">Resources</a></li>
            </ul>
        </nav>
        <div className='flex items-center gap-4 text-sm font-medium'>
            <Button 
              onClick={toggleTheme} 
              variant='ghost'
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-text hover:text-text-h" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5 text-text hover:text-text-h" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </Button>
            <a href="#" className="hidden sm:block text-text hover:text-text-h dark:text-text dark:hover:text-bg transition-colors">Login</a>
            <a href="#" className="bg-accent text-bg dark:bg-linear-to-r from-accent to-accent-bg dark:text-bg px-4 py-2 rounded-full hover:bg-accent/80
            hover:text-bg dark:hover:text-bg dark:hover:bg-accent transition-colors">Get started</a>
        </div>
    </header>
  )
}

export default Header