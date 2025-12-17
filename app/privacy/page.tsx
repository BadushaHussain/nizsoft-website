export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-dark py-24">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
                <article className="prose prose-invert prose-lg max-w-none">
                    <h1 className="text-4xl font-bold gradient-text mb-4">Privacy Policy</h1>
                    <p className="text-gray mb-12">Last Updated: December 17, 2025</p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="text-light mb-4">
                            Welcome to Nizsoft Insurance Platform ("Nizsoft," "we," "our," or "us"). We are a Software-as-a-Service (SaaS) provider offering insurance management software solutions to insurance companies, brokers, agencies, and other organizations in the insurance industry.
                        </p>
                        <p className="text-light mb-4">
                            This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our software platform, website, and related services. This policy applies to information we collect about our customers (business entities), their authorized users, and visitors to our website.
                        </p>
                        <p className="text-light">
                            By using our platform, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

                        <h3 className="text-xl font-semibold text-white mb-3">2.1 Customer Account Information</h3>
                        <p className="text-light mb-4">When you or your organization registers for our services, we collect:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Company/organization name and business information</li>
                            <li>Authorized user information (name, email, phone number, job title)</li>
                            <li>Billing contact and payment information</li>
                            <li>Business address and tax identification numbers</li>
                            <li>Subscription and licensing details</li>
                            <li>User account credentials (encrypted)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3">2.2 Platform Usage Data</h3>
                        <p className="text-light mb-4">When you use our software platform, we collect:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>User login information and access logs</li>
                            <li>IP addresses and device information</li>
                            <li>Browser type and version</li>
                            <li>Features and modules accessed</li>
                            <li>System performance and error logs</li>
                            <li>API usage and integration data</li>
                            <li>Session duration and activity timestamps</li>
                            <li>Configuration and customization settings</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3">2.3 Customer Data (Data You Upload)</h3>
                        <p className="text-light mb-4">Our platform processes data that you upload or input, including:</p>
                        <ul className="list-disc list-inside text-light mb-4 space-y-2">
                            <li>Policyholder information (name, contact details, demographics)</li>
                            <li>Insurance policy details and coverage information</li>
                            <li>Claims data and documentation</li>
                            <li>Premium and payment records</li>
                            <li>Documents, attachments, and files</li>
                            <li>Reports and analytics data</li>
                            <li>Communication logs and notes</li>
                        </ul>
                        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
                            <p className="text-light font-semibold">Important: This Customer Data belongs to you. We act as a data processor on your behalf and do not use this data for our own purposes except to provide our services to you.</p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>

                        <h3 className="text-xl font-semibold text-white mb-3">3.1 Service Delivery and Platform Operations</h3>
                        <p className="text-light mb-4">We use your information to:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Provide access to our SaaS platform and features</li>
                            <li>Process and fulfill your subscription orders</li>
                            <li>Authenticate users and manage access controls</li>
                            <li>Host and store your data securely</li>
                            <li>Maintain platform performance and uptime</li>
                            <li>Process payments and manage billing</li>
                            <li>Provide technical support and customer service</li>
                            <li>Send service-related notifications and updates</li>
                            <li>Conduct system maintenance and upgrades</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3">3.2 Customer Data Processing</h3>
                        <p className="text-light mb-4">We process Customer Data (data you upload) solely to:</p>
                        <ul className="list-disc list-inside text-light mb-4 space-y-2">
                            <li>Provide the software services you subscribed to</li>
                            <li>Enable platform functionality and features</li>
                            <li>Facilitate data backup and disaster recovery</li>
                            <li>Troubleshoot technical issues (with your permission)</li>
                            <li>Comply with your instructions as data controller</li>
                        </ul>
                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                            <p className="text-light font-semibold mb-2">We do not:</p>
                            <ul className="list-disc list-inside text-light space-y-1">
                                <li>Use your Customer Data for our own marketing purposes</li>
                                <li>Share Customer Data with third parties except as service providers</li>
                                <li>Mine or analyze Customer Data for purposes other than service delivery</li>
                                <li>Train AI/ML models on your Customer Data without explicit permission</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                        <p className="text-light mb-4">We implement comprehensive security measures to protect your data:</p>

                        <h3 className="text-xl font-semibold text-white mb-3">Encryption:</h3>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Data in transit: TLS 1.3 encryption for all communications</li>
                            <li>Data at rest: AES-256 encryption for stored data</li>
                            <li>Database encryption with encrypted backups</li>
                            <li>Encrypted API communications</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3">Access Controls:</h3>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Multi-factor authentication (MFA) required for all users</li>
                            <li>Role-based access control (RBAC)</li>
                            <li>Principle of least privilege</li>
                            <li>Single Sign-On (SSO) support (SAML 2.0, OAuth 2.0)</li>
                            <li>IP whitelisting and access restrictions</li>
                            <li>Automatic session timeout</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3">Compliance and Certifications:</h3>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>SOC 2 Type II certification</li>
                            <li>ISO 27001 Information Security Management</li>
                            <li>GDPR compliance (EU data protection)</li>
                            <li>CCPA compliance (California privacy)</li>
                            <li>PCI DSS Level 1 (for payment processing)</li>
                            <li>Regular third-party security audits</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights and Choices</h2>
                        <p className="text-light mb-4">As our customer organization, you have the right to:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li><strong>Access Your Data:</strong> Export all Customer Data at any time through our platform</li>
                            <li><strong>Modify Your Data:</strong> Update, correct, or modify data within the platform</li>
                            <li><strong>Delete Your Data:</strong> Request deletion upon service termination</li>
                            <li><strong>Data Portability:</strong> Export your data in standard formats (CSV, JSON, XML)</li>
                            <li><strong>Control Integrations:</strong> Enable or disable third-party integrations</li>
                            <li><strong>Manage Users:</strong> Add, remove, or modify user access and permissions</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                        <p className="text-light mb-4">If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                        <div className="bg-dark-light border border-white/10 rounded-lg p-6">
                            <p className="text-white font-semibold mb-2">Nizsoft Insurance Platform</p>
                            <p className="text-white font-semibold mb-4">Data Protection Officer</p>
                            <p className="text-light mb-2">Email: <a href="mailto:privacy@nizsoft.com" className="text-primary hover:text-secondary">privacy@nizsoft.com</a></p>
                            <p className="text-light mb-2">For GDPR inquiries: <a href="mailto:dpo@nizsoft.com" className="text-primary hover:text-secondary">dpo@nizsoft.com</a></p>
                            <p className="text-light">For California Privacy Rights: <a href="mailto:california-privacy@nizsoft.com" className="text-primary hover:text-secondary">california-privacy@nizsoft.com</a></p>
                        </div>
                    </section>

                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mt-12">
                        <p className="text-light">
                            By using Nizsoft Insurance Platform, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. For the most current version of this Privacy Policy, please visit our website or contact us directly.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    )
}
