import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'
import Link from 'next/link'
import { HiShieldCheck, HiLockClosed, HiFingerPrint, HiKey, HiDocumentCheck, HiServer } from 'react-icons/hi2'

export default function SecurityPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Security & Compliance"
          title="Enterprise Security & Compliance"
          description="End-to-end encryption, multi-factor authentication, role-based access control. SOC 2 Type II, ISO 27001, GDPR, and regional insurance regulatory compliance built-in."
        />

        {/* Compliance Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-white mb-12">Compliance Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-6 text-center hover:border-primary hover:scale-105 transition-all">
              <HiShieldCheck className="text-5xl text-primary mx-auto mb-3" />
              <h4 className="text-xl font-bold text-white mb-2">SOC 2 Type II</h4>
              <p className="text-gray text-sm">Audited security controls</p>
            </div>
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 rounded-2xl p-6 text-center hover:border-secondary hover:scale-105 transition-all">
              <HiShieldCheck className="text-5xl text-secondary mx-auto mb-3" />
              <h4 className="text-xl font-bold text-white mb-2">ISO 27001</h4>
              <p className="text-gray text-sm">Information security management</p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-6 text-center hover:border-accent hover:scale-105 transition-all">
              <HiShieldCheck className="text-5xl text-accent mx-auto mb-3" />
              <h4 className="text-xl font-bold text-white mb-2">GDPR</h4>
              <p className="text-gray text-sm">EU data protection compliance</p>
            </div>
            <div className="bg-gradient-to-br from-success/10 to-success/5 border border-success/30 rounded-2xl p-6 text-center hover:border-success hover:scale-105 transition-all">
              <HiShieldCheck className="text-5xl text-success mx-auto mb-3" />
              <h4 className="text-xl font-bold text-white mb-2">HIPAA</h4>
              <p className="text-gray text-sm">Healthcare data protection</p>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon={<HiLockClosed className="text-primary" />}
            title="End-to-End Encryption"
            description="AES-256 encryption for data at rest. TLS 1.3 for data in transit. Database-level encryption with rotating keys. Encrypted backups and disaster recovery. Hardware security modules (HSM) for key management."
          />

          <FeatureItem
            icon={<HiFingerPrint className="text-secondary" />}
            title="Multi-Factor Authentication"
            description="Support for SMS, email, and authenticator apps. Biometric authentication (fingerprint, face ID). Hardware token support (YubiKey). Adaptive authentication based on risk. Single Sign-On (SSO) with SAML 2.0 and OAuth 2.0."
          />

          <FeatureItem
            icon={<HiKey className="text-accent" />}
            title="Role-Based Access Control"
            description="Granular permission system with custom roles. Principle of least privilege enforcement. Segregation of duties for sensitive operations. Audit trail for all access and changes. Time-based access controls and approvals."
          />

          <FeatureItem
            icon={<HiShieldCheck className="text-success" />}
            title="Security Monitoring"
            description="24/7 security operations center (SOC). Real-time threat detection and response. Intrusion detection and prevention systems. Automated security scanning and patching. Regular penetration testing and vulnerability assessments."
          />

          <FeatureItem
            icon={<HiDocumentCheck className="text-warning" />}
            title="Compliance Management"
            description="Built-in compliance frameworks for insurance regulations. Automated compliance reporting and documentation. Data residency controls for regional requirements. Privacy by design and default. Regular compliance audits and certifications."
          />

          <FeatureItem
            icon={<HiServer className="text-info" />}
            title="Infrastructure Security"
            description="Isolated network segments and VPCs. Web application firewall (WAF) protection. DDoS mitigation and rate limiting. Regular security updates and patches. Disaster recovery and business continuity planning."
          />
        </div>

        {/* Security Best Practices */}
        <div className="mt-20 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">Security Best Practices</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-primary/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-primary mb-3">Data Protection</h4>
              <ul className="space-y-2 text-gray text-sm">
                <li>• Encryption at rest and in transit</li>
                <li>• Automated data backup and recovery</li>
                <li>• Data loss prevention (DLP)</li>
                <li>• Secure data deletion</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-secondary/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-secondary mb-3">Access Management</h4>
              <ul className="space-y-2 text-gray text-sm">
                <li>• Multi-factor authentication</li>
                <li>• Role-based access control</li>
                <li>• Session management and timeout</li>
                <li>• IP whitelisting</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-accent/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-accent mb-3">Monitoring & Auditing</h4>
              <ul className="space-y-2 text-gray text-sm">
                <li>• Comprehensive audit logs</li>
                <li>• Real-time security alerts</li>
                <li>• User activity monitoring</li>
                <li>• Compliance reporting</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-success/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-success mb-3">Incident Response</h4>
              <ul className="space-y-2 text-gray text-sm">
                <li>• 24/7 security operations</li>
                <li>• Automated threat detection</li>
                <li>• Incident response plan</li>
                <li>• Regular security drills</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/contact" className="group bg-gradient-to-r from-primary to-secondary text-white px-7 lg:px-9 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all inline-flex items-center gap-2">
            Request Security Documentation
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}