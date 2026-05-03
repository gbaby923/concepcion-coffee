'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C1008', color: '#F5F0E8' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0"
                style={{ borderColor: 'rgba(245,240,232,0.3)' }}
              >
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: '#F5F0E8', fontFamily: 'var(--font-playfair)' }}
                >
                  CC
                </span>
              </div>
              <span
                className="text-sm font-semibold tracking-[0.15em] uppercase"
                style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}
              >
                Concepcion Coffee
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6 italic"
              style={{ color: 'rgba(245,240,232,0.65)', fontFamily: 'var(--font-playfair)' }}
            >
              "Grown by families.<br />Rooted since 1983."
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/concepcioncoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs tracking-wide hover:opacity-70 transition-opacity"
                style={{ color: 'rgba(245,240,232,0.7)' }}
                aria-label="Follow us on Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                @concepcioncoffee
              </a>
            </div>
            <div className="mt-3">
              <a
                href="https://wa.me/18185217632"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs tracking-wide hover:opacity-70 transition-opacity"
                style={{ color: 'rgba(245,240,232,0.7)' }}
                aria-label="WhatsApp us"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                (818) 521-7632
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: 'rgba(245,240,232,0.5)' }}>
              Shop
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Our Coffee', href: '/#coffee' },
                { label: 'Chimaltenango', href: '/regions/chimaltenango' },
                { label: 'San Miguel Jilotepeque', href: '/regions/san-miguel-jilotepeque' },
                { label: 'Huehuetenango', href: '/regions/huehuetenango' },
                { label: 'Subscribe', href: '/#subscribe' },
              ].map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-100 transition-opacity"
                    style={{ color: 'rgba(245,240,232,0.65)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: 'rgba(245,240,232,0.5)' }}>
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Our Story', href: '/#story' },
                { label: 'The Regions', href: '/#regions' },
                { label: 'Process', href: '/#process' },
                { label: 'Wholesale', href: '/#wholesale' },
                { label: 'Contact', href: 'https://wa.me/18185217632' },
              ].map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-100 transition-opacity"
                    style={{ color: 'rgba(245,240,232,0.65)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: 'rgba(245,240,232,0.5)' }}>
              Stay Connected
            </h3>
            <p className="text-sm mb-4" style={{ color: 'rgba(245,240,232,0.65)' }}>
              Harvest updates, new regions, and brewing guides. No noise — just good coffee.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2.5 text-sm outline-none min-w-0"
                style={{
                  backgroundColor: 'rgba(245,240,232,0.1)',
                  border: '1px solid rgba(245,240,232,0.2)',
                  color: '#F5F0E8',
                }}
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="px-4 py-2.5 text-xs font-bold tracking-wide hover:opacity-80 transition-opacity flex-shrink-0"
                style={{ backgroundColor: '#8B1A1A', color: '#F5F0E8' }}
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: 'rgba(245,240,232,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(245,240,232,0.4)' }}>
            © 2026 Concepcion Coffee. Organically grown in the highlands of Guatemala.
          </p>
          <p className="text-xs" style={{ color: 'rgba(245,240,232,0.3)' }}>
            Concepción Valle Verde
          </p>
        </div>
      </div>
    </footer>
  )
}
