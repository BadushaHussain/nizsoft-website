import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'
import Stats from '@/components/Stats'
import Link from 'next/link'
import { HiXCircle, HiCheckCircle, HiCog, HiCurrencyDollar, HiDocumentText, HiArrowPath } from 'react-icons/hi2'

export default function PolicyPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Solution"
          title="Policy Administration System"
          description="Centralized policy lifecycle management from quote to renewal"
        />

        <div className="space-y-6 lg:space-y-8 mb-12">
          <FeatureItem
            icon={<HiXCircle className="text-error" />}
            title="The Challenge"
            description="Legacy policy administration systems are rigid, require extensive customization for new products, and lack integration capabilities. Manual processes lead to errors, slow turnaround times, and poor customer experience."
          />

          <FeatureItem
            icon={<HiCheckCircle className="text-success" />}
            title="NIZSOFT Solution"
            description="Modern, flexible policy administration with no-code product configuration, automated workflows, and real-time integration with rating, underwriting, and billing systems. Launch new products in days, not months."
          />
        </div>

        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon={<HiCog className="text-primary" />}
            title="Flexible Product Configuration"
            description="Define coverages, benefits, exclusions, and rules without coding. Support for simple to complex multi-peril products across all insurance lines."
          />
          <FeatureItem
            icon={<HiCurrencyDollar className="text-warning" />}
            title="Powerful Rating Engine"
            description="Configure rating tables, formulas, and risk factors. Support for complex algorithms with real-time premium calculation and instant quotes."
          />
          <FeatureItem
            icon={<HiDocumentText className="text-info" />}
            title="Document Automation"
            description="Automated generation of policy documents, endorsements, certificates, and renewal notices with template management and e-signature integration."
          />
          <FeatureItem
            icon={<HiArrowPath className="text-secondary" />}
            title="Policy Servicing"
            description="Handle endorsements, cancellations, reinstatements, and renewals with automated workflows. Maintain complete audit trail of all changes."
          />
        </div>

        <Stats items={[
          { value: '70%', label: 'Faster Quote Generation' },
          { value: '5 Days', label: 'New Product Launch Time' },
          { value: '95%', label: 'Straight-Through Processing' },
        ]} />

        <div className="text-center mt-16">
          <Link href="/contact" className="bg-gradient-to-r from-primary to-secondary text-white px-7 lg:px-9 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all inline-block">
            See Policy Admin Demo
          </Link>
        </div>
      </section>
    </div>
  )
}
