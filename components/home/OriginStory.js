const stats = [
  { value: 'Since 1983', label: 'Generational Farming' },
  { value: '1,785 m', label: 'Altitude (masnm)' },
  { value: '100%', label: 'Organically Grown' },
  { value: '3', label: 'Highland Regions' },
  { value: 'Dark Roast', label: 'One Profile, Perfected' },
  { value: 'Family', label: 'Farmed & Harvested' },
]

export default function OriginStory() {
  return (
    <section id="story" className="relative overflow-hidden">
      {/* Background — Farmer photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Farmer.avif')",
          backgroundColor: '#1C1008',
          backgroundPosition: 'center 20%',
        }}
        aria-hidden="true"
      />

      {/* Directional overlay — dark on left for text, opens up on right to reveal farmer */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(12,7,3,0.95) 0%, rgba(12,7,3,0.90) 35%, rgba(12,7,3,0.55) 60%, rgba(12,7,3,0.2) 100%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch mb-20">

          {/* Left — text */}
          <div className="flex flex-col justify-center">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5 font-medium"
              style={{ color: 'rgba(245,240,232,0.5)' }}
            >
              Where It Begins
            </p>
            <h2
              className="text-4xl lg:text-5xl font-semibold leading-tight mb-8"
              style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}
            >
              Not one farm.
              <br />The best families.
            </h2>
            <div className="space-y-5 text-base lg:text-lg leading-relaxed" style={{ color: 'rgba(245,240,232,0.72)' }}>
              <p>
                Concepcion Coffee was born in the highlands of Guatemala in 1983. Not in a boardroom. Not with investors. On a hillside at 1,785 meters above sea level, where the air is thin, the soil is volcanic, and the coffee cherries take their time.
              </p>
              <p>
                We work with small family farms scattered across Guatemala's most storied growing regions — Chimaltenango, San Miguel Jilotepeque, Huehuetenango. Each family has worked the same land for generations. Each harvest is picked by hand.
              </p>
              <p style={{ color: 'rgba(245,240,232,0.52)', fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}>
                "No pesticides. No GMOs. No shortcuts. Just mother nature, mountain altitude, and families who never stopped caring about what ends up in your cup."
              </p>
            </div>
          </div>

          {/* Right — farmer visible through background */}
          <div className="hidden lg:block" />
        </div>

        {/* Stats row */}
        <div className="border-t pt-12" style={{ borderColor: 'rgba(245,240,232,0.12)' }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <p
                  className="text-2xl lg:text-3xl font-bold mb-1"
                  style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}
                >
                  {stat.value}
                </p>
                <p className="text-[11px] tracking-[0.12em] uppercase" style={{ color: 'rgba(245,240,232,0.45)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
