import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'

export default function SecurityPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Security"
          title="Enterprise-Grade Security & Compliance"
          description="Bank-level security with comprehensive regulatory compliance"
        />
        
        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon="🔒"
            title="Data Encryption & Protection"
            description="AES-256 encryption at rest and TLS 1.3 in transit. Hardware security modules (HSM) for key management. Regular security audits and penetration testing by certified firms."
          />
          <FeatureItem
            icon="👥"
            title="Access Control & Authentication"
            description="Multi-factor authentication (MFA), single sign-on (SSO) with SAML/OAuth. Granular role-based access control (RBAC). Complete audit trails for all user actions."
          />
          <FeatureItem
            icon="✓"
            title="Regulatory Compliance"
            description="SOC 2 Type II certified, ISO 27001:2013 compliant. GDPR, CCPA, and regional data privacy regulations. Insurance-specific compliance (HIPAA for health, PCI DSS for payments)."
          />
          <FeatureItem
            icon="🛡️"
            title="Business Continuity"
            description="99.9% uptime SLA with redundant infrastructure. Automated backups with point-in-time recovery. Disaster recovery plan with RTO < 4 hours and RPO < 1 hour."
          />
        </div>
      </section>
    </div>
  )
}