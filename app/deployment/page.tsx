import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'
import Link from 'next/link'
import { HiCloud, HiServer, HiCog, HiArrowPath, HiShieldCheck, HiUsers } from 'react-icons/hi2'

export default function DeploymentPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Deployment"
          title="Flexible Deployment Options"
          description="Cloud-hosted (SaaS), private cloud, hybrid, or on-premises deployment. Support for both single-tenant and multi-tenant architectures based on your requirements."
        />

        {/* Deployment Models */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-all">
              <HiCloud className="text-6xl text-primary mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">SaaS (Cloud-Hosted)</h3>
              <p className="text-gray mb-6">Fully managed cloud solution with automatic updates, scaling, and maintenance. Get started in minutes with no infrastructure setup.</p>
              <ul className="space-y-2 text-gray text-sm">
                <li>• Fastest time to market</li>
                <li>• Automatic updates and patches</li>
                <li>• Predictable monthly pricing</li>
                <li>• 99.99% uptime SLA</li>
                <li>• Multi-tenant architecture</li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 hover:border-secondary/50 transition-all">
              <HiServer className="text-6xl text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">On-Premises</h3>
              <p className="text-gray mb-6">Deploy within your own data center for maximum control and data sovereignty. Complete ownership of infrastructure and data.</p>
              <ul className="space-y-2 text-gray text-sm">
                <li>• Full data control</li>
                <li>• Customizable infrastructure</li>
                <li>• Meet strict compliance requirements</li>
                <li>• Single-tenant architecture</li>
                <li>• Air-gapped deployment option</li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-success/20 rounded-3xl blur-2xl group-hover:blur-xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 hover:border-accent/50 transition-all">
              <HiCog className="text-6xl text-accent mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Private Cloud</h3>
              <p className="text-gray mb-6">Dedicated cloud infrastructure in your preferred cloud provider. Combines cloud benefits with data isolation and control.</p>
              <ul className="space-y-2 text-gray text-sm">
                <li>• Dedicated resources</li>
                <li>• Cloud scalability</li>
                <li>• Enhanced security</li>
                <li>• Customizable configuration</li>
                <li>• Single-tenant isolation</li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-success/20 to-warning/20 rounded-3xl blur-2xl group-hover:blur-xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 hover:border-success/50 transition-all">
              <HiArrowPath className="text-6xl text-success mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Hybrid Deployment</h3>
              <p className="text-gray mb-6">Best of both worlds - combine cloud and on-premises deployments. Gradual migration path from on-premises to cloud.</p>
              <ul className="space-y-2 text-gray text-sm">
                <li>• Flexible data placement</li>
                <li>• Gradual cloud migration</li>
                <li>• Workload optimization</li>
                <li>• Disaster recovery options</li>
                <li>• Cost optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Architecture Options */}
        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon={<HiUsers className="text-primary" />}
            title="Multi-Tenant Architecture"
            description="Shared infrastructure with logical data isolation. Cost-effective solution for standard deployments. Automatic scaling and resource optimization. Shared updates and maintenance. Ideal for SaaS deployments with predictable workloads."
          />

          <FeatureItem
            icon={<HiShieldCheck className="text-secondary" />}
            title="Single-Tenant Architecture"
            description="Dedicated infrastructure for maximum isolation and customization. Complete control over resources and configurations. Custom SLAs and performance guarantees. Enhanced security and compliance. Ideal for enterprises with specific requirements."
          />

          <FeatureItem
            icon={<HiServer className="text-accent" />}
            title="Containerized Deployment"
            description="Docker containers with Kubernetes orchestration. Consistent deployment across all environments. Easy scaling and resource management. Portable across cloud providers. Infrastructure as code with Terraform and Helm charts."
          />

          <FeatureItem
            icon={<HiCog className="text-success" />}
            title="Deployment Automation"
            description="Automated deployment pipelines with CI/CD. Infrastructure provisioning with Terraform. Configuration management with Ansible. Blue-green and canary deployments. Automated rollback on failures."
          />
        </div>

        {/* Comparison Table */}
        <div className="mt-20 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 lg:p-12 overflow-x-auto">
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">Deployment Comparison</h3>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-4 text-white font-bold">Feature</th>
                <th className="pb-4 text-primary font-bold text-center">SaaS</th>
                <th className="pb-4 text-secondary font-bold text-center">Private Cloud</th>
                <th className="pb-4 text-accent font-bold text-center">On-Premises</th>
                <th className="pb-4 text-success font-bold text-center">Hybrid</th>
              </tr>
            </thead>
            <tbody className="text-gray text-sm">
              <tr className="border-b border-white/5">
                <td className="py-4">Time to Deploy</td>
                <td className="py-4 text-center">Minutes</td>
                <td className="py-4 text-center">Days</td>
                <td className="py-4 text-center">Weeks</td>
                <td className="py-4 text-center">Varies</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4">Infrastructure Management</td>
                <td className="py-4 text-center">Managed</td>
                <td className="py-4 text-center">Managed</td>
                <td className="py-4 text-center">Self-Managed</td>
                <td className="py-4 text-center">Mixed</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4">Data Control</td>
                <td className="py-4 text-center">Shared</td>
                <td className="py-4 text-center">Dedicated</td>
                <td className="py-4 text-center">Full</td>
                <td className="py-4 text-center">Flexible</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4">Scalability</td>
                <td className="py-4 text-center">Automatic</td>
                <td className="py-4 text-center">Automatic</td>
                <td className="py-4 text-center">Manual</td>
                <td className="py-4 text-center">Mixed</td>
              </tr>
              <tr>
                <td className="py-4">Cost Model</td>
                <td className="py-4 text-center">Subscription</td>
                <td className="py-4 text-center">Subscription</td>
                <td className="py-4 text-center">License + Infrastructure</td>
                <td className="py-4 text-center">Mixed</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/contact" className="group bg-gradient-to-r from-primary to-secondary text-white px-7 lg:px-9 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all inline-flex items-center gap-2">
            Discuss Deployment Options
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}