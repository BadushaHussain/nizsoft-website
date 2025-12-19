import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import { HiUserGroup, HiScale, HiDocumentText, HiCurrencyDollar, HiChartBar, HiGlobeAlt } from 'react-icons/hi2'

export const metadata = {
    title: 'Broker & Intermediary Platform | NIZSOFT',
    description: 'Multi-carrier platform for insurance brokers with comparative rating, policy placement, commission management, and client portals.',
}

export default function BrokersPage() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-4 md:pt-6 bg-gradient-to-br from-accent/5 to-transparent">
                <div className="max-w-6xl px-6 lg:px-8 text-center relative z-10 py-20">
                    <div className="inline-block px-7 py-3 bg-accent/15 border border-accent/40 rounded-full text-accent text-xs lg:text-sm font-bold uppercase tracking-wider mb-4">
                        <HiUserGroup className="inline-block mr-2 -mt-1" />
                        Broker & Intermediary Solutions
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
                        Multi-Carrier Broker Platform
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Comprehensive platform for insurance brokers and intermediaries. Compare rates across carriers, streamline policy placement, manage commissions, and deliver exceptional client experiences.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                        >
                            Book a Demo
                        </Link>
                        <Link
                            href="/platform"
                            className="px-8 py-4 bg-white dark:bg-dark-light border-2 border-gray-200 dark:border-white/10 hover:border-accent dark:hover:border-accent text-gray-900 dark:text-white rounded-lg font-semibold transition-all"
                        >
                            Explore Platform
                        </Link>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <SectionHeader
                    label="Key Features"
                    title="Comprehensive Broker Platform Capabilities"
                    description="Everything you need to run a successful insurance brokerage"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <Card
                        icon={<HiGlobeAlt className="text-accent" />}
                        title="Multi-Carrier Platform"
                        description="Unified platform integrating multiple insurance carriers with real-time connectivity, quote aggregation, and policy management."
                    />
                    <Card
                        icon={<HiScale className="text-accent" />}
                        title="Comparative Rating"
                        description="Side-by-side quote comparison across carriers with coverage analysis, pricing optimization, and recommendation engine."
                    />
                    <Card
                        icon={<HiDocumentText className="text-accent" />}
                        title="Policy Placement"
                        description="Streamlined policy placement workflow with e-signature, document management, and automated carrier submission."
                    />
                    <Card
                        icon={<HiCurrencyDollar className="text-accent" />}
                        title="Commission Management"
                        description="Complete commission tracking, reconciliation, split management, and automated producer compensation calculations."
                    />
                    <Card
                        icon={<HiUserGroup className="text-accent" />}
                        title="Client Portals"
                        description="Self-service client portals for policy access, certificate requests, claims submission, and payment processing."
                    />
                    <Card
                        icon={<HiChartBar className="text-accent" />}
                        title="Agency Management"
                        description="Comprehensive agency management system with CRM, pipeline tracking, renewal management, and performance analytics."
                    />
                </div>
            </section>

            {/* Workflows */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 bg-gray-50 dark:bg-dark-light/30">
                <SectionHeader
                    label="Workflows"
                    title="Streamlined Broker Processes"
                    description="Optimize every step of the insurance brokerage lifecycle"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Quote & Bind</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>Multi-carrier quote request automation</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>Real-time quote aggregation and comparison</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>Coverage gap analysis and recommendations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>Proposal generation and client presentation</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>Electronic binding and policy issuance</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Client Management</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>Centralized client database and CRM</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>Renewal tracking and automated reminders</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>Certificate of insurance generation</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>Claims advocacy and tracking</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>Client communication and document portal</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Compliance */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <SectionHeader
                    label="Compliance"
                    title="Broker Regulatory Compliance"
                    description="Stay compliant with broker and intermediary regulations"
                />

                <div className="bg-white dark:bg-dark-light p-8 lg:p-12 rounded-xl border border-gray-200 dark:border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Regulatory Requirements</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>✓ Producer licensing management</li>
                                <li>✓ E&O (Errors & Omissions) tracking</li>
                                <li>✓ Disclosure requirements</li>
                                <li>✓ Anti-rebating compliance</li>
                                <li>✓ Privacy and data protection</li>
                                <li>✓ Market conduct regulations</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Business Operations</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>✓ Commission reconciliation</li>
                                <li>✓ Producer splits and overrides</li>
                                <li>✓ Agency bill vs. direct bill</li>
                                <li>✓ Trust accounting</li>
                                <li>✓ Carrier appointment management</li>
                                <li>✓ Performance analytics and reporting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Empower Your Insurance Brokerage?
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        See how NIZSOFT can help you streamline operations, improve client service, and grow your brokerage business.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-accent hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
                        >
                            Schedule a Demo
                        </Link>
                        <Link
                            href="/industries"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white rounded-lg font-semibold transition-all"
                        >
                            View All Industries
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
