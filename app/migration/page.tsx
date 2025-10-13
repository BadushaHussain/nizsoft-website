import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'

export default function MigrationPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Implementation"
          title="Safe Migration & Seamless Integration"
          description="Proven methodology for moving from legacy systems without disruption"
        />
        
        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon="🔄"
            title="Zero-Data-Loss Migration"
            description="Comprehensive data assessment, cleansing, transformation, and validation. Automated ETL pipelines with detailed audit logs. Parallel run capability to ensure accuracy before cutover."
          />
          <FeatureItem
            icon="🔗"
            title="Pre-Built Integrations"
            description="Out-of-the-box connectors for popular CRMs (Salesforce, Microsoft Dynamics), payment gateways (Stripe, PayPal), accounting systems (QuickBooks, SAP), and data providers."
          />
          <FeatureItem
            icon="🛠️"
            title="Custom Integration Framework"
            description="Flexible API architecture allows custom integrations with proprietary systems. SDK and comprehensive documentation available. Support for SOAP, REST, and file-based integrations."
          />
          <FeatureItem
            icon="📅"
            title="Phased Implementation Approach"
            description="Deploy modules incrementally to minimize risk. Start with non-critical functions, validate, then expand. Change management and training programs included."
          />
        </div>
      </section>
    </div>
  )
}