import { Bodoni_Moda, Manrope, Bebas_Neue, Oswald } from 'next/font/google'
import { CartProvider } from '@/context/CartContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import './globals.css'

// High-end editorial serif (replaces Playfair)
const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  // Bodoni Moda is a variable font that supports weights 400-900 and italic/normal
  style: ['normal', 'italic'],
})

// Premium architectural sans-serif (replaces Inter/DM Sans)
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  // Manrope is a variable font supporting 200-800
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: '400',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata = {
  title: 'Concepcion Coffee — Guatemalan Specialty Coffee Since 1983',
  description:
    'Small family farms across the highlands of Guatemala. No pesticides. No GMOs. Dark roasted specialty coffee grown at altitude since 1983.',
  openGraph: {
    title: 'Concepcion Coffee',
    description: 'Guatemalan specialty coffee, grown at altitude since 1983.',
    siteName: 'Concepcion Coffee',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${manrope.variable} ${bebasNeue.variable} ${oswald.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F0E8' }}>
        <CartProvider>
          <Header />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
