'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const WORDS = ['QUALITY', 'TRUTH', 'ACCOUNTABILITY', 'LOVE']
const WORD_MS = 620

export default function Hero() {
  const [phase, setPhase] = useState('words') // 'words' | 'logo' | 'cta'
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const timers = []

    // Flash each word
    WORDS.forEach((_, i) => {
      timers.push(setTimeout(() => setWordIndex(i), i * WORD_MS))
    })

    // All words done → reveal logo
    const logoAt = WORDS.length * WORD_MS
    timers.push(setTimeout(() => setPhase('logo'), logoAt))

    // 500ms after logo → reveal CTAs
    timers.push(setTimeout(() => setPhase('cta'), logoAt + 500))

    return () => timers.forEach(clearTimeout)
  }, [])

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

      {/* Overlay — solid dark during words, fades to gradient for logo/cta */}
      <div
        className="absolute inset-0"
        style={{
          background: phase === 'words'
            ? 'rgba(8,10,6,0.86)'
            : 'linear-gradient(to bottom, rgba(10,12,8,0.38) 0%, rgba(10,12,8,0.52) 60%, rgba(28,16,8,0.7) 100%)',
          transition: 'background 1s ease',
        }}
        aria-hidden="true"
      />

      {/* Flashing words — dead center, hidden once words phase ends */}
      {phase === 'words' && (
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p
            key={wordIndex}
            style={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 900,
              fontSize: 'clamp(3.5rem, 12vw, 9rem)',
              color: '#F5F0E8',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              lineHeight: 1,
              animation: `wordFlash ${WORD_MS}ms ease forwards`,
            }}
          >
            {WORDS[wordIndex]}
          </p>
        </div>
      )}

      {/* Logo + CTAs — revealed after words */}
      {(phase === 'logo' || phase === 'cta') && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

          {/* Logo */}
          <div style={{ animation: 'heroFadeIn 0.9s cubic-bezier(0.16,1,0.3,1) both' }}>
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

          {/* Brand name */}
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.18em] uppercase mt-6"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: '#F5F0E8',
              animation: 'heroFadeIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both',
            }}
          >
            Concepcion Coffee
          </h1>

          {/* CTAs */}
          {phase === 'cta' && (
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
              style={{ animation: 'heroFadeIn 0.7s ease both' }}
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
      )}

      {/* Scroll indicator */}
      {phase === 'cta' && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animation: 'heroFadeIn 0.7s ease 0.2s both' }}
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
