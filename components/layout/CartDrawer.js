'use client'

import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, total, count } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cart-backdrop fixed inset-0 z-40 bg-espresso/40 ${isOpen ? 'open' : ''}`}
        style={{ backgroundColor: isOpen ? 'rgba(28,16,8,0.4)' : 'transparent' }}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`cart-drawer fixed top-0 right-0 h-full z-50 w-full max-w-sm flex flex-col ${isOpen ? 'open' : ''}`}
        style={{ backgroundColor: '#FDFAF4' }}
        aria-label="Shopping cart"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: '#E8E0D4' }}>
          <h2 className="font-serif text-lg" style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}>
            Your Cart {count > 0 && <span className="text-sm font-normal text-earth">({count})</span>}
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:opacity-60 transition-opacity"
            aria-label="Close cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C1008" strokeWidth="1.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6B4C2A" strokeWidth="1" className="mb-4 opacity-40">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p className="text-sm text-earth mb-1" style={{ color: '#6B4C2A' }}>Your cart is empty</p>
              <p className="text-xs" style={{ color: '#6B4C2A', opacity: 0.7 }}>Add a coffee to get started</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b" style={{ borderColor: '#E8E0D4' }}>
                  {/* Color swatch for region */}
                  <div
                    className="w-16 h-16 flex-shrink-0 flex items-center justify-center text-xs text-center"
                    style={{ backgroundColor: item.regionColor || '#6B4C2A', color: '#F5F0E8' }}
                  >
                    <span className="text-[10px] font-bold tracking-wide leading-tight px-1">
                      {item.region}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm font-medium truncate" style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}>
                      {item.region}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: '#6B4C2A' }}>
                      {item.size} · {item.grind}
                      {item.subscribe && ' · Monthly'}
                    </p>
                    {item.subscribe && (
                      <p className="text-[10px] mt-0.5" style={{ color: '#3D5A3E' }}>15% off applied</p>
                    )}

                    <div className="flex items-center justify-between mt-2">
                      {/* Qty */}
                      <div className="flex items-center gap-2 border" style={{ borderColor: '#E8E0D4' }}>
                        <button
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-sm hover:bg-stone-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="text-sm w-4 text-center" style={{ color: '#1C1008' }}>{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-sm hover:bg-stone-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <p className="text-sm font-semibold" style={{ color: '#1C1008' }}>
                        ${((item.subscribe ? item.price * 0.85 : item.price) * item.qty).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="self-start p-1 hover:opacity-60 transition-opacity"
                    aria-label={`Remove ${item.region} from cart`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B4C2A" strokeWidth="1.5" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t" style={{ borderColor: '#E8E0D4' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm" style={{ color: '#6B4C2A' }}>Subtotal</span>
              <span className="font-semibold text-lg" style={{ fontFamily: 'var(--font-playfair)', color: '#1C1008' }}>
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              className="w-full py-4 text-sm font-bold tracking-[0.12em] uppercase transition-opacity hover:opacity-90 mb-3"
              style={{ backgroundColor: '#1C1008', color: '#F5F0E8' }}
              onClick={() => alert('Stripe checkout — ready to activate at launch.')}
            >
              Checkout
            </button>

            <p className="text-center text-[11px]" style={{ color: '#6B4C2A', opacity: 0.8 }}>
              Stripe integration ready to activate · Free shipping on subscriptions
            </p>
          </div>
        )}
      </aside>
    </>
  )
}
