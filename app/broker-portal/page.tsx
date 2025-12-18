import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'
import Link from 'next/link'
import { HiClipboardDocumentList, HiCheckCircle, HiCurrencyDollar, HiChartBar } from 'react-icons/hi2'

export default function BrokerPortalPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Solution"
          title="Broker & Agent Portal"
          description="Self-service platform empowering your distribution network"
        />

        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon={<HiClipboardDocumentList className="text-primary" />}
            title="Quote Generation"
            description="Brokers generate instant quotes with real-time rating. Compare multiple products and coverage options. Save and share quotes with customers."
          />
          <FeatureItem
            icon={<HiCheckCircle className="text-success" />}
            title="Policy Binding"
            description="Convert quotes to policies with full authority within approved limits. Automated underwriting and document generation. Real-time policy issuance."
          />
          <FeatureItem
            icon={<HiCurrencyDollar className="text-warning" />}
            title="Commission Tracking"
            description="Real-time visibility into earned commissions. Downloadable statements and reports. Automated payment processing with direct deposit."
          />
          <FeatureItem
            icon={<HiChartBar className="text-secondary" />}
            title="Performance Analytics"
            description="Dashboards showing production metrics, conversion rates, and renewal performance. Leaderboards and gamification to drive productivity."
          />
        </div>

        <div className="text-center mt-16">
          <Link href="/contact" className="bg-gradient-to-r from-primary to-secondary text-white px-7 lg:px-9 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all inline-block">
            See Broker Portal Demo
          </Link>
        </div>
      </section>
    </div>
  )
}