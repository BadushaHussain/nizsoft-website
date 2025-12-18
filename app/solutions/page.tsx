import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import { HiClipboardDocumentList, HiBolt, HiCreditCard, HiViewfinderCircle, HiUsers, HiUserGroup, HiChartBar, HiArrowPath } from 'react-icons/hi2'

export default function SolutionsPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Solutions"
          title="Comprehensive Insurance Solutions"
          description="Purpose-built for every aspect of insurance operations"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <Card
            icon={<HiClipboardDocumentList className="text-primary" />}
            title="Policy Administration"
            description="Complete lifecycle management with product configuration, rating engines, underwriting workflows, and document automation."
            href="/policy"
          />
          <Card
            icon={<HiBolt className="text-warning" />}
            title="Claims Management"
            description="Automated FNOL, intelligent routing, adjudication, fraud detection, and settlement processing with mobile support."
            href="/claims"
          />
          <Card
            icon={<HiCreditCard className="text-secondary" />}
            title="Billing Automation"
            description="Multi-currency billing, flexible payment plans, automated collections, commission tracking, and financial reconciliation."
            href="/billing"
          />
          <Card
            icon={<HiViewfinderCircle className="text-accent" />}
            title="Underwriting"
            description="AI-powered risk assessment, automated rules engine, third-party data integration, and approval workflows."
            href="/underwriting"
          />
          <Card
            icon={<HiUsers className="text-info" />}
            title="Customer Engagement"
            description="Self-service portals, mobile apps, omnichannel communication, policy management, and AI chatbots."
          />
          <Card
            icon={<HiUserGroup className="text-success" />}
            title="Broker Portal"
            description="Intermediary platform with quote generation, policy binding, commission tracking, and performance analytics."
            href="/broker-portal"
          />
          <Card
            icon={<HiChartBar className="text-primary" />}
            title="Analytics & BI"
            description="Real-time dashboards, predictive models, loss analysis, portfolio optimization, and regulatory reporting."
          />
          <Card
            icon={<HiArrowPath className="text-secondary" />}
            title="Reinsurance"
            description="Treaty and facultative operations, bordereaux processing, loss development, and automated accounting."
          />
        </div>
      </section>
    </div>
  )
}