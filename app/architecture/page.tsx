import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'

export default function ArchitecturePage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Technology"
          title="Modern Software Architecture"
          description="Built on cutting-edge technology stack for maximum performance and scalability"
        />
        
        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon="🏗️"
            title="Microservices Architecture"
            description="Containerized services orchestrated by Kubernetes. Each module deployable independently. Service mesh for inter-service communication. Event-driven architecture with message queues."
          />
          <FeatureItem
            icon="☁️"
            title="Cloud-Native Design"
            description="Built for AWS, Azure, and GCP from day one. Infrastructure as code with Terraform. Auto-scaling based on demand. Multi-region deployment for high availability."
          />
          <FeatureItem
            icon="⚡"
            title="High Performance"
            description="Redis caching for sub-100ms response times. Optimized database queries with read replicas. CDN for static content. Asynchronous processing for heavy workloads."
          />
        </div>
      </section>
    </div>
  )
}
