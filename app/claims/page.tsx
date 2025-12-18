import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'
import Stats from '@/components/Stats'
import Link from 'next/link'
import { HiXCircle, HiCheckCircle, HiDevicePhoneMobile, HiCpuChip, HiMagnifyingGlass, HiBanknotes } from 'react-icons/hi2'

export default function ClaimsPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Solution"
          title="Claims Management System"
          description="Fast, automated claims workflows from FNOL to settlement"
        />

        <div className="space-y-6 lg:space-y-8 mb-12">
          <FeatureItem
            icon={<HiXCircle className="text-error" />}
            title="The Challenge"
            description="Manual claims processing is slow, expensive, and error-prone. Poor visibility into claims status frustrates customers. Lack of fraud detection leads to leakage. Adjuster productivity limited by outdated tools."
          />

          <FeatureItem
            icon={<HiCheckCircle className="text-success" />}
            title="NIZSOFT Solution"
            description="Intelligent claims platform with automated workflows, AI-powered adjudication, mobile-first FNOL, fraud detection, and real-time stakeholder communication. Reduce claims cycle time by 40%+ while improving customer satisfaction."
          />
        </div>

        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon={<HiDevicePhoneMobile className="text-primary" />}
            title="Mobile FNOL"
            description="Customers file claims via mobile app with photo upload, GPS location, and voice notes. Automated data extraction using AI reduces manual data entry."
          />
          <FeatureItem
            icon={<HiCpuChip className="text-secondary" />}
            title="Intelligent Routing & Assignment"
            description="ML-based claim triage routes to appropriate adjusters based on expertise, workload, and location. Automated assignment with SLA tracking."
          />
          <FeatureItem
            icon={<HiMagnifyingGlass className="text-warning" />}
            title="Fraud Detection"
            description="Real-time fraud scoring using predictive models. Pattern recognition across historical claims. Integration with fraud databases and watchlists."
          />
          <FeatureItem
            icon={<HiBanknotes className="text-success" />}
            title="Automated Settlement"
            description="Rules-based auto-adjudication for simple claims. Integrated payment processing with multiple methods. Automated reserves and recovery management."
          />
        </div>

        <Stats items={[
          { value: '40%', label: 'Faster Claims Processing' },
          { value: '60%', label: 'Auto-Adjudicated Claims' },
          { value: '85%', label: 'Customer Satisfaction' },
        ]} />

        <div className="text-center mt-16">
          <Link href="/contact" className="bg-gradient-to-r from-primary to-secondary text-white px-7 lg:px-9 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all inline-block">
            See Claims Demo
          </Link>
        </div>
      </section>
    </div>
  )
}
