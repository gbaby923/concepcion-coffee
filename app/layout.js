import { Fraunces, DM_Sans, Bebas_Neue, Cormorant_Garamond, Oswald } from 'next/font/google'
import { CartProvider } from '@/context/CartContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: '400',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
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
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} ${bebasNeue.variable} ${cormorant.variable} ${oswald.variable}`}>
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
