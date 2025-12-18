import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'
import Link from 'next/link'
import { HiLink, HiCodeBracket, HiDocumentText, HiBolt, HiCog, HiShieldCheck } from 'react-icons/hi2'

export default function IntegrationsPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="API & Integrations"
          title="API-First Design"
          description="Comprehensive RESTful API layer with OpenAPI documentation. 150+ endpoints for complete programmatic access to all platform capabilities. Webhook support for event-driven integrations."
        />

        {/* API Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-gray text-sm">API Endpoints</div>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-secondary mb-2">99.9%</div>
            <div className="text-gray text-sm">API Uptime</div>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">&lt;100ms</div>
            <div className="text-gray text-sm">Response Time</div>
          </div>
          <div className="bg-gradient-to-br from-success/10 to-success/5 border border-success/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-success mb-2">24/7</div>
            <div className="text-gray text-sm">API Support</div>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon={<HiLink className="text-primary" />}
            title="RESTful API Platform"
            description="Complete RESTful API following industry best practices. JSON request/response format for easy integration. Versioned APIs ensure backward compatibility. Rate limiting and throttling protect system resources. OAuth 2.0 and API key authentication."
          />

          <FeatureItem
            icon={<HiDocumentText className="text-secondary" />}
            title="OpenAPI Documentation"
            description="Interactive API documentation with OpenAPI 3.0 specification. Try API calls directly from documentation. Auto-generated client libraries in multiple languages. Comprehensive examples for every endpoint. Postman collections available for download."
          />

          <FeatureItem
            icon={<HiCodeBracket className="text-accent" />}
            title="150+ API Endpoints"
            description="Complete programmatic access to all platform features. Policy management, claims processing, billing operations. Customer and agent management. Analytics and reporting. Document management. Real-time notifications and webhooks."
          />

          <FeatureItem
            icon={<HiBolt className="text-warning" />}
            title="Webhook Support"
            description="Event-driven architecture with webhook notifications. Real-time updates for policy changes, claim status, payments. Configurable webhook endpoints per event type. Automatic retry logic for failed deliveries. Webhook signature verification for security."
          />

          <FeatureItem
            icon={<HiCog className="text-info" />}
            title="SDK & Libraries"
            description="Official SDKs for popular programming languages: JavaScript/TypeScript, Python, Java, .NET, PHP, Ruby. Code samples and quick-start guides. Sandbox environment for testing. Dedicated developer support team."
          />

          <FeatureItem
            icon={<HiShieldCheck className="text-success" />}
            title="API Security"
            description="Enterprise-grade API security. OAuth 2.0 and API key authentication. IP whitelisting and CORS configuration. Request signing and encryption. Comprehensive audit logging. DDoS protection and rate limiting."
          />
        </div>

        {/* API Categories */}
        <div className="mt-20 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">API Categories</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Policy Management', count: '25+', color: 'primary' },
              { name: 'Claims Processing', count: '20+', color: 'secondary' },
              { name: 'Billing & Payments', count: '18+', color: 'accent' },
              { name: 'Customer Management', count: '15+', color: 'success' },
              { name: 'Analytics & Reporting', count: '22+', color: 'warning' },
              { name: 'Document Management', count: '12+', color: 'info' },
              { name: 'Agent Portal', count: '10+', color: 'primary' },
              { name: 'Underwriting', count: '14+', color: 'secondary' },
              { name: 'Notifications', count: '8+', color: 'accent' },
            ].map((category, i) => (
              <div key={i} className={`bg-white/5 border border-${category.color}/20 rounded-2xl p-6 hover:border-${category.color}/50 transition-all`}>
                <h4 className={`text-lg font-bold text-${category.color} mb-2`}>{category.name}</h4>
                <p className="text-gray text-sm">{category.count} endpoints</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/contact" className="group bg-gradient-to-r from-primary to-secondary text-white px-7 lg:px-9 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all inline-flex items-center gap-2">
            Get API Documentation
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
