import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-light mt-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 pb-40 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="text-3xl font-extrabold gradient-text mb-4">NIZSOFT</div>
            <p className="text-gray leading-relaxed mb-8">
              Production-ready insurance platform combining startup innovation with enterprise reliability. Built in Abu Dhabi for global insurers.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Platform</h4>
            <ul className="space-y-3">
              <li><Link href="/platform" className="text-gray hover:text-secondary transition-colors">Overview</Link></li>
              <li><Link href="/operations" className="text-gray hover:text-secondary transition-colors">Operations Hub</Link></li>
              <li><Link href="/analytics" className="text-gray hover:text-secondary transition-colors">Analytics & AI</Link></li>
              <li><Link href="/migration" className="text-gray hover:text-secondary transition-colors">Migration</Link></li>
              <li><Link href="/deployment" className="text-gray hover:text-secondary transition-colors">Deployment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/policy" className="text-gray hover:text-secondary transition-colors">Policy Admin</Link></li>
              <li><Link href="/claims" className="text-gray hover:text-secondary transition-colors">Claims</Link></li>
              <li><Link href="/billing" className="text-gray hover:text-secondary transition-colors">Billing</Link></li>
              <li><Link href="/underwriting" className="text-gray hover:text-secondary transition-colors">Underwriting</Link></li>
              <li><Link href="/broker-portal" className="text-gray hover:text-secondary transition-colors">Broker Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/company" className="text-gray hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray hover:text-secondary transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray hover:text-secondary transition-colors">Partners</Link></li>
              <li><Link href="/contact" className="text-gray hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center text-gray text-xs">
          <p>&copy; 2025 NIZSOFT Technology LLC. All rights reserved. | <Link href="/privacy" className="hover:text-white">Privacy</Link> | <Link href="/terms" className="hover:text-white">Terms</Link> | <Link href="/security" className="hover:text-white">Security</Link> | <Link href="/sla" className="hover:text-white">SLA</Link></p>
        </div>
      </div>
    </footer>
  )
}
