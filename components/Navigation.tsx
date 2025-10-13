'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark/95 shadow-lg backdrop-blur-xl' 
        : 'bg-dark/80 backdrop-blur-xl'
    } border-b border-white/5`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl lg:text-3xl font-extrabold tracking-tight gradient-text hover:scale-105 transition-transform">
          NIZSOFT
        </Link>
        
        <ul className="hidden lg:flex gap-10 items-center">
          <li><Link href="/" className="text-light hover:text-white transition-colors font-medium">Home</Link></li>
          <li className="relative group">
            <span className="text-light hover:text-white transition-colors font-medium cursor-pointer">Platform</span>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-dark-light/98 backdrop-blur-xl border border-white/10 rounded-xl p-4 min-w-[220px] shadow-2xl">
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
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-dark-light/98 backdrop-blur-xl border border-white/10 rounded-xl p-4 min-w-[220px] shadow-2xl">
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
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-dark-light/98 backdrop-blur-xl border border-white/10 rounded-xl p-4 min-w-[220px] shadow-2xl">
              <Link href="/architecture" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Architecture</Link>
              <Link href="/integrations" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Integrations</Link>
              <Link href="/ai-automation" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">AI & Automation</Link>
              <Link href="/cloud" className="block px-6 py-3 text-gray hover:text-white hover:bg-primary/10 rounded-lg transition-all">Cloud</Link>
            </div>
          </li>
          <li><Link href="/industries" className="text-light hover:text-white transition-colors font-medium">Industries</Link></li>
          <li><Link href="/company" className="text-light hover:text-white transition-colors font-medium">Company</Link></li>
        </ul>
        
        <Link href="/contact" className="bg-gradient-to-r from-primary to-secondary text-white px-5 lg:px-7 py-2.5 lg:py-3 rounded-xl font-semibold text-sm lg:text-base hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 transition-all">
          Book Demo
        </Link>
      </div>
    </nav>
  )
}