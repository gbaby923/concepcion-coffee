'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px' }}
      aria-label="Hero"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/images/Gutamalen%20HERO.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(10,12,8,0.35) 0%, rgba(10,12,8,0.5) 60%, rgba(28,16,8,0.65) 100%)' }}
        aria-hidden="true"
      />

      {/* Centered brand content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

        {/* Logo — animates in after video settles */}
        <div className="hero-logo mb-6">
          <Image
            src="/images/concepcion_valle_verde_transparent.svg"
            alt="Concepcion Valle Verde"
            width={180}
            height={180}
            priority
            className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 drop-shadow-2xl"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>

        {/* Brand name + tagline */}
        <div className="hero-text">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[0.12em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8', letterSpacing: '0.18em' }}
          >
            Concepcion Coffee
          </h1>
          <p
            className="text-sm sm:text-base tracking-[0.25em] uppercase mb-2"
            style={{ color: 'rgba(245,240,232,0.65)' }}
          >
            Highland Guatemala &nbsp;·&nbsp; Since 1983
          </p>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-lg mx-auto mt-5"
            style={{ color: 'rgba(245,240,232,0.75)', fontFamily: 'var(--font-inter)' }}
          >
            No pesticides. No shortcuts. Just the mountain,<br className="hidden sm:block" />
            the soil, and generations of care.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/#shop"
              className="inline-flex items-center justify-center px-9 py-3.5 text-xs font-bold tracking-[0.18em] uppercase transition-opacity hover:opacity-85 w-full sm:w-auto"
              style={{ backgroundColor: '#F5F0E8', color: '#1C1008' }}
            >
              Shop Coffee
            </Link>
            <Link
              href="/#story"
              className="inline-flex items-center justify-center px-9 py-3.5 text-xs font-bold tracking-[0.18em] uppercase border transition-colors hover:bg-white/10 w-full sm:w-auto"
              style={{ borderColor: 'rgba(245,240,232,0.45)', color: '#F5F0E8' }}
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(245,240,232,0.4)' }}>
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, rgba(245,240,232,0.5), transparent)' }}
        />
      </div>
    </section>
  )
}
