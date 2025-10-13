import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'

export default function IntegrationsPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Technology"
          title="Integration Capabilities"
          description="Connect NIZSOFT with your entire technology ecosystem"
        />
        
        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon="🔗"
            title="RESTful API Platform"
            description="150+ documented API endpoints covering all platform functionality. OpenAPI 3.0 specification with interactive documentation. Webhook support for real-time event notifications."
          />
          <FeatureItem
            icon="🔌"
            title="Pre-Built Connectors"
            description="CRM: Salesforce, Microsoft Dynamics, HubSpot. Payment: Stripe, PayPal, Authorize.net. Accounting: QuickBooks, SAP, Oracle. Data: Credit bureaus, MVR, medical records."
          />
          <FeatureItem
            icon="🛠️"
            title="Integration Development Kit"
            description="SDK available in multiple languages (Java, Python, Node.js, .NET). Code samples and tutorials. Sandbox environment for testing. Dedicated integration support team."
          />
        </div>
      </section>
    </div>
  )
}
