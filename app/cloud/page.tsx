import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'
import Link from 'next/link'
import Image from 'next/image'
import { HiCloud, HiGlobeAlt, HiServerStack, HiArrowPath, HiShieldCheck, HiCog } from 'react-icons/hi2'

export default function CloudPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Cloud Infrastructure"
          title="Multi-Cloud Deployment"
          description="Deploy on AWS, Azure, or Google Cloud Platform. Cloud-agnostic design with automated infrastructure provisioning, load balancing, and geographic redundancy across multiple regions."
        />

        {/* Cloud Providers */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-white mb-12">Supported Cloud Platforms</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9900]/20 to-[#FF9900]/10 rounded-3xl blur-2xl group-hover:blur-xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 text-center hover:border-[#FF9900]/50 transition-all">
                <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center p-4">
                  <Image
                    src="/aws-logo.png"
                    alt="AWS Logo"
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">Amazon Web Services</h4>
                <p className="text-gray mb-4">Full support for AWS services including EC2, RDS, S3, Lambda, and EKS</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-full text-xs text-[#FF9900]">EC2</span>
                  <span className="px-3 py-1 bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-full text-xs text-[#FF9900]">RDS</span>
                  <span className="px-3 py-1 bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-full text-xs text-[#FF9900]">EKS</span>
                  <span className="px-3 py-1 bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-full text-xs text-[#FF9900]">S3</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0078D4]/20 to-[#0078D4]/10 rounded-3xl blur-2xl group-hover:blur-xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 text-center hover:border-[#0078D4]/50 transition-all">
                <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center p-4">
                  <Image
                    src="/azure-logo.png"
                    alt="Azure Logo"
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">Microsoft Azure</h4>
                <p className="text-gray mb-4">Native integration with Azure VMs, SQL Database, Blob Storage, and AKS</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-[#0078D4]/10 border border-[#0078D4]/30 rounded-full text-xs text-[#0078D4]">VMs</span>
                  <span className="px-3 py-1 bg-[#0078D4]/10 border border-[#0078D4]/30 rounded-full text-xs text-[#0078D4]">SQL DB</span>
                  <span className="px-3 py-1 bg-[#0078D4]/10 border border-[#0078D4]/30 rounded-full text-xs text-[#0078D4]">AKS</span>
                  <span className="px-3 py-1 bg-[#0078D4]/10 border border-[#0078D4]/30 rounded-full text-xs text-[#0078D4]">Blob</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4]/20 to-[#4285F4]/10 rounded-3xl blur-2xl group-hover:blur-xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 text-center hover:border-[#4285F4]/50 transition-all">
                <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center p-4">
                  <Image
                    src="/gcp-logo.png"
                    alt="Google Cloud Logo"
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">Google Cloud Platform</h4>
                <p className="text-gray mb-4">Optimized for GCE, Cloud SQL, Cloud Storage, and GKE deployments</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-[#4285F4]/10 border border-[#4285F4]/30 rounded-full text-xs text-[#4285F4]">GCE</span>
                  <span className="px-3 py-1 bg-[#4285F4]/10 border border-[#4285F4]/30 rounded-full text-xs text-[#4285F4]">Cloud SQL</span>
                  <span className="px-3 py-1 bg-[#4285F4]/10 border border-[#4285F4]/30 rounded-full text-xs text-[#4285F4]">GKE</span>
                  <span className="px-3 py-1 bg-[#4285F4]/10 border border-[#4285F4]/30 rounded-full text-xs text-[#4285F4]">Storage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon={<HiCloud className="text-primary" />}
            title="Cloud-Agnostic Design"
            description="Platform architecture is independent of cloud provider specifics. Use Terraform and Kubernetes for infrastructure as code, enabling seamless migration between cloud providers. No vendor lock-in ensures flexibility and cost optimization."
          />

          <FeatureItem
            icon={<HiCog className="text-secondary" />}
            title="Automated Infrastructure Provisioning"
            description="Infrastructure as Code (IaC) with Terraform automates resource provisioning. Pre-configured templates for complete stack deployment. Automated scaling policies, backup configurations, and disaster recovery setups. One-click deployment to any supported cloud."
          />

          <FeatureItem
            icon={<HiServerStack className="text-accent" />}
            title="Intelligent Load Balancing"
            description="Multi-layer load balancing distributes traffic efficiently. Application load balancers route requests based on content. Network load balancers handle millions of requests per second. Health checks ensure traffic only reaches healthy instances."
          />

          <FeatureItem
            icon={<HiGlobeAlt className="text-success" />}
            title="Geographic Redundancy"
            description="Deploy across multiple regions for high availability. Automatic failover to backup regions during outages. Data replication across regions for disaster recovery. Geo-routing directs users to nearest region for optimal performance."
          />

          <FeatureItem
            icon={<HiArrowPath className="text-warning" />}
            title="Multi-Region Deployment"
            description="Active-active deployment across multiple geographic regions. Users automatically routed to nearest data center. Cross-region data synchronization ensures consistency. Comply with data residency requirements by region."
          />

          <FeatureItem
            icon={<HiShieldCheck className="text-info" />}
            title="High Availability Architecture"
            description="99.99% uptime SLA with redundant infrastructure. Automated failover and self-healing capabilities. Zero-downtime deployments and updates. Continuous monitoring and automated incident response."
          />
        </div>

        {/* Benefits Grid */}
        <div className="mt-20 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">Multi-Cloud Benefits</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-primary/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-primary mb-3">Cost Optimization</h4>
              <p className="text-gray">Choose the most cost-effective cloud provider for each workload. Leverage spot instances and reserved capacity across providers.</p>
            </div>

            <div className="bg-white/5 border border-secondary/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-secondary mb-3">Risk Mitigation</h4>
              <p className="text-gray">Avoid single point of failure. Distribute risk across multiple cloud providers for business continuity.</p>
            </div>

            <div className="bg-white/5 border border-accent/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-accent mb-3">Performance Optimization</h4>
              <p className="text-gray">Use best-in-class services from each provider. Optimize latency by deploying closer to end users globally.</p>
            </div>

            <div className="bg-white/5 border border-success/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-success mb-3">Compliance Flexibility</h4>
              <p className="text-gray">Meet regional compliance requirements. Deploy in specific regions to satisfy data sovereignty regulations.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/contact" className="group bg-gradient-to-r from-primary to-secondary text-white px-7 lg:px-9 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all inline-flex items-center gap-2">
            Discuss Cloud Deployment Strategy
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}