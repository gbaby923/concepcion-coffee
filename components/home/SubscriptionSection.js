import Link from 'next/link'

const features = [
  'Fresh roasted to order',
  'Choose your region each month',
  'Whole bean or ground',
  '15% off every order',
  'Skip or cancel anytime',
  'Free shipping on subscriptions',
]

export default function SubscriptionSection() {
  return (
    <section id="subscribe" className="py-24 lg:py-32" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — copy */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-5 font-medium" style={{ color: '#6B4C2A' }}>
              Subscription
            </p>
            <h2
              className="text-4xl lg:text-5xl font-semibold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}
            >
              Your Morning,
              <br />Handled.
            </h2>
            <p className="text-base lg:text-lg leading-relaxed mb-10" style={{ color: '#5a4030' }}>
              Pick your region. Pick your grind. We handle the rest — fresh-roasted and delivered monthly to your door.
            </p>

            <ul className="space-y-3 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm lg:text-base" style={{ color: '#1C1008' }}>
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px]"
                    style={{ backgroundColor: '#3D5A3E', color: '#F5F0E8' }}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/#shop"
              className="inline-flex items-center px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1C1008', color: '#F5F0E8' }}
            >
              Subscribe Now — From $15/mo
            </Link>
          </div>

          {/* Right — pour over lifestyle photo */}
          <div className="relative overflow-hidden" style={{ minHeight: '500px', aspectRatio: '4/5' }}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/pour%20over%20coffee.avif')" }}
            />
            {/* Subtle bottom vignette */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(28,16,8,0.18) 0%, transparent 50%)' }}
            />
            {/* Price tag overlay */}
            <div
              className="absolute bottom-6 left-6 right-6 p-5"
              style={{ backgroundColor: 'rgba(28,16,8,0.82)', backdropFilter: 'blur(4px)' }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold" style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}>
                    From $12.75
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(245,240,232,0.5)' }}>
                    per delivery · 15% off retail
                  </p>
                </div>
                <Link
                  href="/#shop"
                  className="px-5 py-2.5 text-xs font-bold tracking-[0.12em] uppercase hover:opacity-80 transition-opacity flex-shrink-0"
                  style={{ backgroundColor: '#F5F0E8', color: '#1C1008' }}
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
