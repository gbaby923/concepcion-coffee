import { Playfair_Display, Inter } from 'next/font/google'
import { CartProvider } from '@/context/CartContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
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
