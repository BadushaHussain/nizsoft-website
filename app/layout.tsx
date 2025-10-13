import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NIZSOFT - Modern Insurance Platform for the Digital Era',
  description: 'Complete end-to-end insurance platform combining startup agility with enterprise reliability',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="mt-[70px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}