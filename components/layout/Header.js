'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
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
  const pathname = usePathname()
  
  const isHome = pathname === '/'
  const visible = !isHome || scrolled

  useEffect(() => {
    if (!isHome) return
    const threshold = window.innerHeight * 0.82

    const onScroll = () => {
      setScrolled(window.scrollY > threshold)
      if (window.scrollY <= threshold) setMenuOpen(false)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: '#F5F0E8',
        boxShadow: '0 1px 0 rgba(28,16,8,0.08)',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Concepcion Coffee home">
            <Image
              src="/images/logo%202.png"
              alt="Concepcion Coffee"
              width={44}
              height={44}
              className="object-contain"
              style={{ width: '40px', height: '40px' }}
            />
            <span
              className="hidden sm:block text-sm font-semibold tracking-[0.14em] uppercase"
              style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}
            >
              Concepcion Coffee
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link text-sm tracking-wide"
                style={{ color: '#1C1008' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label={`Cart, ${count} items`}
              className="relative p-2 hover:opacity-60 transition-opacity"
            >
              <svg
                width="21" height="21" viewBox="0 0 24 24" fill="none"
                stroke="#1C1008" strokeWidth="1.5"
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

            {/* Order Now CTA */}
            <Link
              href="/#shop"
              className="hidden lg:inline-flex items-center px-5 py-2.5 text-xs font-bold tracking-[0.12em] uppercase hover:opacity-80 transition-opacity"
              style={{ backgroundColor: '#1C1008', color: '#F5F0E8' }}
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
                className="block w-5 h-px mb-1.5 transition-all duration-200"
                style={{
                  backgroundColor: '#1C1008',
                  transform: menuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none',
                }}
              />
              <span
                className="block w-5 h-px mb-1.5 transition-all duration-200"
                style={{ backgroundColor: '#1C1008', opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-px transition-all duration-200"
                style={{
                  backgroundColor: '#1C1008',
                  transform: menuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none',
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
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide py-3 border-b"
              onClick={() => setMenuOpen(false)}
              style={{ color: '#1C1008', borderColor: '#E8E0D4' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#shop"
            className="mt-3 py-3 text-center text-xs font-bold tracking-[0.15em] uppercase"
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
