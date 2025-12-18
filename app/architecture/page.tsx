import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'
import Link from 'next/link'
import { HiCubeTransparent, HiCircleStack, HiCog, HiServerStack, HiArrowPath, HiShieldCheck, HiBolt, HiChartBar } from 'react-icons/hi2'

export default function ArchitecturePage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Architecture"
          title="Modern Microservices Architecture"
          description="Each module operates independently with its own database, enabling zero-downtime deployments, independent scaling, and technology flexibility. Built on containerized infrastructure with Kubernetes orchestration."
        />

        {/* Architecture Diagram */}
        <div className="mb-20 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all"></div>
          <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="relative">
              <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">Microservices Architecture Overview</h3>

              {/* Architecture layers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 border border-primary/30 rounded-2xl p-6 text-center hover:border-primary hover:bg-primary/5 transition-all">
                  <HiCubeTransparent className="text-5xl text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">API Gateway</h4>
                  <p className="text-gray text-sm">Single entry point for all client requests with routing and load balancing</p>
                </div>

                <div className="bg-white/5 border border-secondary/30 rounded-2xl p-6 text-center hover:border-secondary hover:bg-secondary/5 transition-all">
                  <HiServerStack className="text-5xl text-secondary mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Microservices</h4>
                  <p className="text-gray text-sm">Independent services for Policy, Claims, Billing, and more</p>
                </div>

                <div className="bg-white/5 border border-accent/30 rounded-2xl p-6 text-center hover:border-accent hover:bg-accent/5 transition-all">
                  <HiCircleStack className="text-5xl text-accent mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Data Layer</h4>
                  <p className="text-gray text-sm">Dedicated databases per service with data isolation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon={<HiCubeTransparent className="text-primary" />}
            title="Service Independence"
            description="Each microservice is a self-contained unit with its own codebase, database, and deployment pipeline. Services communicate via well-defined APIs, allowing teams to develop, test, and deploy independently without affecting other services."
          />

          <FeatureItem
            icon={<HiBolt className="text-warning" />}
            title="Zero-Downtime Deployments"
            description="Blue-green deployment strategy and rolling updates ensure continuous availability. New versions are deployed alongside existing ones, with traffic gradually shifted after validation. Automatic rollback capabilities minimize risk."
          />

          <FeatureItem
            icon={<HiArrowPath className="text-info" />}
            title="Independent Scaling"
            description="Scale individual services based on demand. High-traffic services like Claims Processing can scale independently from lower-traffic services like Policy Administration. Kubernetes auto-scaling adjusts resources dynamically."
          />

          <FeatureItem
            icon={<HiCog className="text-secondary" />}
            title="Technology Flexibility"
            description="Choose the best technology stack for each service. Use different programming languages, frameworks, and databases optimized for specific use cases. Polyglot persistence enables optimal data storage for each domain."
          />

          <FeatureItem
            icon={<HiServerStack className="text-accent" />}
            title="Containerized Infrastructure"
            description="Docker containers ensure consistency across development, testing, and production environments. Lightweight, portable containers include all dependencies, eliminating 'works on my machine' issues."
          />

          <FeatureItem
            icon={<HiCubeTransparent className="text-success" />}
            title="Kubernetes Orchestration"
            description="Kubernetes manages container deployment, scaling, and operations. Automated health checks, self-healing, service discovery, and load balancing ensure high availability and optimal resource utilization."
          />

          <FeatureItem
            icon={<HiShieldCheck className="text-primary" />}
            title="Fault Isolation"
            description="Service failures are contained and don't cascade. Circuit breakers prevent cascading failures, retry logic handles transient errors, and fallback mechanisms ensure graceful degradation of functionality."
          />

          <FeatureItem
            icon={<HiChartBar className="text-secondary" />}
            title="Observability & Monitoring"
            description="Comprehensive logging, metrics, and distributed tracing across all services. Real-time monitoring dashboards, automated alerts, and detailed performance analytics enable proactive issue resolution."
          />
        </div>

        {/* Technology Stack */}
        <div className="mt-20 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">Technology Stack</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-3">
                <h4 className="text-lg font-bold text-primary">Container Platform</h4>
              </div>
              <p className="text-gray text-sm">Docker, Kubernetes</p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-6 mb-3">
                <h4 className="text-lg font-bold text-secondary">Service Mesh</h4>
              </div>
              <p className="text-gray text-sm">Istio, Linkerd</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mb-3">
                <h4 className="text-lg font-bold text-accent">API Gateway</h4>
              </div>
              <p className="text-gray text-sm">Kong, NGINX</p>
            </div>

            <div className="text-center">
              <div className="bg-success/10 border border-success/30 rounded-xl p-6 mb-3">
                <h4 className="text-lg font-bold text-success">Monitoring</h4>
              </div>
              <p className="text-gray text-sm">Prometheus, Grafana</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/contact" className="group bg-gradient-to-r from-primary to-secondary text-white px-7 lg:px-9 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all inline-flex items-center gap-2">
            Discuss Your Architecture Needs
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
