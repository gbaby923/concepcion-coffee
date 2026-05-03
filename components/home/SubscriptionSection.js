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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
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

          {/* Right — visual subscription card */}
          <div>
            <div
              className="p-8 lg:p-10 relative overflow-hidden"
              style={{ backgroundColor: '#1C1008' }}
            >
              {/* Decorative year */}
              <p
                className="absolute top-4 right-6 text-7xl font-bold select-none leading-none"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: 'rgba(245,240,232,0.06)',
                }}
              >
                1983
              </p>

              <p
                className="text-xs tracking-[0.25em] uppercase mb-6 font-medium"
                style={{ color: 'rgba(245,240,232,0.45)' }}
              >
                How it works
              </p>

              {[
                { step: '1', label: 'Choose your region', sub: 'Chimaltenango, San Miguel, or Huehuetenango' },
                { step: '2', label: 'Choose your grind', sub: 'Whole bean or ground' },
                { step: '3', label: 'Choose your schedule', sub: 'Monthly delivery, skip or cancel anytime' },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-5 mb-7 last:mb-0 pb-7 last:pb-0 border-b last:border-0"
                  style={{ borderColor: 'rgba(245,240,232,0.08)' }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: 'rgba(245,240,232,0.1)', color: '#F5F0E8' }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: '#F5F0E8', fontFamily: 'var(--font-playfair)' }}>
                      {item.label}
                    </p>
                    <p className="text-xs" style={{ color: 'rgba(245,240,232,0.5)' }}>{item.sub}</p>
                  </div>
                </div>
              ))}

              <div
                className="mt-8 pt-6 border-t flex items-center justify-between"
                style={{ borderColor: 'rgba(245,240,232,0.08)' }}
              >
                <div>
                  <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}>
                    From $12.75
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(245,240,232,0.4)' }}>
                    per delivery · 15% off retail
                  </p>
                </div>
                <Link
                  href="/#shop"
                  className="px-6 py-3 text-xs font-bold tracking-[0.12em] uppercase hover:opacity-80 transition-opacity"
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
