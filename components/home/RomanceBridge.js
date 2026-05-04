import Link from 'next/link'

export default function RomanceBridge() {
  return (
    <section className="py-24 lg:py-32 flex items-center justify-center text-center px-6" style={{ backgroundColor: '#F5F0E8', borderBottom: '1px solid #E8E0D4' }}>
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight mb-8"
          style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}
        >
          Grown at 2,000 meters.<br />Roasted to order.<br />Poured in your kitchen.
        </h2>
        <Link
          href="/#shop"
          className="inline-flex items-center px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:opacity-80 transition-opacity"
          style={{ backgroundColor: '#1C1008', color: '#F5F0E8' }}
        >
          Shop The Harvest
        </Link>
      </div>
    </section>
  )
}
