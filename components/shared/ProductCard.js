'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'

const SIZES = [
  { label: '250g', price: 15 },
  { label: '454g', price: 20 },
  { label: '1kg', price: 35 },
]

const GRINDS = ['Whole Bean', 'Ground']

const REGION_COLORS = {
  'Chimaltenango': '#2d4a2d',
  'San Miguel Jilotepeque': '#4a2d14',
  'Huehuetenango': '#1a1f2e',
}

export default function ProductCard({ region, flavorNotes, altitude, bagImage, regionNum }) {
  const [selectedSize, setSelectedSize] = useState(SIZES[1])
  const [selectedGrind, setSelectedGrind] = useState(GRINDS[0])
  const [subscribe, setSubscribe] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const displayPrice = subscribe ? (selectedSize.price * 0.85).toFixed(2) : selectedSize.price.toFixed(2)

  function handleAddToCart() {
    addItem({
      region,
      size: selectedSize.label,
      price: selectedSize.price,
      grind: selectedGrind,
      subscribe,
      regionColor: REGION_COLORS[region] || '#6B4C2A',
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div
      className="card-hover flex flex-col border"
      style={{ backgroundColor: '#FDFAF4', borderColor: '#E8E0D4' }}
    >
      {/* Bag image area */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: '4/3',
          backgroundColor: REGION_COLORS[region] || '#6B4C2A',
          backgroundImage: bagImage ? `url(${bagImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Altitude badge */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold tracking-[0.15em] uppercase"
          style={{ backgroundColor: 'rgba(245,240,232,0.9)', color: '#1C1008' }}
        >
          {altitude}
        </div>

        {/* Region number */}
        <div
          className="absolute top-3 right-3 text-[10px] font-bold tracking-[0.2em] uppercase"
          style={{ color: 'rgba(245,240,232,0.7)' }}
        >
          Region {regionNum}
        </div>

        {/* No-image label */}
        {!bagImage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase text-center px-4"
              style={{ color: 'rgba(245,240,232,0.5)' }}
            >
              {region}
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <p className="text-xs tracking-[0.2em] uppercase mb-1.5" style={{ color: '#6B4C2A' }}>
            Dark Roast · Guatemala
          </p>
          <h3
            className="text-xl font-semibold mb-1"
            style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}
          >
            {region}
          </h3>
          <p className="text-sm italic" style={{ color: '#6B4C2A', fontFamily: 'var(--font-playfair)' }}>
            {flavorNotes}
          </p>
        </div>

        {/* Size selector */}
        <div className="mb-4">
          <p className="text-[11px] tracking-[0.15em] uppercase mb-2" style={{ color: '#6B4C2A' }}>Size</p>
          <div className="flex gap-2">
            {SIZES.map(s => (
              <button
                key={s.label}
                onClick={() => setSelectedSize(s)}
                className="flex-1 py-2 text-xs font-medium border transition-all duration-150"
                style={{
                  backgroundColor: selectedSize.label === s.label ? '#1C1008' : 'transparent',
                  color: selectedSize.label === s.label ? '#F5F0E8' : '#1C1008',
                  borderColor: '#1C1008',
                }}
                aria-pressed={selectedSize.label === s.label}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grind selector */}
        <div className="mb-5">
          <p className="text-[11px] tracking-[0.15em] uppercase mb-2" style={{ color: '#6B4C2A' }}>Grind</p>
          <div className="flex gap-2">
            {GRINDS.map(g => (
              <button
                key={g}
                onClick={() => setSelectedGrind(g)}
                className="flex-1 py-2 text-xs font-medium border transition-all duration-150"
                style={{
                  backgroundColor: selectedGrind === g ? '#1C1008' : 'transparent',
                  color: selectedGrind === g ? '#F5F0E8' : '#1C1008',
                  borderColor: '#1C1008',
                }}
                aria-pressed={selectedGrind === g}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Subscribe toggle */}
        <div
          className="flex items-center justify-between px-4 py-3 mb-5 cursor-pointer"
          style={{ backgroundColor: subscribe ? 'rgba(61,90,62,0.08)' : '#F5F0E8', border: `1px solid ${subscribe ? '#3D5A3E' : '#E8E0D4'}` }}
          onClick={() => setSubscribe(!subscribe)}
          role="checkbox"
          aria-checked={subscribe}
          tabIndex={0}
          onKeyDown={(e) => e.key === ' ' && setSubscribe(!subscribe)}
        >
          <div>
            <p className="text-xs font-semibold" style={{ color: '#1C1008' }}>
              Subscribe &amp; Save 15%
            </p>
            <p className="text-[11px]" style={{ color: '#6B4C2A' }}>Monthly delivery · Cancel anytime</p>
          </div>
          <div
            className="w-9 h-5 rounded-full relative flex-shrink-0 transition-colors duration-200"
            style={{ backgroundColor: subscribe ? '#3D5A3E' : '#E8E0D4' }}
          >
            <div
              className="absolute top-0.5 w-4 h-4 rounded-full transition-all duration-200"
              style={{
                backgroundColor: '#FDFAF4',
                left: subscribe ? 'calc(100% - 18px)' : '2px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center gap-4 mt-auto">
          <div>
            <p className="text-2xl font-bold" style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}>
              ${displayPrice}
            </p>
            {subscribe && (
              <p className="text-[11px] line-through" style={{ color: '#6B4C2A' }}>
                ${selectedSize.price.toFixed(2)}
              </p>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="flex-1 py-3.5 text-xs font-bold tracking-[0.12em] uppercase transition-all duration-200"
            style={{
              backgroundColor: added ? '#3D5A3E' : '#1C1008',
              color: '#F5F0E8',
            }}
            aria-label={`Add ${region} ${selectedSize.label} ${selectedGrind} to cart`}
          >
            {added ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}
