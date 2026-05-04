import Link from 'next/link'

const regions = [
  {
    num: '01',
    name: 'Chimaltenango',
    altitude: '1,700 – 1,900 masnm',
    flavor: 'Dark chocolate · Brown sugar · Smooth finish',
    href: '/regions/chimaltenango',
    image: '/images/Chimaltenango.png',
  },
  {
    num: '02',
    name: 'San Miguel Jilotepeque',
    altitude: '1,600 – 1,800 masnm',
    flavor: 'Molasses · Toasted walnut · Bold body',
    href: '/regions/san-miguel-jilotepeque',
    image: '/images/San%20Miguel%20Jilotepeque.png',
  },
  {
    num: '03',
    name: 'Huehuetenango',
    altitude: '1,800 – 2,000 masnm',
    flavor: 'Stone fruit · Dark caramel · Lingering sweetness',
    href: '/regions/huehuetenango',
    image: '/images/Huehuetenango.png',
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
                className="relative overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rounded-t-[250px]"
                style={{ aspectRatio: '3/4' }}
              >
                {/* Background image */}
                <div
                  className="region-card-img absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${region.image})` }}
                />

                {/* Bottom gradient overlay, we can make it a full overlay so the text pops */}
                <div className="region-card-overlay absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700" />

                {/* Card content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                  <div className="region-card-info flex flex-col items-center">
                    <p
                      className="text-[10px] tracking-[0.3em] uppercase mb-4"
                      style={{ color: 'rgba(245,240,232,0.75)' }}
                    >
                      Region {region.num}
                    </p>
                    <h3
                      className="text-3xl md:text-xl lg:text-2xl xl:text-3xl font-black tracking-widest uppercase mb-4 w-full px-4"
                      style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8', textShadow: '0 4px 20px rgba(0,0,0,0.4)', wordWrap: 'break-word' }}
                    >
                      {region.name}
                    </h3>
                    <p className="text-sm tracking-widest font-medium mb-3" style={{ color: 'rgba(245,240,232,0.9)' }}>
                      {region.altitude}
                    </p>
                    <p
                      className="text-base italic font-light max-w-[220px]"
                      style={{ fontFamily: 'var(--font-playfair)', color: 'rgba(245,240,232,0.85)' }}
                    >
                      {region.flavor}
                    </p>
                  </div>

                  {/* CTA — slides up on hover */}
                  <div className="region-card-cta mt-8">
                    <span
                      className="inline-flex items-center gap-3 px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-black"
                      style={{ border: '1px solid rgba(245,240,232,0.55)', color: '#F5F0E8' }}
                    >
                      View Coffees
                      <span style={{ fontSize: '0.85rem' }}>→</span>
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
