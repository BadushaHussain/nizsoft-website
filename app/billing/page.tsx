import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'
import Link from 'next/link'

export default function BillingPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Solution"
          title="Billing & Collections Platform"
          description="Automated premium billing, collections, and accounting integration"
        />
        
        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon="📅"
            title="Flexible Billing Schedules"
            description="Support for annual, semi-annual, quarterly, monthly, and custom billing plans. Automated invoice generation and distribution via email, portal, or mail."
          />
          <FeatureItem
            icon="💳"
            title="Multi-Channel Payments"
            description="Accept payments via credit card, ACH, wire transfer, mobile wallets, and checks. PCI DSS compliant payment processing with tokenization."
          />
          <FeatureItem
            icon="🔄"
            title="Automated Collections"
            description="Intelligent dunning workflows with escalation rules. Automated reminders via email and SMS. Grace period management and lapse prevention."
          />
          <FeatureItem
            icon="💰"
            title="Commission Management"
            description="Automated commission calculations based on configurable rules. Split commissions for multiple agents. Statement generation and payment processing."
          />
        </div>
        
        <div className="text-center mt-16">
          <Link href="/contact" className="bg-gradient-to-r from-primary to-secondary text-white px-7 lg:px-9 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all inline-block">
            See Billing Demo
          </Link>
        </div>
      </section>
    </div>
  )
}