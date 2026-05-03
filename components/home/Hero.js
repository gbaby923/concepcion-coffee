'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PHRASES = ['No GMOs.', 'No Pesticides.', 'Just love.', 'Since 1983.']
const PHRASE_MS = 700
const START_MS = 3000

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(-1)
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    const timers = []
    PHRASES.forEach((_, i) => {
      timers.push(setTimeout(() => setPhraseIndex(i), START_MS + i * PHRASE_MS))
    })
    timers.push(setTimeout(() => setShowCTA(true), START_MS + PHRASES.length * PHRASE_MS))
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px' }}
      aria-label="Hero"
    >
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

      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(10,12,8,0.35) 0%, rgba(10,12,8,0.5) 60%, rgba(28,16,8,0.65) 100%)' }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

        <div className="hero-logo mb-6">
          <Image
            src="/images/concepcion_valle_verde_transparent.svg"
            alt="Concepcion Valle Verde"
            width={320}
            height={320}
            priority
            className="w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 drop-shadow-2xl"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>

        <h1
          className="hero-text text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.18em] uppercase"
          style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}
        >
          Concepcion Coffee
        </h1>

        {/* Fixed-height phrase container — prevents layout shift */}
        <div style={{ height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1.5rem' }}>
          {phraseIndex >= 0 && !showCTA && (
            <p
              key={phraseIndex}
              style={{
                fontFamily: 'var(--font-playfair)',
                fontStyle: 'italic',
                fontWeight: '300',
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                color: 'rgba(245,240,232,0.92)',
                letterSpacing: '0.04em',
                animation: `phraseFlash ${PHRASE_MS}ms ease forwards`,
              }}
            >
              {PHRASES[phraseIndex]}
            </p>
          )}
        </div>

        {showCTA && (
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
            style={{ animation: 'fadeSlideUp 0.8s ease both' }}
          >
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
        )}
      </div>

      {showCTA && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animation: 'fadeSlideUp 0.7s ease both' }}
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
      )}
    </section>
  )
}
