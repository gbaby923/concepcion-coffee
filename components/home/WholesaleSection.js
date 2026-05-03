'use client'

import { useState } from 'react'

const benefits = [
  'Consistent, reliable supply',
  'Custom coffee program design',
  'Wholesale pricing',
  'Staff training & brewing guidance',
  'Equipment recommendations',
  'Flexible delivery scheduling',
]

export default function WholesaleSection() {
  const [form, setForm] = useState({
    businessName: '',
    type: '',
    location: '',
    volume: '',
    referral: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="wholesale" style={{ backgroundColor: '#1C1008' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — positioning */}
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5 font-medium"
              style={{ color: 'rgba(245,240,232,0.45)' }}
            >
              For Cafés &amp; Retailers
            </p>
            <h2
              className="text-4xl lg:text-5xl font-semibold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}
            >
              Bring Concepcion Coffee to Your Establishment.
            </h2>
            <p className="text-base lg:text-lg leading-relaxed mb-10" style={{ color: 'rgba(245,240,232,0.65)' }}>
              We partner with a select group of cafés, restaurants, hotels, and specialty retailers who share our commitment to quality and origin transparency. If you're looking for a Guatemalan coffee your customers will ask about by name, we'd like to hear from you.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(245,240,232,0.7)' }}>
                  <span className="flex-shrink-0 mt-0.5 text-xs" style={{ color: '#8B1A1A' }}>—</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="p-6 border" style={{ borderColor: 'rgba(245,240,232,0.1)', backgroundColor: 'rgba(245,240,232,0.04)' }}>
              <p className="text-sm italic" style={{ fontFamily: 'var(--font-playfair)', color: 'rgba(245,240,232,0.6)' }}>
                "We're selective because our farmers are. We only work with partners who understand what goes into this coffee."
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl"
                  style={{ backgroundColor: 'rgba(61,90,62,0.3)', border: '1px solid #3D5A3E', color: '#3D5A3E' }}
                >
                  ✓
                </div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}
                >
                  Application Received
                </h3>
                <p className="text-sm max-w-sm" style={{ color: 'rgba(245,240,232,0.6)' }}>
                  We review all applications within 3 business days. We'll be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3
                  className="text-xl font-semibold mb-6"
                  style={{ fontFamily: 'var(--font-playfair)', color: '#F5F0E8' }}
                >
                  Wholesale Application
                </h3>

                {/* Business name */}
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase mb-2" style={{ color: 'rgba(245,240,232,0.5)' }}>
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={form.businessName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm outline-none focus:ring-1"
                    style={{
                      backgroundColor: 'rgba(245,240,232,0.07)',
                      border: '1px solid rgba(245,240,232,0.15)',
                      color: '#F5F0E8',
                    }}
                    placeholder="Your business name"
                  />
                </div>

                {/* Type */}
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase mb-2" style={{ color: 'rgba(245,240,232,0.5)' }}>
                    Type of Establishment *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {['Café', 'Restaurant', 'Hotel', 'Specialty Retailer', 'Office', 'Other'].map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, type: t }))}
                        className="py-2 px-3 text-xs font-medium transition-all duration-150 text-left"
                        style={{
                          backgroundColor: form.type === t ? 'rgba(245,240,232,0.15)' : 'rgba(245,240,232,0.04)',
                          border: `1px solid ${form.type === t ? 'rgba(245,240,232,0.4)' : 'rgba(245,240,232,0.12)'}`,
                          color: form.type === t ? '#F5F0E8' : 'rgba(245,240,232,0.5)',
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location + volume row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase mb-2" style={{ color: 'rgba(245,240,232,0.5)' }}>
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm outline-none"
                      style={{
                        backgroundColor: 'rgba(245,240,232,0.07)',
                        border: '1px solid rgba(245,240,232,0.15)',
                        color: '#F5F0E8',
                      }}
                      placeholder="City, State"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase mb-2" style={{ color: 'rgba(245,240,232,0.5)' }}>
                      Monthly Volume *
                    </label>
                    <select
                      name="volume"
                      value={form.volume}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm outline-none appearance-none cursor-pointer"
                      style={{
                        backgroundColor: 'rgba(245,240,232,0.07)',
                        border: '1px solid rgba(245,240,232,0.15)',
                        color: form.volume ? '#F5F0E8' : 'rgba(245,240,232,0.4)',
                      }}
                    >
                      <option value="" disabled>Select</option>
                      {['Under 10 lbs', '10–25 lbs', '25–50 lbs', '50 lbs+'].map(v => (
                        <option key={v} value={v} style={{ backgroundColor: '#1C1008', color: '#F5F0E8' }}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* How did you hear */}
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase mb-2" style={{ color: 'rgba(245,240,232,0.5)' }}>
                    How did you hear about us? *
                  </label>
                  <input
                    type="text"
                    name="referral"
                    value={form.referral}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm outline-none"
                    style={{
                      backgroundColor: 'rgba(245,240,232,0.07)',
                      border: '1px solid rgba(245,240,232,0.15)',
                      color: '#F5F0E8',
                    }}
                    placeholder="Instagram, referral, Google..."
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase mb-2" style={{ color: 'rgba(245,240,232,0.5)' }}>
                    Tell us about your business *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 text-sm outline-none resize-none"
                    style={{
                      backgroundColor: 'rgba(245,240,232,0.07)',
                      border: '1px solid rgba(245,240,232,0.15)',
                      color: '#F5F0E8',
                    }}
                    placeholder="Your concept, your customers, what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 text-sm font-bold tracking-[0.15em] uppercase transition-opacity hover:opacity-80 disabled:opacity-60"
                  style={{ backgroundColor: '#F5F0E8', color: '#1C1008' }}
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>

                <p className="text-xs text-center" style={{ color: 'rgba(245,240,232,0.35)' }}>
                  We review all applications within 3 business days. We're selective because our farmers are.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
