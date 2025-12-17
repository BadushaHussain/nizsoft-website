import Image from 'next/image'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import FeatureItem from '@/components/FeatureItem'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero
        title="Modern Insurance Software Built for Scale"
        subtitle="Complete end-to-end insurance platform combining startup agility with enterprise reliability. Cloud-native, API-first architecture with all modules needed for modern insurers—from policy to claims to analytics."
        secondaryCTA="Explore Platform"
        secondaryCTALink="/platform"
      />

      {/* Partners Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Trusted By"
          title="Insurance Leaders Choose NIZSOFT"
        />
        <div className="flex justify-around items-center flex-wrap gap-8 lg:gap-12 opacity-70 hover:opacity-100 transition-opacity">
          {[
            { name: 'ADNIC', logo: '/partners/adnic.png' },
            { name: 'Cigna', logo: '/partners/cigna.png' },
            { name: 'Daman', logo: '/partners/daman.png' },
            { name: 'GIG', logo: '/partners/gig.png' },
            { name: 'MetLife', logo: '/partners/metlife.png' },
          ].map((partner, i) => (
            <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                width={160}
                height={60}
                className="h-12 lg:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Platform Overview"
          title="Complete Insurance Operations Suite"
          description="Unified platform architecture built on modern microservices with everything you need"
        />

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-white/8 rounded-3xl p-8 lg:p-12 my-12">
          <div className="text-center text-xl lg:text-2xl font-bold text-white mb-8">🏗️ NIZSOFT Platform Architecture</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {[
              { icon: '📋', title: 'Policy', subtitle: 'Quote to Renewal' },
              { icon: '⚡', title: 'Claims', subtitle: 'FNOL to Settlement' },
              { icon: '💳', title: 'Billing', subtitle: 'Automated Collections' },
              { icon: '📊', title: 'Analytics', subtitle: 'Real-Time Insights' },
              { icon: '👥', title: 'Portals', subtitle: 'Customer & Broker' },
              { icon: '🔗', title: 'APIs', subtitle: 'RESTful Integration' },
            ].map((item, i) => (
              <div key={i} className="bg-white/3 border-2 border-primary/30 rounded-xl p-4 lg:p-6 text-center hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all">
                <div className="text-2xl lg:text-3xl mb-2">{item.icon}</div>
                <h4 className="text-white font-bold mb-1 text-sm lg:text-base">{item.title}</h4>
                <p className="text-gray text-xs lg:text-sm">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Key Capabilities"
          title="Built for Modern Insurance Operations"
        />
        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon="🤖"
            title="AI-Powered Automation"
            description="Intelligent document processing, predictive underwriting, fraud detection, and AI chatbots that reduce manual work by up to 60% while improving accuracy."
          />
          <FeatureItem
            icon="🔄"
            title="Seamless Data Migration"
            description="Proven migration methodology from legacy systems with zero data loss. Automated ETL pipelines, data validation, and parallel run support ensure smooth transition."
          />
          <FeatureItem
            icon="⏱️"
            title="24×7 Enterprise Support"
            description="Dedicated support team with SLA-backed response times. Proactive monitoring, regular health checks, and direct access to technical architects."
          />
          <FeatureItem
            icon="🔗"
            title="Open Integration Platform"
            description="RESTful APIs, webhooks, and pre-built connectors for CRMs, payment gateways, accounting systems, and third-party data providers. Build custom integrations in days."
          />
        </div>
      </section>

      {/* Solutions */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Solutions"
          title="Everything You Need in One Platform"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <Card icon="📋" title="Policy Administration" description="Complete lifecycle management from quote generation to renewals with flexible product configuration and automated workflows." href="/policy" />
          <Card icon="⚡" title="Claims Management" description="Fast, automated claims processing with AI-powered adjudication, fraud detection, and mobile FNOL capabilities." href="/claims" />
          <Card icon="💳" title="Billing Automation" description="Intelligent billing engine with multi-currency support, flexible payment plans, and automated reconciliation." href="/billing" />
          <Card icon="🎯" title="Smart Underwriting" description="AI-assisted risk assessment with automated rules engine and third-party data integration for faster decisions." href="/underwriting" />
          <Card icon="👥" title="Customer Portal" description="Self-service capabilities with mobile apps, policy management, claims filing, and omnichannel communication." href="/solutions" />
          <Card icon="🤝" title="Broker Portal" description="Empower intermediaries with quote generation, policy management, commission tracking, and performance analytics." href="/broker-portal" />
          <Card icon="📊" title="Analytics & Reporting" description="Real-time dashboards, predictive analytics, and customizable reports for data-driven decision making." href="/analytics" />
          <Card icon="🔄" title="Reinsurance Module" description="Treaty and facultative operations with bordereaux processing and automated reinsurance accounting." href="/solutions" />
        </div>
      </section>

      {/* Technology Stats */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Technology"
          title="Built on Modern Architecture"
        />
        <Stats items={[
          { value: '☁️', label: 'Cloud-Native\nMulti-cloud ready' },
          { value: '🔗', label: 'API-First\nRESTful design' },
          { value: '🏗️', label: 'Microservices\nScalable modules' },
          { value: '🔒', label: 'Secure\nEnterprise-grade' },
        ]} />
      </section>

      {/* Performance Stats */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <Stats items={[
          { value: 99.9, label: 'Platform Uptime', isNumeric: true, decimals: 1, suffix: '%' },
          { value: 100, label: 'API Response Time', isNumeric: true, prefix: '<', suffix: 'ms' },
          { value: '24×7', label: 'Support Available' },
          { value: 0, label: 'Data Migration Loss', isNumeric: true, suffix: '' },
        ]} />
      </section>
    </div>
  )
}
