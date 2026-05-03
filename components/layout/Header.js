'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Our Coffee', href: '/#coffee' },
  { label: 'Regions', href: '/#regions' },
  { label: 'Our Story', href: '/#story' },
  { label: 'Wholesale', href: '/#wholesale' },
  { label: 'Shop', href: '/#shop' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { count, setIsOpen } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? '#F5F0E8' : 'transparent',
        boxShadow: scrolled ? '0 1px 0 rgba(28,16,8,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Concepcion Coffee home">
            {/* Swap src="/images/logo.png" when logo file is added */}
            <div
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0"
              style={{ borderColor: scrolled ? '#1C1008' : '#F5F0E8' }}
            >
              <span
                className="text-xs font-bold tracking-widest"
                style={{ color: scrolled ? '#1C1008' : '#F5F0E8', fontFamily: 'var(--font-playfair)' }}
              >
                CC
              </span>
            </div>
            <div>
              <span
                className="block text-sm font-semibold tracking-[0.15em] uppercase transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: scrolled ? '#1C1008' : '#F5F0E8',
                }}
              >
                Concepcion Coffee
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link text-sm tracking-wide transition-colors duration-300"
                style={{ color: scrolled ? '#1C1008' : '#F5F0E8' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label={`Cart, ${count} items`}
              className="relative p-2 transition-opacity hover:opacity-70"
            >
              <svg
                width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke={scrolled ? '#1C1008' : '#F5F0E8'} strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {count > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center"
                  style={{ backgroundColor: '#8B1A1A', color: '#F5F0E8' }}
                >
                  {count}
                </span>
              )}
            </button>

            {/* CTA */}
            <Link
              href="/#shop"
              className="hidden lg:inline-flex items-center px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: scrolled ? '#1C1008' : '#F5F0E8',
                color: scrolled ? '#F5F0E8' : '#1C1008',
              }}
            >
              Order Now
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className="block w-6 h-px mb-1.5 transition-all duration-200"
                style={{
                  backgroundColor: scrolled ? '#1C1008' : '#F5F0E8',
                  transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
                }}
              />
              <span
                className="block w-6 h-px mb-1.5 transition-all duration-200"
                style={{
                  backgroundColor: scrolled ? '#1C1008' : '#F5F0E8',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-px transition-all duration-200"
                style={{
                  backgroundColor: scrolled ? '#1C1008' : '#F5F0E8',
                  transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu lg:hidden ${menuOpen ? 'open' : ''}`}
        style={{ backgroundColor: '#F5F0E8', borderTop: '1px solid rgba(28,16,8,0.08)' }}
      >
        <nav className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-espresso tracking-wide py-2 border-b border-stone-warm"
              onClick={() => setMenuOpen(false)}
              style={{ color: '#1C1008', borderColor: '#E8E0D4' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#shop"
            className="mt-2 py-3 text-center text-xs font-bold tracking-[0.15em] uppercase"
            style={{ backgroundColor: '#1C1008', color: '#F5F0E8' }}
            onClick={() => setMenuOpen(false)}
          >
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
