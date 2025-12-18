import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import { HiHeart, HiBuildingOffice2, HiTruck, HiBuildingOffice, HiArrowPath, HiUserGroup } from 'react-icons/hi2'

export default function IndustriesPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Industries"
          title="Tailored for Every Insurance Vertical"
          description="Industry-specific configurations and regulatory compliance"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <Card
            icon={<HiHeart className="text-error" />}
            title="Life Insurance"
            description="Term, whole life, universal life. Medical underwriting workflows, beneficiary management, policy loans, and compliance with life insurance regulations."
          />
          <Card
            icon={<HiBuildingOffice2 className="text-info" />}
            title="Health Insurance"
            description="Individual and group health plans. Provider network management, pre-auth workflows, HL7/FHIR integration, and HIPAA compliance."
          />
          <Card
            icon={<HiTruck className="text-warning" />}
            title="Motor Insurance"
            description="Auto and fleet coverage. Telematics integration, no-claims bonus, geographic rating, and repair network coordination."
          />
          <Card
            icon={<HiBuildingOffice className="text-primary" />}
            title="Property & Casualty"
            description="Commercial and personal P&C lines. Catastrophe modeling, reinsurance management, multi-peril policies, and exposure analysis."
          />
          <Card
            icon={<HiArrowPath className="text-secondary" />}
            title="Reinsurance"
            description="Treaty and facultative operations. Bordereaux processing, loss development, cedant portals, and automated accounting."
          />
          <Card
            icon={<HiUserGroup className="text-accent" />}
            title="Brokers & Intermediaries"
            description="Multi-carrier platform for brokers. Comparative rating, policy placement, commission management, and client portals."
          />
        </div>
      </section>
    </div>
  )
}