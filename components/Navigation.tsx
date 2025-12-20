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
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled
        ? 'bg-dark/95 shadow-lg backdrop-blur-xl'
        : 'bg-dark/80 backdrop-blur-xl'
        } border-b border-white/5`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform group">
            <Image
              src="/nizsoft-logo.png"
              alt="Nizsoft Logo"
              width={160}
              height={45}
              className="h-9 lg:h-11 w-auto opacity-90 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(0,102,255,0.3)] transition-all"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-10 items-center">
            <li><Link href="/" className="text-light hover:text-white transition-colors font-medium">Home</Link></li>
            <li className="relative group h-full flex items-center">
              <span className="text-light hover:text-white transition-colors font-medium cursor-pointer">Platform</span>
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-[200]">
                <div className="bg-dark-light/98 backdrop-blur-xl border border-white/10 rounded-xl p-4 min-w-[220px] shadow-2xl">
                  <Link href="/platform" className="block px-6 py-3 text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/10 rounded-lg transition-all">Overview</Link>
                  <Link href="/operations" className="block px-6 py-3 text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/10 rounded-lg transition-all">Operations Hub</Link>
                  <Link href="/analytics" className="block px-6 py-3 text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/10 rounded-lg transition-all">Analytics & AI</Link>
                  <Link href="/migration" className="block px-6 py-3 text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/10 rounded-lg transition-all">Migration</Link>
                  <Link href="/security" className="block px-6 py-3 text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/10 rounded-lg transition-all">Security</Link>
                  <Link href="/deployment" className="block px-6 py-3 text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/10 rounded-lg transition-all">Deployment</Link>
                </div>
              </div>
            </li>
            <li className="relative group h-full flex items-center">
              <span className="text-light hover:text-white transition-colors font-medium cursor-pointer">Solutions</span>
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-[200]">
                <div className="bg-dark-light/98 backdrop-blur-xl border border-white/10 rounded-xl p-4 min-w-[220px] shadow-2xl">
                  <Link href="/solutions" className="block px-6 py-3 text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/10 rounded-lg transition-all">All Solutions</Link>
                  <Link href="/policy" className="block px-6 py-3 text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/10 rounded-lg transition-all">Policy Admin</Link>
                  <Link href="/claims" className="block px-6 py-3 text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/10 rounded-lg transition-all">Claims</Link>
                  <Link href="/billing" className="block px-6 py-3 text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/10 rounded-lg transition-all">Billing</Link>
                  <Link href="/underwriting" className="block px-6 py-3 text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/10 rounded-lg transition-all">Underwriting</Link>
                  <Link href="/broker-portal" className="block px-6 py-3 text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/10 rounded-lg transition-all">Broker Portal</Link>
                </div>
              </div>
            </li>
            <li className="relative group h-full flex items-center">
              <span className="text-light hover:text-white transition-colors font-medium cursor-pointer">Technology</span>
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-[200]">
                <div className="bg-dark-light/98 backdrop-blur-xl border border-white/10 rounded-xl p-4 min-w-[220px] shadow-2xl">
                  <Link href="/architecture" className="block px-6 py-3 text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/10 rounded-lg transition-all">Architecture</Link>
                  <Link href="/integrations" className="block px-6 py-3 text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/10 rounded-lg transition-all">Integrations</Link>
                  <Link href="/ai-automation" className="block px-6 py-3 text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/10 rounded-lg transition-all">AI & Automation</Link>
                  <Link href="/cloud" className="block px-6 py-3 text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/10 rounded-lg transition-all">Cloud</Link>
                </div>
              </div>
            </li>
            <li><Link href="/industries" className="text-light hover:text-white transition-colors font-medium">Industries</Link></li>
            <li><Link href="/company" className="text-light hover:text-white transition-colors font-medium">Company</Link></li>
          </ul>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/login"
              className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors font-medium px-4 py-2"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            onTouchEnd={(e) => {
              e.preventDefault()
              setMobileMenuOpen(!mobileMenuOpen)
            }}
            className="lg:hidden relative w-12 h-12 flex flex-col justify-center items-center gap-1.5 z-[110] touch-manipulation bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all shadow-lg"
            aria-label="Toggle menu"
            type="button"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gray-900 dark:bg-white shadow-sm transition-all pointer-events-none"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-gray-900 dark:bg-white shadow-sm transition-all pointer-events-none"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gray-900 dark:bg-white shadow-sm transition-all pointer-events-none"
            />
          </button>
        </div>

      </nav>

      {/* Mobile Menu Drawer - Outside nav to avoid containing block issue */}
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101] lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-gradient-to-br from-white via-white to-gray-50 dark:from-dark-light dark:via-dark-light dark:to-dark backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)] dark:shadow-[0_0_50px_rgba(0,102,255,0.2)] z-[102] overflow-y-auto lg:hidden"
            >
              {/* Header with Logo */}
              <div className="sticky top-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/5 dark:via-secondary/5 dark:to-accent/5 backdrop-blur-xl shadow-sm p-6 z-10 animate-gradient-shift">
                <div className="flex items-center justify-between">
                  <Image
                    src="/nizsoft-logo.png"
                    alt="Nizsoft Logo"
                    width={140}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
              </div>

              <div className="p-6">
                {/* Mobile Navigation Links */}
                <nav className="space-y-1">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center gap-3 px-4 py-3.5 text-gray-800 dark:text-light hover:text-primary dark:hover:text-white bg-gray-50 dark:bg-white/5 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 rounded-xl transition-all font-medium border border-transparent hover:border-primary/20 hover:shadow-md hover:scale-[1.02] relative overflow-hidden"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <span>Home</span>
                  </Link>

                  {/* Platform Dropdown */}
                  <div>
                    <button
                      onClick={() => toggleDropdown('platform')}
                      className="group w-full flex items-center justify-between gap-3 px-4 py-3.5 text-gray-800 dark:text-light hover:text-primary dark:hover:text-white bg-gray-50 dark:bg-white/5 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 rounded-xl transition-all font-medium border border-transparent hover:border-primary/20 hover:shadow-md hover:scale-[1.02] relative overflow-hidden"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <span>Platform</span>
                      </div>
                      <motion.span
                        animate={{ rotate: openDropdown === 'platform' ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-gray-400"
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
                          className="overflow-hidden mt-1 ml-11 space-y-1"
                        >
                          <Link href="/platform" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/5 rounded-lg transition-all">Overview</Link>
                          <Link href="/operations" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/5 rounded-lg transition-all">Operations Hub</Link>
                          <Link href="/analytics" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/5 rounded-lg transition-all">Analytics & AI</Link>
                          <Link href="/migration" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/5 rounded-lg transition-all">Migration</Link>
                          <Link href="/security" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/5 rounded-lg transition-all">Security</Link>
                          <Link href="/deployment" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/5 rounded-lg transition-all">Deployment</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Solutions Dropdown */}
                  <div>
                    <button
                      onClick={() => toggleDropdown('solutions')}
                      className="group w-full flex items-center justify-between gap-3 px-4 py-3.5 text-gray-800 dark:text-light hover:text-primary dark:hover:text-white bg-gray-50 dark:bg-white/5 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 rounded-xl transition-all font-medium border border-transparent hover:border-primary/20 hover:shadow-md hover:scale-[1.02] relative overflow-hidden"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <span>Solutions</span>
                      </div>
                      <motion.span
                        animate={{ rotate: openDropdown === 'solutions' ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-gray-400"
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
                          className="overflow-hidden mt-1 ml-11 space-y-1"
                        >
                          <Link href="/solutions" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/5 rounded-lg transition-all">All Solutions</Link>
                          <Link href="/policy" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/5 rounded-lg transition-all">Policy Admin</Link>
                          <Link href="/claims" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/5 rounded-lg transition-all">Claims</Link>
                          <Link href="/billing" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/5 rounded-lg transition-all">Billing</Link>
                          <Link href="/underwriting" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/5 rounded-lg transition-all">Underwriting</Link>
                          <Link href="/broker-portal" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/5 rounded-lg transition-all">Broker Portal</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Technology Dropdown */}
                  <div>
                    <button
                      onClick={() => toggleDropdown('technology')}
                      className="group w-full flex items-center justify-between gap-3 px-4 py-3.5 text-gray-800 dark:text-light hover:text-primary dark:hover:text-white bg-gray-50 dark:bg-white/5 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 rounded-xl transition-all font-medium border border-transparent hover:border-primary/20 hover:shadow-md hover:scale-[1.02] relative overflow-hidden"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                        </div>
                        <span>Technology</span>
                      </div>
                      <motion.span
                        animate={{ rotate: openDropdown === 'technology' ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-gray-400"
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
                          className="overflow-hidden mt-1 ml-11 space-y-1"
                        >
                          <Link href="/architecture" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/5 rounded-lg transition-all">Architecture</Link>
                          <Link href="/integrations" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/5 rounded-lg transition-all">Integrations</Link>
                          <Link href="/ai-automation" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/5 rounded-lg transition-all">AI & Automation</Link>
                          <Link href="/cloud" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray hover:text-primary dark:hover:text-white hover:bg-primary/5 rounded-lg transition-all">Cloud</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/industries"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center gap-3 px-4 py-3.5 text-gray-800 dark:text-light hover:text-primary dark:hover:text-white bg-gray-50 dark:bg-white/5 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 rounded-xl transition-all font-medium border border-transparent hover:border-primary/20 hover:shadow-md hover:scale-[1.02] relative overflow-hidden"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span>Industries</span>
                  </Link>

                  <Link
                    href="/company"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center gap-3 px-4 py-3.5 text-gray-800 dark:text-light hover:text-primary dark:hover:text-white bg-gray-50 dark:bg-white/5 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 rounded-xl transition-all font-medium border border-transparent hover:border-primary/20 hover:shadow-md hover:scale-[1.02] relative overflow-hidden"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Company</span>
                  </Link>
                </nav>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent"></div>

                {/* Mobile Theme Toggle */}
                <div className="px-4 py-4 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-white/5 dark:to-white/3 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-light font-medium">Theme</span>
                    </div>
                    <ThemeToggle />
                  </div>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-6 space-y-3">
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-center gap-2 bg-white dark:bg-white/10 text-gray-800 dark:text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-primary/5 transition-all shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <span>Login</span>
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-secondary to-accent text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/40 transition-all relative overflow-hidden animate-glow-pulse"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <svg className="w-5 h-5 relative z-10 animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="relative z-10">Book Demo</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
