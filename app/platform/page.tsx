import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'
import Link from 'next/link'

export default function PlatformPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Platform"
          title="Enterprise-Grade Insurance Platform"
          description="Complete suite of modules built on modern microservices architecture"
        />
        
        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon="🏗️"
            title="Modern Microservices Architecture"
            description="Each module operates independently with its own database, enabling zero-downtime deployments, independent scaling, and technology flexibility. Built on containerized infrastructure with Kubernetes orchestration."
          />
          <FeatureItem
            icon="☁️"
            title="Multi-Cloud Deployment"
            description="Deploy on AWS, Azure, or Google Cloud Platform. Cloud-agnostic design with automated infrastructure provisioning, load balancing, and geographic redundancy across multiple regions."
          />
          <FeatureItem
            icon="🔗"
            title="API-First Design"
            description="Comprehensive RESTful API layer with OpenAPI documentation. 150+ endpoints for complete programmatic access to all platform capabilities. Webhook support for event-driven integrations."
          />
          <FeatureItem
            icon="🔒"
            title="Enterprise Security & Compliance"
            description="End-to-end encryption, multi-factor authentication, role-based access control. SOC 2 Type II, ISO 27001, GDPR, and regional insurance regulatory compliance built-in."
          />
          <FeatureItem
            icon="⚡"
            title="High Performance & Scalability"
            description="Sub-100ms API response times, handles 10,000+ concurrent users. Auto-scaling infrastructure adapts to demand spikes. Real-time event processing with message queues."
          />
          <FeatureItem
            icon="🔄"
            title="Flexible Deployment Options"
            description="Cloud-hosted (SaaS), private cloud, hybrid, or on-premises deployment. Support for both single-tenant and multi-tenant architectures based on your requirements."
          />
        </div>
        
        <div className="text-center mt-16">
          <Link href="/contact" className="bg-gradient-to-r from-primary to-secondary text-white px-7 lg:px-9 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all inline-block">
            Schedule Platform Demo
          </Link>
        </div>
      </section>
    </div>
  )
}
