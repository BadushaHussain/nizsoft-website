import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'

export default function CloudPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Technology"
          title="Cloud Infrastructure"
          description="Enterprise-grade reliability with 99.9% uptime"
        />
        
        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon="🌍"
            title="Multi-Region Deployment"
            description="Deploy in regions closest to your users for low latency. Automatic failover between regions. Geographic data replication for disaster recovery. Support for data residency requirements."
          />
          <FeatureItem
            icon="📈"
            title="Auto-Scaling Infrastructure"
            description="Horizontal scaling based on CPU, memory, and request metrics. Predictive scaling using ML forecasts. Cost optimization through right-sizing. Handle traffic spikes seamlessly."
          />
          <FeatureItem
            icon="📊"
            title="Monitoring & Observability"
            description="Real-time performance monitoring with custom dashboards. Distributed tracing across services. Log aggregation and analysis. Automated alerting with PagerDuty integration."
          />
        </div>
      </section>
    </div>
  )
}