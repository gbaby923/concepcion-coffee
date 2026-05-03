import Link from 'next/link'
import ProductCard from '@/components/shared/ProductCard'

function FlavorBar({ label, value, max = 5 }) {
  const pct = (value / max) * 100
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs w-20 flex-shrink-0" style={{ color: 'rgba(245,240,232,0.55)' }}>{label}</span>
      <div className="flex-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(245,240,232,0.12)' }}>
        <div
          className="h-1 rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, backgroundColor: '#8B1A1A' }}
        />
      </div>
      <span className="text-[10px] w-16 text-right" style={{ color: 'rgba(245,240,232,0.4)' }}>{label}</span>
    </div>
  )
}

export default function RegionPage({ region }) {
  const {
    num,
    name,
    altitude,
    heroBg,
    heroImage,
    land,
    culture,
    flavorProfile,
    tastingNotes,
    flavorBars,
    product,
  } = region

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})`, backgroundColor: heroBg }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(28,16,8,0.95) 0%, rgba(28,16,8,0.4) 50%, rgba(28,16,8,0.15) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-20 w-full">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: 'rgba(245,240,232,0.5)' }}
          >
            Region {num}
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-4"
            style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}
          >
            {name}
          </h1>
          <p className="text-sm lg:text-base" style={{ color: 'rgba(245,240,232,0.6)' }}>
            {altitude} &nbsp;·&nbsp; Dark Roast &nbsp;·&nbsp; Organically Grown
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#F5F0E8', borderBottom: '1px solid #E8E0D4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs" style={{ color: '#6B4C2A' }} aria-label="Breadcrumb">
            <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
            <span>/</span>
            <Link href="/#regions" className="hover:opacity-70 transition-opacity">Regions</Link>
            <span>/</span>
            <span style={{ color: '#1C1008' }}>{name}</span>
          </nav>
        </div>
      </div>

      {/* The Land */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#6B4C2A' }}>
                The Land
              </p>
              <h2
                className="text-3xl lg:text-4xl font-semibold mb-8 leading-snug"
                style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}
              >
                Where {name} Grows
              </h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: '#5a4030' }}>
                {land.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Altitude stat panel */}
            <div
              className="p-8 lg:p-10"
              style={{ backgroundColor: '#1C1008' }}
            >
              <div className="text-center mb-8 pb-8 border-b" style={{ borderColor: 'rgba(245,240,232,0.1)' }}>
                <p
                  className="text-5xl lg:text-6xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}
                >
                  {altitude}
                </p>
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: 'rgba(245,240,232,0.4)' }}>
                  Meters Above Sea Level
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-xl font-bold mb-1" style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}>Dark</p>
                  <p className="text-[10px] tracking-[0.15em] uppercase" style={{ color: 'rgba(245,240,232,0.4)' }}>Roast Profile</p>
                </div>
                <div>
                  <p className="text-xl font-bold mb-1" style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}>Washed</p>
                  <p className="text-[10px] tracking-[0.15em] uppercase" style={{ color: 'rgba(245,240,232,0.4)' }}>Process</p>
                </div>
                <div>
                  <p className="text-xl font-bold mb-1" style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}>Hand</p>
                  <p className="text-[10px] tracking-[0.15em] uppercase" style={{ color: 'rgba(245,240,232,0.4)' }}>Picked</p>
                </div>
                <div>
                  <p className="text-xl font-bold mb-1" style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}>Guatemala</p>
                  <p className="text-[10px] tracking-[0.15em] uppercase" style={{ color: 'rgba(245,240,232,0.4)' }}>Origin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Culture */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: '#FDFAF4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#6B4C2A' }}>
              The Culture
            </p>
            <h2
              className="text-3xl lg:text-4xl font-semibold mb-8 leading-snug"
              style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}
            >
              The Families Behind It
            </h2>
            <div className="space-y-5 text-base lg:text-lg leading-relaxed" style={{ color: '#5a4030' }}>
              {culture.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Flavor */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: '#1C1008' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(245,240,232,0.45)' }}>
                The Flavor
              </p>
              <h2
                className="text-3xl lg:text-4xl font-semibold mb-6"
                style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}
              >
                What's In Your Cup
              </h2>
              <p
                className="text-xl italic mb-10"
                style={{ fontFamily: 'var(--font-playfair)', color: 'rgba(245,240,232,0.7)' }}
              >
                {tastingNotes}
              </p>

              <div className="space-y-5">
                {flavorBars.map(bar => (
                  <FlavorBar key={bar.label} label={bar.label} value={bar.value} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {flavorProfile.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-5 border"
                  style={{ borderColor: 'rgba(245,240,232,0.08)', backgroundColor: 'rgba(245,240,232,0.03)' }}
                >
                  <div
                    className="w-1 flex-shrink-0 self-stretch"
                    style={{ backgroundColor: '#8B1A1A' }}
                  />
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase mb-1" style={{ color: 'rgba(245,240,232,0.4)' }}>
                      {item.label}
                    </p>
                    <p className="font-semibold" style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Product */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#6B4C2A' }}>
              Order
            </p>
            <h2
              className="text-3xl lg:text-4xl font-semibold mb-4"
              style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}
            >
              {name} — Dark Roast
            </h2>
            <p className="text-base" style={{ color: '#5a4030' }}>
              Organically grown · Dark roast · Family farmed
            </p>
          </div>
          <div className="max-w-sm mx-auto">
            <ProductCard {...product} />
          </div>
        </div>
      </section>

      {/* Explore other regions */}
      <section className="py-16" style={{ backgroundColor: '#FDFAF4', borderTop: '1px solid #E8E0D4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm" style={{ color: '#6B4C2A' }}>
            Explore more growing regions
          </p>
          <Link
            href="/#regions"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
            style={{ color: '#1C1008' }}
          >
            View all regions →
          </Link>
        </div>
      </section>
    </>
  )
}
