'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const WORDS = [
  { text: 'QUALITY',     font: 'var(--font-changa)',        weight: 400, italic: false, upper: true,  spacing: '0.12em' },
  { text: 'SUSTAINABLE', font: 'var(--font-arbutus)',       weight: 400, italic: false, upper: true,  spacing: '0.08em' },
  { text: 'Familia',     font: 'var(--font-cinzel-dec)',    weight: 400, italic: false, upper: false, spacing: '0.04em' },
  { text: 'COSECHA',     font: 'var(--font-saira-stencil)', weight: 400, italic: false, upper: true,  spacing: '0.1em'  },
  { text: 'Amor',        font: 'var(--font-pinyon)',        weight: 400, italic: false, upper: false, spacing: '0.06em' },
  { text: 'EST. 1983',   font: 'var(--font-playfair)',      weight: 600, italic: true,  upper: true,  spacing: '0.15em' },
]
const WORD_MS = 600

export default function Hero() {
  const [phase, setPhase] = useState('words') // 'words' | 'logo' | 'cta'
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const timers = []

    WORDS.forEach((_, i) => {
      timers.push(setTimeout(() => setWordIndex(i), i * WORD_MS))
    })

    const logoAt = WORDS.length * WORD_MS
    timers.push(setTimeout(() => setPhase('logo'), logoAt))
    timers.push(setTimeout(() => setPhase('cta'), logoAt + 700))

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px' }}
      aria-label="Hero"
    >
      {/* Desktop Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        aria-hidden="true"
        style={{ pointerEvents: 'none' }}
      >
        <source src="/images/Gutamalen%20HERO.mp4" type="video/mp4" />
      </video>

      {/* Mobile Static Background (Bypasses all iOS Safari video issues) */}
      <div className="absolute inset-0 w-full h-full block md:hidden">
        <Image
          src="/images/Mountain Range.avif"
          alt="Concepcion Coffee"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay — darkens for words, eases to gradient for logo */}
      <div
        className="absolute inset-0"
        style={{
          background: phase === 'words'
            ? 'rgba(8,10,6,0.84)'
            : 'linear-gradient(to bottom, rgba(10,12,8,0.38) 0%, rgba(10,12,8,0.52) 60%, rgba(28,16,8,0.7) 100%)',
          transition: 'background 1.4s ease',
        }}
        aria-hidden="true"
      />

      {/* Word flash layer — always rendered, fades out via opacity */}
      <div
        className="absolute inset-0 flex items-center justify-center px-6"
        style={{
          opacity: phase === 'words' ? 1 : 0,
          transition: 'opacity 0.5s ease',
          pointerEvents: 'none',
        }}
      >
        <p
          key={wordIndex}
          style={{
            fontFamily: WORDS[wordIndex].font,
            fontWeight: WORDS[wordIndex].weight,
            fontStyle: WORDS[wordIndex].italic ? 'italic' : 'normal',
            fontSize: 'clamp(2.2rem, 8vw, 5.5rem)',
            color: '#F5F0E8',
            letterSpacing: WORDS[wordIndex].spacing,
            textTransform: WORDS[wordIndex].upper ? 'uppercase' : 'none',
            whiteSpace: 'nowrap',
            lineHeight: 1,
            animation: `wordFlash ${WORD_MS}ms ease forwards`,
          }}
        >
          {WORDS[wordIndex].text}
        </p>
      </div>

      {/* Logo + CTA layer — always rendered, fades in via opacity */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        style={{
          opacity: phase !== 'words' ? 1 : 0,
          transition: 'opacity 0.9s ease',
          pointerEvents: phase !== 'words' ? 'auto' : 'none',
        }}
      >
        {/* Shift everything up ~8% so it doesn't feel low-centered */}
        <div style={{ transform: 'translateY(-8%)' }}>

          <Image
            src="/images/concepcion_valle_verde_transparent.svg"
            alt="Concepcion Valle Verde"
            width={320}
            height={320}
            priority
            className="w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 drop-shadow-2xl mx-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />

          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.18em] uppercase mt-5"
            style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}
          >
            Concepcion Coffee
          </h1>

          {/* CTAs — fade in on 'cta' phase */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9"
            style={{
              opacity: phase === 'cta' ? 1 : 0,
              transform: phase === 'cta' ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
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
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: phase === 'cta' ? 1 : 0,
          transition: 'opacity 0.6s ease 0.3s',
          pointerEvents: 'none',
        }}
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
