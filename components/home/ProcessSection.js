import Image from 'next/image'

const steps = [
  {
    num: '01',
    title: 'Harvest',
    body: 'Every cherry is picked by hand at peak ripeness. No machines. No shortcuts. Just experienced hands that know the difference between a ripe cherry and one that needs another week.',
  },
  {
    num: '02',
    title: 'Washed Process',
    body: "After picking, cherries are washed and the fruit removed — a process that produces a cleaner, brighter cup while preserving the bean's natural character and the region's distinct terroir.",
  },
  {
    num: '03',
    title: 'Patio Dried',
    body: 'Beans are laid out on raised patios under the Guatemalan sun. Slow. Traditional. The way it has been done on these farms since 1983 — because patience in processing pays off in every cup.',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32" style={{ backgroundColor: '#FDFAF4' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header Grid: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-24">
          
          {/* Image */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src="/images/basket of red beans.avif"
              alt="Harvesting red coffee cherries"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: '#6B4C2A' }}>
              How It's Made
            </p>
            <h2
              className="text-4xl lg:text-5xl font-semibold leading-tight mb-8"
              style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}
            >
              Washed.
              <br />Patio Dried.
              <br />Dark Roasted.
            </h2>
            <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#5a4030' }}>
              From the moment a cherry is picked to the moment it reaches your door, every step is intentional. Here's how we do it — the same way, every time, since 1983.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: '#E8E0D4' }}>
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-8 lg:p-10"
              style={{ backgroundColor: '#FDFAF4' }}
            >
              <p
                className="text-5xl lg:text-6xl font-bold leading-none mb-6 select-none"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(28,16,8,0.15)',
                }}
              >
                {step.num}
              </p>
              <h3
                className="text-xl font-semibold mb-4"
                style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}
              >
                {step.title}
              </h3>
              <p className="text-sm lg:text-base leading-relaxed" style={{ color: '#5a4030' }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
