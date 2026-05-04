import ProductCard from '@/components/shared/ProductCard'
import Link from 'next/link'

const products = [
  {
    region: 'Chimaltenango',
    flavorNotes: 'Dark chocolate · Brown sugar · Smooth, lingering finish',
    altitude: '1,700–1,900 masnm',
    regionNum: '01',
    bagImage: '/images/bag-kraft.png',
  },
  {
    region: 'San Miguel Jilotepeque',
    flavorNotes: 'Molasses · Toasted walnut · Bold, full body',
    altitude: '1,600–1,800 masnm',
    regionNum: '02',
    bagImage: '/images/bag-red.jpg',
  },
  {
    region: 'Huehuetenango',
    flavorNotes: 'Stone fruit · Dark caramel · Lingering, complex sweetness',
    altitude: '1,800–2,000 masnm',
    regionNum: '03',
    bagImage: '/images/bag-black.png',
  },
]

export default function ProductSection() {
  return (
    <section id="shop" className="py-24 lg:py-32" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: '#6B4C2A' }}>
            Shop
          </p>
          <h2
            className="text-4xl lg:text-5xl font-semibold leading-tight mb-5"
            style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}
          >
            Choose Your Region.
            <br />Choose Your Grind.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#5a4030' }}>
            Every bag is dark roast, organically grown, and sourced directly from the families who grew it.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.region} {...product} />
          ))}
        </div>

        {/* Subscription banner */}
        <div
          className="p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          style={{ backgroundColor: '#1C1008' }}
        >
          <div>
            <h3
              className="text-2xl lg:text-3xl font-semibold mb-2"
              style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}
            >
              Never run out. Save 15% every month.
            </h3>
            <p className="text-sm lg:text-base leading-relaxed max-w-xl" style={{ color: 'rgba(245,240,232,0.65)' }}>
              Subscribe to any region and we'll deliver fresh-roasted Guatemalan coffee to your door every month. Cancel anytime. No commitment. Just great coffee, consistently.
            </p>
          </div>
          <Link
            href="/#subscribe"
            className="flex-shrink-0 inline-flex items-center px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase transition-opacity hover:opacity-80 whitespace-nowrap"
            style={{ backgroundColor: '#F5F0E8', color: '#1C1008' }}
          >
            Start Your Subscription
          </Link>
        </div>
      </div>
    </section>
  )
}
