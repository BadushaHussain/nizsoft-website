export default function TermsPage() {
    return (
        <div className="min-h-screen bg-dark py-24">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
                <article className="prose prose-invert prose-lg max-w-none">
                    <h1 className="text-4xl font-bold gradient-text mb-4">Terms of Service</h1>
                    <p className="text-gray mb-12">Last Updated: December 17, 2025 | Version 2.0</p>

                    {/* Section 1 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>

                        <h3 className="text-xl font-semibold text-white mb-3">1.1 Acceptance of Terms</h3>
                        <p className="text-light mb-4">
                            These Terms of Service ("Terms") constitute a legally binding agreement between Nizsoft Insurance Platform ("Nizsoft," "we," "our," or "us") and you (the "Customer," "you," or "your organization"). By accessing, registering for, or using our software platform and services, you agree to be bound by these Terms.
                        </p>
                        <p className="text-light mb-6">
                            If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms, in which case "you" or "your" shall refer to such entity.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3">1.2 Acceptance Methods</h3>
                        <p className="text-light mb-4">You accept these Terms by:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Clicking "I Accept" or "I Agree" during registration</li>
                            <li>Creating an account or subscribing to our services</li>
                            <li>Accessing or using the platform after these Terms are posted</li>
                            <li>Executing an Order Form that references these Terms</li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>

                        <h3 className="text-xl font-semibold text-white mb-3">2.1 Platform Overview</h3>
                        <p className="text-light mb-4">
                            Nizsoft Insurance Platform is a cloud-based Software-as-a-Service (SaaS) solution that provides insurance management software for insurance companies, brokers, agencies, and related organizations. Our platform includes:
                        </p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Policy management and administration</li>
                            <li>Claims processing and management</li>
                            <li>Customer relationship management (CRM)</li>
                            <li>Document management and storage</li>
                            <li>Reporting and analytics</li>
                            <li>Integration capabilities via REST APIs</li>
                            <li>Mobile applications (iOS and Android)</li>
                            <li>Third-party integrations and connectors</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration and Access</h2>

                        <h3 className="text-xl font-semibold text-white mb-3">3.1 Account Creation</h3>
                        <p className="text-light mb-4">To use our Services, you must:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Provide accurate and complete registration information</li>
                            <li>Maintain and update your information to keep it current</li>
                            <li>Select a unique username and strong password</li>
                            <li>Designate an account administrator with authority to manage your account</li>
                            <li>Provide valid payment information</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3">3.2 Account Security</h3>
                        <p className="text-light mb-4">You are responsible for:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Maintaining the confidentiality of account credentials</li>
                            <li>All activities that occur under your account</li>
                            <li>Implementing appropriate access controls for your users</li>
                            <li>Enabling multi-factor authentication (MFA) where available</li>
                            <li>Immediately notifying us of unauthorized access or security breaches</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Subscription Plans and Pricing</h2>

                        <h3 className="text-xl font-semibold text-white mb-3">4.1 Subscription Tiers</h3>
                        <p className="text-light mb-4">Common subscription tiers include:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li><strong>Starter:</strong> Basic features for small organizations</li>
                            <li><strong>Professional:</strong> Advanced features for growing businesses</li>
                            <li><strong>Enterprise:</strong> Full features with custom configurations and dedicated support</li>
                            <li><strong>Custom:</strong> Tailored solutions for specific requirements</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3">4.2 Plan Limitations</h3>
                        <p className="text-light mb-4">Each plan includes specific limitations on:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Number of users</li>
                            <li>Storage capacity</li>
                            <li>Transaction volumes</li>
                            <li>API call limits</li>
                            <li>Number of policies or claims</li>
                            <li>Features and modules available</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>

                        <h3 className="text-xl font-semibold text-white mb-3">5.1 Payment Methods</h3>
                        <p className="text-light mb-4">We accept payment via:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Credit card (Visa, Mastercard, American Express)</li>
                            <li>Debit card</li>
                            <li>ACH/Bank transfer (enterprise plans)</li>
                            <li>Wire transfer (enterprise plans)</li>
                            <li>Purchase orders (approved customers only)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3">5.2 Automatic Renewal</h3>
                        <p className="text-light mb-4">
                            Subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date. Renewal is at the then-current pricing.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3">5.3 Refund Policy</h3>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Annual Plans: No refunds for early termination</li>
                            <li>Monthly Plans: No refunds for partial months</li>
                            <li>Setup Fees: Non-refundable</li>
                            <li>Cancellation: Must provide 30 days' notice</li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Customer Data</h2>

                        <h3 className="text-xl font-semibold text-white mb-3">6.1 Data Ownership</h3>
                        <p className="text-light mb-6">
                            You retain all ownership rights to data you upload, submit, or process through our Services ("Customer Data"). We claim no ownership over Customer Data.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3">6.2 Prohibited Data</h3>
                        <p className="text-light mb-4">You may not upload or process:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Data obtained illegally or without proper authorization</li>
                            <li>Data that infringes intellectual property rights</li>
                            <li>Personal data of children under 13 (without proper consent)</li>
                            <li>Malware, viruses, or malicious code</li>
                            <li>Data used for illegal purposes</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3">6.3 Data Export</h3>
                        <p className="text-light mb-4">You may export Customer Data at any time through:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Platform UI export functions</li>
                            <li>API endpoints</li>
                            <li>Bulk export requests (enterprise plans)</li>
                            <li>Manual CSV/JSON downloads</li>
                        </ul>
                    </section>

                    {/* Section 7 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property Rights</h2>

                        <h3 className="text-xl font-semibold text-white mb-3">7.1 Nizsoft Property</h3>
                        <p className="text-light mb-4">We retain all rights, title, and interest in:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>The platform and Services</li>
                            <li>Software, code, and technology</li>
                            <li>Documentation and materials</li>
                            <li>Trademarks, logos, and branding</li>
                            <li>Patents, copyrights, and trade secrets</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3">7.2 Restrictions</h3>
                        <p className="text-light mb-4">You may not:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Copy, modify, or create derivative works of the Services</li>
                            <li>Reverse engineer, decompile, or disassemble the platform</li>
                            <li>Remove or alter proprietary notices</li>
                            <li>Resell, sublicense, or transfer the Services</li>
                            <li>Use the Services to build a competing product</li>
                        </ul>
                    </section>

                    {/* Section 8 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">8. Acceptable Use Policy</h2>

                        <h3 className="text-xl font-semibold text-white mb-3">8.1 Prohibited Activities</h3>
                        <p className="text-light mb-4">You may not use the Services to:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Violate laws, regulations, or rights of others</li>
                            <li>Engage in fraudulent activities</li>
                            <li>Transmit harmful code (viruses, malware, etc.)</li>
                            <li>Interfere with or disrupt the Services</li>
                            <li>Attempt unauthorized access to systems or accounts</li>
                            <li>Spam, phish, or send unsolicited communications</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3">8.2 Compliance with Laws</h3>
                        <p className="text-light mb-4">You must comply with all applicable laws, including:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Insurance regulations and licensing requirements</li>
                            <li>Data protection and privacy laws (GDPR, CCPA, etc.)</li>
                            <li>Anti-money laundering (AML) regulations</li>
                            <li>Consumer protection laws</li>
                        </ul>
                    </section>

                    {/* Section 9 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Service Level Agreement (SLA)</h2>

                        <h3 className="text-xl font-semibold text-white mb-3">9.1 Uptime Commitment</h3>
                        <p className="text-light mb-4">We commit to the following uptime targets:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Starter Plan: 99.0% monthly uptime</li>
                            <li>Professional Plan: 99.5% monthly uptime</li>
                            <li>Enterprise Plan: 99.9% monthly uptime</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3">9.2 Service Credits</h3>
                        <p className="text-light mb-4">If we fail to meet the uptime commitment:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>99.0%-98.0%: 10% service credit</li>
                            <li>98.0%-95.0%: 25% service credit</li>
                            <li>Below 95.0%: 50% service credit</li>
                        </ul>
                    </section>

                    {/* Section 10 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">10. Support and Maintenance</h2>

                        <h3 className="text-xl font-semibold text-white mb-3">10.1 Technical Support</h3>
                        <div className="space-y-4 mb-6">
                            <div className="bg-dark-light border border-white/10 rounded-lg p-4">
                                <p className="text-white font-semibold mb-2">Starter Plan:</p>
                                <ul className="list-disc list-inside text-light space-y-1">
                                    <li>Email support</li>
                                    <li>Knowledge base and documentation</li>
                                    <li>Response time: Within 48 business hours</li>
                                </ul>
                            </div>
                            <div className="bg-dark-light border border-white/10 rounded-lg p-4">
                                <p className="text-white font-semibold mb-2">Professional Plan:</p>
                                <ul className="list-disc list-inside text-light space-y-1">
                                    <li>Email and live chat support</li>
                                    <li>Priority email support</li>
                                    <li>Response time: Within 24 business hours</li>
                                </ul>
                            </div>
                            <div className="bg-dark-light border border-white/10 rounded-lg p-4">
                                <p className="text-white font-semibold mb-2">Enterprise Plan:</p>
                                <ul className="list-disc list-inside text-light space-y-1">
                                    <li>Phone, email, and chat support</li>
                                    <li>Dedicated account manager</li>
                                    <li>24/7 emergency support for critical issues</li>
                                    <li>Response time: Within 4 business hours</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">11. Warranties and Disclaimers</h2>

                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-semibold text-white mb-3">DISCLAIMER OF WARRANTIES</h3>
                            <p className="text-light mb-4">
                                EXCEPT AS EXPRESSLY PROVIDED, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                            </p>
                            <ul className="list-disc list-inside text-light space-y-2">
                                <li>IMPLIED WARRANTIES OF MERCHANTABILITY</li>
                                <li>IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE</li>
                                <li>IMPLIED WARRANTIES OF NON-INFRINGEMENT</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 12 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">12. Limitation of Liability</h2>

                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-semibold text-white mb-3">LIABILITY CAP</h3>
                            <p className="text-light mb-4">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY SHALL NOT EXCEED:
                            </p>
                            <ul className="list-disc list-inside text-light space-y-2">
                                <li>For monthly subscriptions: Three (3) times your monthly fees</li>
                                <li>For annual subscriptions: The total fees paid in the 12 months preceding the claim</li>
                            </ul>
                        </div>

                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-semibold text-white mb-3">EXCLUSION OF CONSEQUENTIAL DAMAGES</h3>
                            <p className="text-light mb-4">WE SHALL NOT BE LIABLE FOR:</p>
                            <ul className="list-disc list-inside text-light space-y-2">
                                <li>INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES</li>
                                <li>LOSS OF PROFITS, REVENUE, OR BUSINESS OPPORTUNITIES</li>
                                <li>LOSS OF DATA</li>
                                <li>BUSINESS INTERRUPTION</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 13 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">13. Term and Termination</h2>

                        <h3 className="text-xl font-semibold text-white mb-3">13.1 Cancellation</h3>
                        <p className="text-light mb-4">You may cancel your subscription by:</p>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Providing 30 days' written notice before renewal</li>
                            <li>Canceling through your account settings</li>
                            <li>Contacting customer support</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3">13.2 Data Retention After Termination</h3>
                        <ul className="list-disc list-inside text-light mb-6 space-y-2">
                            <li>Days 1-30: Full access to export Customer Data</li>
                            <li>Days 31-90: Data retained but account suspended</li>
                            <li>After 90 days: Customer Data permanently deleted</li>
                        </ul>
                    </section>

                    {/* Contact Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">14. Contact Information</h2>
                        <div className="bg-dark-light border border-white/10 rounded-lg p-6">
                            <p className="text-white font-semibold mb-4">Nizsoft Insurance Platform</p>
                            <div className="space-y-2 text-light">
                                <p><strong>General:</strong> <a href="mailto:info@nizsoft.com" className="text-primary hover:text-secondary">info@nizsoft.com</a></p>
                                <p><strong>Sales:</strong> <a href="mailto:sales@nizsoft.com" className="text-primary hover:text-secondary">sales@nizsoft.com</a></p>
                                <p><strong>Support:</strong> <a href="mailto:support@nizsoft.com" className="text-primary hover:text-secondary">support@nizsoft.com</a></p>
                                <p><strong>Legal:</strong> <a href="mailto:legal@nizsoft.com" className="text-primary hover:text-secondary">legal@nizsoft.com</a></p>
                                <p><strong>Website:</strong> <a href="https://www.nizsoft.com" className="text-primary hover:text-secondary">https://www.nizsoft.com</a></p>
                            </div>
                        </div>
                    </section>

                    {/* Acceptance */}
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mt-12">
                        <h3 className="text-xl font-semibold text-white mb-4">Acceptance</h3>
                        <p className="text-light mb-4">
                            BY CLICKING "I ACCEPT," CREATING AN ACCOUNT, OR USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
                        </p>
                        <p className="text-light">
                            IF YOU ARE ENTERING INTO THESE TERMS ON BEHALF OF AN ORGANIZATION, YOU REPRESENT AND WARRANT THAT YOU HAVE THE AUTHORITY TO BIND THAT ORGANIZATION TO THESE TERMS.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    )
}
