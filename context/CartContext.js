'use client'

import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product) => {
    setItems(prev => {
      const key = `${product.region}-${product.size}-${product.grind}-${product.subscribe}`
      const existing = prev.find(i => i.key === key)
      if (existing) {
        return prev.map(i => i.key === key ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...product, key, qty: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    setItems(prev => prev.filter(i => i.key !== key))
  }, [])

  const updateQty = useCallback((key, qty) => {
    if (qty < 1) {
      setItems(prev => prev.filter(i => i.key !== key))
    } else {
      setItems(prev => prev.map(i => i.key === key ? { ...i, qty } : i))
    }
  }, [])

  const total = items.reduce((sum, i) => {
    const price = i.subscribe ? i.price * 0.85 : i.price
    return sum + price * i.qty
  }, 0)

  const count = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider value={{ items, isOpen, setIsOpen, addItem, removeItem, updateQty, total, count }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
