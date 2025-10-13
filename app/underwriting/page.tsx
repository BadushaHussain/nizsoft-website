import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'
import Link from 'next/link'

export default function UnderwritingPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Solution"
          title="AI-Powered Underwriting"
          description="Intelligent risk assessment and automated decision-making"
        />
        
        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon="🤖"
            title="Automated Underwriting Rules"
            description="Configure complex business rules without coding. Decision trees with multiple risk factors. Automatic approvals, declines, or referrals based on criteria."
          />
          <FeatureItem
            icon="🔗"
            title="Third-Party Data Integration"
            description="Real-time integration with credit bureaus, MVR reports, medical records, property data, and fraud databases. Enriched risk profiles for better decisions."
          />
          <FeatureItem
            icon="📊"
            title="Predictive Risk Scoring"
            description="Machine learning models trained on historical data. Risk scores updated in real-time as new information arrives. Continuous model improvement."
          />
          <FeatureItem
            icon="✓"
            title="Workflow & Task Management"
            description="Automated task assignment to underwriters. Collaborative review with document sharing. SLA tracking and escalation management."
          />
        </div>
        
        <div className="text-center mt-16">
          <Link href="/contact" className="bg-gradient-to-r from-primary to-secondary text-white px-7 lg:px-9 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all inline-block">
            See Underwriting Demo
          </Link>
        </div>
      </section>
    </div>
  )
}