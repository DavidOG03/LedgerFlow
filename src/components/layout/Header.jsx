import React, { useState } from 'react'
import { useTheme } from '../ThemeProvider'
import Button from '../ui/Button'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Product', href: '#' },
    { label: 'Solutions', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Resources', href: '#' },
  ]

  return (
    <header className='fixed top-0 left-0 right-0 w-full z-50 border-b border-border/50 bg-bg/20 backdrop-blur-md'>
      {/* Main Bar */}
      <div className='flex justify-between items-center px-6 md:px-8 py-4'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <span className='text-lg font-bold text-text-h tracking-tight'>LedgerFlow</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className='flex items-center gap-8 text-sm font-medium text-text'>
            {navLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-text-h transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA + Theme Toggle */}
        <div className='hidden md:flex items-center gap-4 text-sm font-medium'>
          <Button onClick={toggleTheme} variant='ghost' aria-label="Toggle Theme">
            {theme === 'dark' ? (
              <svg className="w-5 h-5 text-text hover:text-text-h" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5 text-text hover:text-text-h" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </Button>
          <a href="#" className="text-text hover:text-text-h transition-colors">Login</a>
          <a href="#" className="bg-accent text-bg px-4 py-2 rounded-full hover:bg-accent/80 hover:text-bg transition-colors text-sm font-semibold">Get started</a>
        </div>

        {/* Mobile: Theme + Hamburger */}
        <div className='flex md:hidden items-center gap-3'>
          <Button onClick={toggleTheme} variant='ghost' 
          className="" aria-label="Toggle Theme">
            {theme === 'dark' ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </Button>
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle Navigation"
            className="text-text-h p-1 rounded-md hover:bg-border/50 transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className='flex flex-col px-6 pb-6 pt-2 gap-1 border-t border-border/40'>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-text hover:text-text-h hover:bg-border/30 transition-colors px-3 py-3 rounded-lg text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className='h-px bg-border/40 my-2' />
          <a href="#" onClick={() => setMenuOpen(false)} className="text-text hover:text-text-h hover:bg-border/30 transition-colors px-3 py-3 rounded-lg text-sm font-medium">
            Login
          </a>
          <a href="#" onClick={() => setMenuOpen(false)} className="mt-1 bg-accent text-bg px-4 py-3 rounded-xl text-center font-semibold hover:bg-accent/80 transition-colors text-sm">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header