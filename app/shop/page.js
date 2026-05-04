import ProductCard from '@/components/shared/ProductCard'

const products = [
  {
    region: 'Chimaltenango Dark Roast',
    flavorNotes: 'Dark chocolate · Brown sugar · Smooth, lingering finish',
    altitude: '1,700–1,900 masnm',
    regionNum: '01',
    bagImage: '/images/bag-kraft.png',
  },
  {
    region: 'Chimaltenango Medium Roast',
    flavorNotes: 'Milk chocolate · Caramel · Balanced',
    altitude: '1,700–1,900 masnm',
    regionNum: '01',
    bagImage: '/images/bag-red.jpg',
  },
  {
    region: 'Chimaltenango Espresso Blend',
    flavorNotes: 'Cocoa nibs · Molasses · Heavy body',
    altitude: '1,700–1,900 masnm',
    regionNum: '01',
    bagImage: '/images/bag-black.png',
  },
  {
    region: 'San Miguel Jilotepeque Classic',
    flavorNotes: 'Molasses · Toasted walnut · Bold, full body',
    altitude: '1,600–1,800 masnm',
    regionNum: '02',
    bagImage: '/images/bag-red.jpg',
  },
  {
    region: 'San Miguel Jilotepeque Bold',
    flavorNotes: 'Dark cocoa · Black cherry · Smoky finish',
    altitude: '1,600–1,800 masnm',
    regionNum: '02',
    bagImage: '/images/bag-black.png',
  },
  {
    region: 'San Miguel Jilotepeque Reserve',
    flavorNotes: 'Vanilla bean · Baking spices · Smooth',
    altitude: '1,600–1,800 masnm',
    regionNum: '02',
    bagImage: '/images/bag-kraft.png',
  },
  {
    region: 'Huehuetenango Dark Roast',
    flavorNotes: 'Stone fruit · Dark caramel · Lingering, complex sweetness',
    altitude: '1,800–2,000 masnm',
    regionNum: '03',
    bagImage: '/images/bag-black.png',
  },
  {
    region: 'Huehuetenango Medium Roast',
    flavorNotes: 'Cherry · Nougat · Bright',
    altitude: '1,800–2,000 masnm',
    regionNum: '03',
    bagImage: '/images/bag-red.jpg',
  },
  {
    region: 'Huehuetenango Light Roast',
    flavorNotes: 'Floral · Peach · Clean finish',
    altitude: '1,800–2,000 masnm',
    regionNum: '03',
    bagImage: '/images/bag-kraft.png',
  }
]

export const metadata = {
  title: 'Shop All Coffee — Concepcion Coffee',
  description: 'Shop our entire selection of specialty grade Guatemalan coffee.',
}

export default function ShopPage() {
  return (
    <div className="pt-32 lg:pt-40 pb-24 lg:pb-32" style={{ backgroundColor: '#F5F0E8', minHeight: '100vh' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: '#6B4C2A' }}>
            Inventory
          </p>
          <h1
            className="text-4xl lg:text-5xl font-semibold leading-tight mb-5"
            style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}
          >
            Shop All Coffee.
          </h1>
          <p className="text-base leading-relaxed" style={{ color: '#5a4030' }}>
            Explore our entire selection of specialty grade, organically grown coffees from the highlands of Guatemala.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>

      </div>
    </div>
  )
}
