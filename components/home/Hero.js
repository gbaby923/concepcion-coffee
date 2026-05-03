import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image layer — swap src for real aerial farm photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundColor: '#0d1f0d',
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, rgba(13,31,13,0.72) 0%, rgba(28,16,8,0.68) 100%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Label */}
        <p
          className="text-xs tracking-[0.35em] uppercase mb-8 font-medium"
          style={{ color: 'rgba(245,240,232,0.65)' }}
        >
          Highland Guatemala &nbsp;·&nbsp; Since 1983
        </p>

        {/* Headline */}
        <h1
          className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.08] mb-8"
          style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}
        >
          Grown at Altitude.
          <br />
          <em className="not-italic" style={{ color: 'rgba(245,240,232,0.85)' }}>Rooted Since 1983.</em>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
          style={{ color: 'rgba(245,240,232,0.75)', fontFamily: 'var(--font-inter)' }}
        >
          Small family farms across the highlands of Guatemala.
          <br className="hidden sm:block" />
          No pesticides. No GMOs. Just the mountain, the soil, and generations of care.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#shop"
            className="inline-flex items-center px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase transition-all duration-200 hover:opacity-90 w-full sm:w-auto justify-center"
            style={{ backgroundColor: '#F5F0E8', color: '#1C1008' }}
          >
            Shop Coffee
          </Link>
          <Link
            href="/#story"
            className="inline-flex items-center px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase border transition-all duration-200 hover:bg-white/10 w-full sm:w-auto justify-center"
            style={{ borderColor: 'rgba(245,240,232,0.5)', color: '#F5F0E8' }}
          >
            Our Story
          </Link>
        </div>

        {/* Trust micro-bar */}
        <div
          className="flex items-center justify-center gap-6 mt-16 flex-wrap"
          style={{ color: 'rgba(245,240,232,0.45)' }}
        >
          {['Since 1983', 'Organically Grown', '3 Highland Regions', 'Dark Roast'].map((item, i) => (
            <span key={item} className="flex items-center gap-6">
              <span className="text-xs tracking-[0.15em] uppercase">{item}</span>
              {i < 3 && <span className="w-px h-3" style={{ backgroundColor: 'rgba(245,240,232,0.2)' }} />}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(245,240,232,0.5), transparent)' }} />
      </div>
    </section>
  )
}
