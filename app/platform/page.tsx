import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'
import Link from 'next/link'
import Image from 'next/image'
import { HiCubeTransparent, HiCloud, HiLink, HiShieldCheck, HiBolt, HiArrowPath } from 'react-icons/hi2'

export default function PlatformPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Platform"
          title="Enterprise-Grade Insurance Platform"
          description="Complete suite of modules built on modern microservices architecture"
        />

        {/* Platform Screenshots Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">Platform Screens</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Desktop Login Screen */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-4 overflow-hidden hover:border-primary/30 transition-all">
                <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-white" style={{ height: '400px' }}>
                  <Image
                    src="/login-desktop.png"
                    alt="Desktop Login Screen"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-white">Desktop Login</h3>
                  <p className="text-gray text-sm mt-1">Elegant login interface with animated graphics</p>
                </div>
              </div>
            </div>

            {/* Mobile Login Screen */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-4 overflow-hidden hover:border-secondary/30 transition-all">
                <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-white mx-auto" style={{ height: '400px', maxWidth: '200px' }}>
                  <Image
                    src="/login-mobile.png"
                    alt="Mobile Login Screen"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-white">Mobile Login</h3>
                  <p className="text-gray text-sm mt-1">Responsive mobile-first design</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon={<HiCubeTransparent className="text-primary" />}
            title="Modern Microservices Architecture"
            description="Each module operates independently with its own database, enabling zero-downtime deployments, independent scaling, and technology flexibility. Built on containerized infrastructure with Kubernetes orchestration."
            link="/architecture"
          />
          <FeatureItem
            icon={<HiCloud className="text-secondary" />}
            title="Multi-Cloud Deployment"
            description="Deploy on AWS, Azure, or Google Cloud Platform. Cloud-agnostic design with automated infrastructure provisioning, load balancing, and geographic redundancy across multiple regions."
            link="/cloud"
          />
          <FeatureItem
            icon={<HiLink className="text-accent" />}
            title="API-First Design"
            description="Comprehensive RESTful API layer with OpenAPI documentation. 150+ endpoints for complete programmatic access to all platform capabilities. Webhook support for event-driven integrations."
            link="/integrations"
          />
          <FeatureItem
            icon={<HiShieldCheck className="text-success" />}
            title="Enterprise Security & Compliance"
            description="End-to-end encryption, multi-factor authentication, role-based access control. SOC 2 Type II, ISO 27001, GDPR, and regional insurance regulatory compliance built-in."
            link="/security"
          />
          <FeatureItem
            icon={<HiBolt className="text-warning" />}
            title="High Performance & Scalability"
            description="Sub-100ms API response times, handles 10,000+ concurrent users. Auto-scaling infrastructure adapts to demand spikes. Real-time event processing with message queues."
            link="/performance"
          />
          <FeatureItem
            icon={<HiArrowPath className="text-info" />}
            title="Flexible Deployment Options"
            description="Cloud-hosted (SaaS), private cloud, hybrid, or on-premises deployment. Support for both single-tenant and multi-tenant architectures based on your requirements."
            link="/deployment"
          />
        </div>

        <div className="text-center mt-16">
          <Link href="/contact" className="group bg-gradient-to-r from-primary to-secondary text-white px-7 lg:px-9 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all inline-flex items-center gap-2">
            Schedule Platform Demo
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
