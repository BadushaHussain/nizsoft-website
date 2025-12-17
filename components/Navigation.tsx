'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled
      ? 'bg-dark/95 shadow-lg backdrop-blur-xl'
      : 'bg-dark/80 backdrop-blur-xl'
      } border-b border-white/5`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform group">
          <Image
            src="/nizsoft-logo.png"
            alt="Nizsoft Logo"
            width={180}
            height={50}
            className="h-8 lg:h-10 w-auto opacity-90 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(0,102,255,0.3)] transition-all"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-10 items-center">
          <li><Link href="/" className="text-light hover:text-white transition-colors font-medium">Home</Link></li>
          <li className="relative group">
            <span className="text-light hover:text-white transition-colors font-medium cursor-pointer">Platform</span>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-dark-light/98 backdrop-blur-xl border border-white/10 rounded-xl p-4 min-w-[220px] shadow-2xl z-[110]">
              <Link href="/platform" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Overview</Link>
              <Link href="/operations" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Operations Hub</Link>
              <Link href="/analytics" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Analytics & AI</Link>
              <Link href="/migration" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Migration</Link>
              <Link href="/security" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Security</Link>
              <Link href="/deployment" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Deployment</Link>
            </div>
          </li>
          <li className="relative group">
            <span className="text-light hover:text-white transition-colors font-medium cursor-pointer">Solutions</span>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-dark-light/98 backdrop-blur-xl border border-white/10 rounded-xl p-4 min-w-[220px] shadow-2xl z-[110]">
              <Link href="/solutions" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">All Solutions</Link>
              <Link href="/policy" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Policy Admin</Link>
              <Link href="/claims" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Claims</Link>
              <Link href="/billing" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Billing</Link>
              <Link href="/underwriting" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Underwriting</Link>
              <Link href="/broker-portal" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Broker Portal</Link>
            </div>
          </li>
          <li className="relative group">
            <span className="text-light hover:text-white transition-colors font-medium cursor-pointer">Technology</span>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-dark-light/98 backdrop-blur-xl border border-white/10 rounded-xl p-4 min-w-[220px] shadow-2xl z-[110]">
              <Link href="/architecture" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Architecture</Link>
              <Link href="/integrations" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Integrations</Link>
              <Link href="/ai-automation" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">AI & Automation</Link>
              <Link href="/cloud" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Cloud</Link>
            </div>
          </li>
          <li><Link href="/industries" className="text-light hover:text-white transition-colors font-medium">Industries</Link></li>
          <li><Link href="/company" className="text-light hover:text-white transition-colors font-medium">Company</Link></li>
        </ul>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact" className="bg-gradient-to-r from-primary to-secondary text-white px-7 py-3 rounded-xl font-semibold text-base hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 transition-all">
            Book Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-light transition-all"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-light transition-all"
          />
          <motion.span
            animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-light transition-all"
          />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-dark-light/98 backdrop-blur-xl border-l border-white/10 z-50 overflow-y-auto lg:hidden"
            >
              <div className="p-6 pt-20">
                {/* Mobile Navigation Links */}
                <nav className="space-y-2">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-light hover:text-white hover:bg-primary/10 rounded-lg transition-all font-medium"
                  >
                    Home
                  </Link>

                  {/* Platform Dropdown */}
                  <div>
                    <button
                      onClick={() => toggleDropdown('platform')}
                      className="w-full flex justify-between items-center px-4 py-3 text-light hover:text-white hover:bg-primary/10 rounded-lg transition-all font-medium"
                    >
                      Platform
                      <motion.span
                        animate={{ rotate: openDropdown === 'platform' ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm"
                      >
                        ▼
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {openDropdown === 'platform' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pl-4"
                        >
                          <Link href="/platform" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray hover:text-white transition-all">Overview</Link>
                          <Link href="/operations" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray hover:text-white transition-all">Operations Hub</Link>
                          <Link href="/analytics" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray hover:text-white transition-all">Analytics & AI</Link>
                          <Link href="/migration" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray hover:text-white transition-all">Migration</Link>
                          <Link href="/security" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray hover:text-white transition-all">Security</Link>
                          <Link href="/deployment" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray hover:text-white transition-all">Deployment</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Solutions Dropdown */}
                  <div>
                    <button
                      onClick={() => toggleDropdown('solutions')}
                      className="w-full flex justify-between items-center px-4 py-3 text-light hover:text-white hover:bg-primary/10 rounded-lg transition-all font-medium"
                    >
                      Solutions
                      <motion.span
                        animate={{ rotate: openDropdown === 'solutions' ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm"
                      >
                        ▼
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {openDropdown === 'solutions' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pl-4"
                        >
                          <Link href="/solutions" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray hover:text-white transition-all">All Solutions</Link>
                          <Link href="/policy" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray hover:text-white transition-all">Policy Admin</Link>
                          <Link href="/claims" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray hover:text-white transition-all">Claims</Link>
                          <Link href="/billing" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray hover:text-white transition-all">Billing</Link>
                          <Link href="/underwriting" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray hover:text-white transition-all">Underwriting</Link>
                          <Link href="/broker-portal" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray hover:text-white transition-all">Broker Portal</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Technology Dropdown */}
                  <div>
                    <button
                      onClick={() => toggleDropdown('technology')}
                      className="w-full flex justify-between items-center px-4 py-3 text-light hover:text-white hover:bg-primary/10 rounded-lg transition-all font-medium"
                    >
                      Technology
                      <motion.span
                        animate={{ rotate: openDropdown === 'technology' ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm"
                      >
                        ▼
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {openDropdown === 'technology' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pl-4"
                        >
                          <Link href="/architecture" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray hover:text-white transition-all">Architecture</Link>
                          <Link href="/integrations" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray hover:text-white transition-all">Integrations</Link>
                          <Link href="/ai-automation" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray hover:text-white transition-all">AI & Automation</Link>
                          <Link href="/cloud" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray hover:text-white transition-all">Cloud</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/industries"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-light hover:text-white hover:bg-primary/10 rounded-lg transition-all font-medium"
                  >
                    Industries
                  </Link>

                  <Link
                    href="/company"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-light hover:text-white hover:bg-primary/10 rounded-lg transition-all font-medium"
                  >
                    Company
                  </Link>
                </nav>

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mt-6 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold text-center hover:shadow-xl hover:shadow-primary/40 transition-all"
                >
                  Book Demo
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
