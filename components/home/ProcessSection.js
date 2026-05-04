import Image from 'next/image'

const steps = [
  {
    icon: '/images/picking icon.png',
    title: 'Hand Picked',
    body: 'Every cherry is harvested by hand at peak ripeness. No machines. No shortcuts. Just experienced hands that know the exact moment a cherry is ready to be pulled from the branch.',
  },
  {
    icon: '/images/sun dry.png',
    title: 'Sun Dried',
    body: 'After washing, beans are laid out on raised patios under the Guatemalan sun. Slow, traditional drying builds the dense, complex sweetness that defines our roast.',
  },
  {
    icon: '/images/transport icon.png',
    title: 'Direct Transport',
    body: 'From the highland mills straight down the mountain. Direct trade ensures complete traceability and preserves the integrity of the beans from the family farm to our roaster.',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" style={{ backgroundColor: '#FDFAF4' }}>

      {/* Seamless transition from the dark OriginStory section */}
      <div
        className="w-full h-32 lg:h-48"
        style={{ background: 'linear-gradient(to bottom, #1C1008 0%, #FDFAF4 100%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 lg:pb-32 pt-8 lg:pt-12">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16 lg:mb-24">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: '#6B4C2A' }}>
              How It's Made
            </p>
            <h2
              className="text-4xl lg:text-5xl font-semibold leading-tight"
              style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}
            >
              Picked.
              <br />Sun Dried.
              <br />Delivered.
            </h2>
          </div>
          <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#5a4030' }}>
            From the moment a cherry is picked to the moment it reaches your door, every step is intentional. Here's how we do it — the same way, every time, since 1983.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: '#E8E0D4' }}>
          {steps.map((step) => (
            <div
              key={step.title}
              className="p-8 lg:p-12 flex flex-col items-center text-center group"
              style={{ backgroundColor: '#FDFAF4' }}
            >
              {/* Icon with multiply blend mode to seamlessly remove any white background */}
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 mb-8 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-contain"
                  style={{ mixBlendMode: 'multiply', opacity: 0.85 }}
                />
              </div>
              
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
