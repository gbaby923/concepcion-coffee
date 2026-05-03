import Link from 'next/link'

const regions = [
  {
    num: '01',
    name: 'Chimaltenango',
    altitude: '1,700 – 1,900 masnm',
    flavor: 'Dark chocolate · Brown sugar · Smooth finish',
    href: '/regions/chimaltenango',
    bgColor: '#1a2e1a',
    image: '/images/region-chimaltenango.jpg',
  },
  {
    num: '02',
    name: 'San Miguel Jilotepeque',
    altitude: '1,600 – 1,800 masnm',
    flavor: 'Molasses · Toasted walnut · Bold body',
    href: '/regions/san-miguel-jilotepeque',
    bgColor: '#2d1a0a',
    image: '/images/region-san-miguel.jpg',
  },
  {
    num: '03',
    name: 'Huehuetenango',
    altitude: '1,800 – 2,000 masnm',
    flavor: 'Stone fruit · Dark caramel · Lingering sweetness',
    href: '/regions/huehuetenango',
    bgColor: '#0f1929',
    image: '/images/region-huehuetenango.jpg',
  },
]

export default function RegionsTeaser() {
  return (
    <section id="regions" className="py-24 lg:py-32" style={{ backgroundColor: '#FDFAF4' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: '#6B4C2A' }}>
            Origin
          </p>
          <h2
            className="text-4xl lg:text-5xl font-semibold leading-tight mb-5"
            style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}
          >
            Three Regions.
            <br />Three Stories.
          </h2>
          <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#5a4030' }}>
            Every growing region in Guatemala tells a different story in your cup. Explore the altitude, the culture, and the flavor behind each one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((region) => (
            <Link
              key={region.num}
              href={region.href}
              className="region-card-hover group block overflow-hidden"
              aria-label={`Explore ${region.name} region`}
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: '3/4', backgroundColor: region.bgColor }}
              >
                {/* Background image */}
                <div
                  className="region-card-img absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${region.image})`,
                    backgroundColor: region.bgColor,
                  }}
                />

                {/* Gradient overlay — darkens more on hover via CSS */}
                <div className="region-card-overlay absolute inset-0" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="region-card-info">
                    <p
                      className="text-[10px] tracking-[0.3em] uppercase mb-2"
                      style={{ color: 'rgba(245,240,232,0.55)' }}
                    >
                      Region {region.num}
                    </p>
                    <h3
                      className="text-2xl font-semibold leading-tight mb-3"
                      style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}
                    >
                      {region.name}
                    </h3>
                    <p className="text-xs mb-1" style={{ color: 'rgba(245,240,232,0.6)' }}>
                      {region.altitude}
                    </p>
                    <p
                      className="text-sm italic"
                      style={{ fontFamily: 'var(--font-playfair)', color: 'rgba(245,240,232,0.75)' }}
                    >
                      {region.flavor}
                    </p>
                  </div>

                  {/* CTA — slides up on hover */}
                  <div className="region-card-cta mt-5">
                    <span
                      className="inline-flex items-center gap-3 px-5 py-2.5 text-xs font-bold tracking-[0.15em] uppercase"
                      style={{ border: '1px solid rgba(245,240,232,0.55)', color: '#F5F0E8' }}
                    >
                      Explore Region
                      <span style={{ fontSize: '0.75rem' }}>→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
