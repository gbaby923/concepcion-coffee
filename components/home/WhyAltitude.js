const pillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    label: 'Altitude',
    title: '1,785 Meters Above Sea Level',
    body: 'At this elevation, temperatures drop at night and rise slowly by day. Coffee cherries develop over months, not weeks. The result is a denser bean with more complex sugars and a cleaner, brighter cup.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
      </svg>
    ),
    label: 'Volcanic Soil',
    title: 'Volcanic Soil, Built Over Centuries',
    body: "Guatemala's highlands sit on ancient volcanic bedrock. The soil is rich in minerals, naturally well-draining, and unlike anything you'll find at lower elevations. The earth itself is part of the flavor.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
    label: 'No Interference',
    title: 'No Pesticides. No GMOs. Ever.',
    body: 'These farms have operated the same way for generations. No chemical inputs. No genetic modification. The plants grow the way nature intended — slower, harder, and far more rewarding.',
  },
]

export default function WhyAltitude() {
  return (
    <section id="coffee" className="py-24 lg:py-32" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: '#6B4C2A' }}>
            The Science of the Highlands
          </p>
          <h2
            className="text-4xl lg:text-5xl font-semibold leading-tight"
            style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}
          >
            Higher up.
            <br />
            Slower grown.
            <br />
            Better coffee.
          </h2>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              className="group"
              style={{ borderTop: '1px solid #E8E0D4', paddingTop: '2rem' }}
            >
              <div
                className="mb-6 transition-colors duration-300"
                style={{ color: '#6B4C2A' }}
              >
                {pillar.icon}
              </div>
              <p className="text-[11px] tracking-[0.2em] uppercase mb-2" style={{ color: '#6B4C2A', opacity: 0.7 }}>
                {pillar.label}
              </p>
              <h3
                className="text-xl font-semibold mb-4 leading-snug"
                style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}
              >
                {pillar.title}
              </h3>
              <p className="text-sm lg:text-base leading-relaxed" style={{ color: '#5a4030' }}>
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
