import RegionPage from '@/components/regions/RegionPage'

export const metadata = {
  title: 'Chimaltenango — Concepcion Coffee',
  description: 'Single-origin dark roast from the highland farms of Chimaltenango, Guatemala. 1,700–1,900 masnm. Dark chocolate, brown sugar, smooth finish.',
}

const region = {
  num: '01',
  name: 'Chimaltenango',
  altitude: '1,700 – 1,900 masnm',
  heroBg: '#1a2e1a',
  heroImage: '/images/region-chimaltenango.jpg',

  land: [
    "Chimaltenango sits at the heart of Guatemala's western highlands, where the Sierra Madre mountain range rises to meet the clouds. The region's elevation — consistently above 1,700 meters — creates growing conditions that specialty roasters travel thousands of miles to source from. Cool nights slow the development of each cherry, allowing sugars to concentrate naturally and flavors to build complexity over time.",
    "The volcanic soil here has been enriched by centuries of geological activity. It drains perfectly, holds minerals well, and gives the coffee a distinct terroir that no amount of processing can replicate. This is not land that was chosen for convenience. It was chosen because nothing else produces coffee quite like it.",
  ],

  culture: [
    "The farming families of Chimaltenango have cultivated coffee on these slopes for generations. Many are indigenous Maya communities whose relationship with this land predates the coffee plant itself. They understand the mountain's rhythms — when to plant, when to pick, when to let nature do its work — in ways that no manual or certification program can fully capture.",
    "Harvest here is a family affair. Children grow up watching their parents and grandparents move through the rows, selecting only the ripest cherries by hand. The knowledge passes down not through instruction but through seasons — each one a lesson in patience, attention, and respect for what the land provides.",
  ],

  familyImage: '/images/women guata.avif',

  tastingNotes: 'Dark chocolate · Brown sugar · Smooth, lingering finish',

  flavorBars: [
    { label: 'Body', value: 4 },
    { label: 'Sweetness', value: 3.5 },
    { label: 'Acidity', value: 1.5 },
    { label: 'Finish', value: 4.5 },
  ],

  flavorProfile: [
    { label: 'Body', value: 'Full' },
    { label: 'Acidity', value: 'Low' },
    { label: 'Sweetness', value: 'Medium-Rich' },
    { label: 'Finish', value: 'Long and smooth' },
  ],

  products: [
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
    }
  ],
}

export default function ChimaltenangoPage() {
  return <RegionPage region={region} />
}
