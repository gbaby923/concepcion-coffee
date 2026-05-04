import RegionPage from '@/components/regions/RegionPage'

export const metadata = {
  title: 'Huehuetenango — Concepcion Coffee',
  description: 'Single-origin dark roast from the high-altitude farms of Huehuetenango, Guatemala. 1,800–2,000 masnm. Stone fruit, dark caramel, lingering sweetness.',
}

const region = {
  num: '03',
  name: 'Huehuetenango',
  altitude: '1,800 – 2,000 masnm',
  heroBg: '#0f1929',
  heroImage: '/images/region-huehuetenango.jpg',

  land: [
    "Huehuetenango is Guatemala's highest and most remote coffee-growing region. Situated in the northwest highlands near the Mexican border, it reaches elevations above 2,000 meters — among the highest in all of Central America. A dry wind from the Tehuantepec plain in Mexico protects the region from frost, creating a microclimate that is unlike anywhere else in the country.",
    "At this altitude, everything slows down. The cherries take longer to ripen. The bean density increases. The sugars concentrate. The result is a coffee with a complexity and sweetness that is difficult to achieve at lower elevations — a cup that rewards patience the same way the mountain does.",
  ],

  culture: [
    "The Mam Maya people have inhabited the highlands of Huehuetenango for thousands of years. Their farming knowledge is ancient — an understanding of seasons, soil, and sky developed over generations before coffee ever came to this region. When coffee arrived, it was adopted into an existing framework of relationship with the land, not imposed on top of it.",
    "The farms here are small. The families are tight-knit. The harvest is slow and deliberate. There are no large estates in Huehuetenango — only families working their own land, their own way, in one of the most beautiful and challenging environments in the coffee-growing world.",
  ],

  tastingNotes: 'Stone fruit · Dark caramel · Lingering, complex sweetness',

  flavorBars: [
    { label: 'Body', value: 4 },
    { label: 'Sweetness', value: 5 },
    { label: 'Acidity', value: 2.5 },
    { label: 'Finish', value: 5 },
  ],

  flavorProfile: [
    { label: 'Body', value: 'Full' },
    { label: 'Acidity', value: 'Balanced / Bright' },
    { label: 'Sweetness', value: 'High' },
    { label: 'Finish', value: 'Long, complex, and sweet' },
  ],

  products: [
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
  ],
}

export default function HuehuetenangPage() {
  return <RegionPage region={region} />
}
