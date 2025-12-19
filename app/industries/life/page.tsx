import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import { HiHeart, HiDocumentText, HiCurrencyDollar, HiShieldCheck, HiUsers, HiChartBar } from 'react-icons/hi2'

export const metadata = {
    title: 'Life Insurance Platform | NIZSOFT',
    description: 'Comprehensive life insurance platform with medical underwriting, beneficiary management, policy loans, and full regulatory compliance.',
}

export default function LifeInsurancePage() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-4 md:pt-6 bg-gradient-to-br from-error/5 to-transparent">
                <div className="max-w-6xl px-6 lg:px-8 text-center relative z-10 py-20">
                    <div className="inline-block px-7 py-3 bg-error/15 border border-error/40 rounded-full text-error text-xs lg:text-sm font-bold uppercase tracking-wider mb-4">
                        <HiHeart className="inline-block mr-2 -mt-1" />
                        Life Insurance Solutions
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
                        Modern Life Insurance Platform
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Complete end-to-end platform for term, whole life, and universal life insurance. Streamline medical underwriting, beneficiary management, and policy administration with full regulatory compliance.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-error hover:bg-error/90 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                        >
                            Book a Demo
                        </Link>
                        <Link
                            href="/platform"
                            className="px-8 py-4 bg-white dark:bg-dark-light border-2 border-gray-200 dark:border-white/10 hover:border-error dark:hover:border-error text-gray-900 dark:text-white rounded-lg font-semibold transition-all"
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
                    title="Comprehensive Life Insurance Capabilities"
                    description="Everything you need to manage life insurance operations efficiently"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <Card
                        icon={<HiDocumentText className="text-error" />}
                        title="Medical Underwriting"
                        description="Automated medical underwriting workflows with risk assessment, medical history integration, and intelligent decision support for faster policy issuance."
                    />
                    <Card
                        icon={<HiUsers className="text-error" />}
                        title="Beneficiary Management"
                        description="Complete beneficiary administration with primary and contingent beneficiaries, percentage allocation, and automated notification workflows."
                    />
                    <Card
                        icon={<HiCurrencyDollar className="text-error" />}
                        title="Policy Loans & Surrenders"
                        description="Automated policy loan processing, cash value calculations, surrender value management, and loan repayment tracking with interest calculations."
                    />
                    <Card
                        icon={<HiShieldCheck className="text-error" />}
                        title="Regulatory Compliance"
                        description="Built-in compliance with life insurance regulations, automated reporting, state-specific requirements, and audit trail management."
                    />
                    <Card
                        icon={<HiChartBar className="text-error" />}
                        title="Product Flexibility"
                        description="Support for term life, whole life, universal life, and variable life products with configurable riders and benefits."
                    />
                    <Card
                        icon={<HiDocumentText className="text-error" />}
                        title="Claims Processing"
                        description="Streamlined death claims processing with beneficiary verification, document management, and automated payout calculations."
                    />
                </div>
            </section>

            {/* Workflows */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 bg-gray-50 dark:bg-dark-light/30">
                <SectionHeader
                    label="Workflows"
                    title="Streamlined Life Insurance Processes"
                    description="Optimize every step of the life insurance lifecycle"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">New Business Processing</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="text-error mr-2">•</span>
                                <span>Online application with e-signature and identity verification</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-error mr-2">•</span>
                                <span>Automated medical underwriting with risk scoring</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-error mr-2">•</span>
                                <span>Medical records retrieval and analysis</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-error mr-2">•</span>
                                <span>Underwriter workbench with decision support</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-error mr-2">•</span>
                                <span>Policy issuance and delivery automation</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Policy Administration</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="text-error mr-2">•</span>
                                <span>Premium billing and payment processing</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-error mr-2">•</span>
                                <span>Policy changes and endorsements</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-error mr-2">•</span>
                                <span>Cash value and dividend management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-error mr-2">•</span>
                                <span>Beneficiary updates and verification</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-error mr-2">•</span>
                                <span>Policy loan and surrender processing</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Compliance */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <SectionHeader
                    label="Compliance"
                    title="Life Insurance Regulatory Compliance"
                    description="Stay compliant with evolving life insurance regulations"
                />

                <div className="bg-white dark:bg-dark-light p-8 lg:p-12 rounded-xl border border-gray-200 dark:border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Regulatory Requirements</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>✓ State insurance department reporting</li>
                                <li>✓ NAIC compliance and data standards</li>
                                <li>✓ Solvency II requirements</li>
                                <li>✓ Anti-money laundering (AML) checks</li>
                                <li>✓ Know Your Customer (KYC) verification</li>
                                <li>✓ Privacy and data protection (GDPR, CCPA)</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Automated Compliance</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>✓ Automated regulatory reporting</li>
                                <li>✓ Audit trail and documentation</li>
                                <li>✓ Policy form compliance checking</li>
                                <li>✓ Rate and rule validation</li>
                                <li>✓ Agent licensing verification</li>
                                <li>✓ Complaint tracking and resolution</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <div className="bg-gradient-to-r from-error to-error/80 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Life Insurance Operations?
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        See how NIZSOFT can help you streamline underwriting, improve customer experience, and ensure regulatory compliance.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-error hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
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
