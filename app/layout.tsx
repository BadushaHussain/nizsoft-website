import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ReadingProgress from '@/components/ReadingProgress'
import StickyCTA from '@/components/StickyCTA'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Toaster } from 'react-hot-toast'
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <ReadingProgress />
          <Navigation />
          <main className="mt-[80px] md:mt-[70px]">{children}</main>
          <Footer />
          <StickyCTA />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: '#1a1f3a',
                color: '#e6f1ff',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '16px',
              },
              success: {
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#1a1f3a',
                },
                duration: 4000,
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#1a1f3a',
                },
                duration: 5000,
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}