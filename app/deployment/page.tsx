import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import FeatureItem from '@/components/FeatureItem'

export default function DeploymentPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Deployment"
          title="Flexible Deployment Models"
          description="Choose the hosting model that fits your requirements"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          <Card
            icon="☁️"
            title="Cloud (SaaS)"
            description="Fully managed hosting on AWS, Azure, or GCP. Automatic updates, scaling, and monitoring. Fastest time-to-value with minimal IT overhead."
          />
          <Card
            icon="🔐"
            title="Private Cloud"
            description="Dedicated infrastructure in your preferred cloud region. Enhanced data residency control while maintaining cloud benefits. Ideal for regulatory requirements."
          />
          <Card
            icon="🔄"
            title="Hybrid"
            description="Combination of cloud and on-premises deployment. Keep sensitive data on-premises while leveraging cloud for scalability. Seamless synchronization."
          />
          <Card
            icon="🏢"
            title="On-Premises"
            description="Full deployment in your data center. Complete control over infrastructure and data. NIZSOFT provides installation, configuration, and ongoing support."
          />
        </div>
        
        <FeatureItem
          icon="⏱️"
          title="24×7 Enterprise Support"
          description="Dedicated support team available around the clock regardless of deployment model. SLA-backed response times: Critical (1 hour), High (4 hours), Medium (8 hours). Proactive monitoring with automated alerts. Regular health checks and performance optimization. Direct access to technical architects for complex issues."
        />
      </section>
    </div>
  )
}