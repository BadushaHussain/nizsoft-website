import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'

export default function OperationsPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Operations Hub"
          title="Core Insurance Operations"
          description="Policy, Claims, and Billing—the heart of your insurance business"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <Card
            icon="📋"
            title="Policy Administration"
            description="End-to-end policy lifecycle from quote to renewal. Multi-product support, complex rating engines, automated underwriting rules, document generation, and endorsement processing."
          />
          <Card
            icon="⚡"
            title="Claims Processing"
            description="Streamlined claims workflows with first notice of loss (FNOL), automated adjudication, settlement processing, fraud detection, and integration with repair networks."
          />
          <Card
            icon="💳"
            title="Billing & Collections"
            description="Flexible billing schedules, automated payment processing, dunning management, commission calculations, and real-time reconciliation with accounting systems."
          />
        </div>
      </section>
    </div>
  )
}