import RegionPage from '@/components/regions/RegionPage'

export const metadata = {
  title: 'San Miguel Jilotepeque — Concepcion Coffee',
  description: 'Single-origin dark roast from the highland farms of San Miguel Jilotepeque, Guatemala. 1,600–1,800 masnm. Molasses, toasted walnut, bold body.',
}

const region = {
  num: '02',
  name: 'San Miguel Jilotepeque',
  altitude: '1,600 – 1,800 masnm',
  heroBg: '#2d1a0a',
  heroImage: '/images/region-san-miguel.jpg',

  land: [
    "San Miguel Jilotepeque lies in the department of Chiquimula, tucked into a valley where the highlands begin their descent toward the Caribbean lowlands. The altitude here — between 1,600 and 1,800 meters — produces a coffee with more body and a bolder profile than its neighbors at higher elevation. The terrain is dramatic: steep hillsides covered in shade trees, deep ravines carved by seasonal rains, and soil that has never been touched by synthetic inputs.",
    "The washed process used here strips the cherry fruit away cleanly, allowing the bean's natural character to come through without interference. What remains is honest, direct, and unmistakably Guatemalan.",
  ],

  culture: [
    "The community of San Miguel Jilotepeque has a deep connection to the land that goes beyond agriculture. Coffee farming here is not an industry — it is a way of life that structures the entire calendar year. The planting season brings families together. The harvest season brings entire communities to the hillsides.",
    "These are farmers who have chosen to stay — who could have moved to the city but instead invested another generation into these slopes. Every bag from San Miguel carries that decision. The commitment to do it the slow way, the right way, because the coffee and the community both deserve it.",
  ],

  tastingNotes: 'Molasses · Toasted walnut · Bold, full body',

  flavorBars: [
    { label: 'Body', value: 5 },
    { label: 'Sweetness', value: 4 },
    { label: 'Acidity', value: 1 },
    { label: 'Finish', value: 4 },
  ],

  flavorProfile: [
    { label: 'Body', value: 'Very Full' },
    { label: 'Acidity', value: 'Low' },
    { label: 'Sweetness', value: 'Rich' },
    { label: 'Finish', value: 'Bold and warming' },
  ],

  products: [
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
    }
  ],
}

export default function SanMiguelPage() {
  return <RegionPage region={region} />
}
