import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import { HiArrowPath, HiDocumentText, HiChartBar, HiGlobeAlt, HiCurrencyDollar, HiServer } from 'react-icons/hi2'

export const metadata = {
    title: 'Reinsurance Platform | NIZSOFT',
    description: 'Advanced reinsurance platform with bordereaux processing, loss development tracking, cedant portals, and automated accounting.',
}

export default function ReinsurancePage() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-4 md:pt-6 bg-gradient-to-br from-secondary/5 to-transparent">
                <div className="max-w-6xl px-6 lg:px-8 text-center relative z-10 py-20">
                    <div className="inline-block px-7 py-3 bg-secondary/15 border border-secondary/40 rounded-full text-secondary text-xs lg:text-sm font-bold uppercase tracking-wider mb-4">
                        <HiArrowPath className="inline-block mr-2 -mt-1" />
                        Reinsurance Solutions
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
                        Advanced Reinsurance Platform
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Comprehensive platform for treaty and facultative operations. Streamline bordereaux processing, track loss development, manage cedant portals, and automate complex accounting workflows.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                        >
                            Book a Demo
                        </Link>
                        <Link
                            href="/platform"
                            className="px-8 py-4 bg-white dark:bg-dark-light border-2 border-gray-200 dark:border-white/10 hover:border-secondary dark:hover:border-secondary text-gray-900 dark:text-white rounded-lg font-semibold transition-all"
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
                    title="Comprehensive Reinsurance Capabilities"
                    description="Everything you need to manage reinsurance operations efficiently"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <Card
                        icon={<HiDocumentText className="text-secondary" />}
                        title="Bordereaux Processing"
                        description="Automated bordereaux ingestion, validation, and processing with support for multiple formats and reconciliation workflows."
                    />
                    <Card
                        icon={<HiChartBar className="text-secondary" />}
                        title="Loss Development"
                        description="Comprehensive loss development tracking, triangle analysis, IBNR calculations, and reserve adequacy monitoring."
                    />
                    <Card
                        icon={<HiGlobeAlt className="text-secondary" />}
                        title="Cedant Portals"
                        description="Self-service cedant portals for policy submission, claims reporting, bordereaux upload, and real-time account visibility."
                    />
                    <Card
                        icon={<HiCurrencyDollar className="text-secondary" />}
                        title="Automated Accounting"
                        description="Complete reinsurance accounting with premium calculations, cash calls, profit commissions, and settlement processing."
                    />
                    <Card
                        icon={<HiServer className="text-secondary" />}
                        title="Treaty Management"
                        description="Full treaty lifecycle management including quota share, surplus, excess of loss, and stop loss treaties."
                    />
                    <Card
                        icon={<HiDocumentText className="text-secondary" />}
                        title="Facultative Operations"
                        description="Streamlined facultative placement with submission management, quote comparison, and binding authority."
                    />
                </div>
            </section>

            {/* Workflows */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 bg-gray-50 dark:bg-dark-light/30">
                <SectionHeader
                    label="Workflows"
                    title="Streamlined Reinsurance Processes"
                    description="Optimize every step of the reinsurance lifecycle"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Treaty Administration</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Treaty setup and configuration</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Automated premium calculations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Bordereaux generation and validation</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Cash call processing</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Profit commission calculations</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Claims & Recoveries</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Claims notification to reinsurers</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Recovery calculations and tracking</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Commutation processing</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Dispute resolution workflows</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Reinsurance receivables management</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Compliance */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <SectionHeader
                    label="Compliance"
                    title="Reinsurance Regulatory Compliance"
                    description="Stay compliant with reinsurance regulations and standards"
                />

                <div className="bg-white dark:bg-dark-light p-8 lg:p-12 rounded-xl border border-gray-200 dark:border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Regulatory Requirements</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>✓ Solvency II compliance</li>
                                <li>✓ NAIC reinsurance accounting</li>
                                <li>✓ Collateral requirements</li>
                                <li>✓ Credit for reinsurance rules</li>
                                <li>✓ Reinsurer authorization tracking</li>
                                <li>✓ Regulatory reporting (Schedule F, S)</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Data Standards</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>✓ ACORD reinsurance standards</li>
                                <li>✓ Bordereaux data formats</li>
                                <li>✓ RITC (Reinsurance to Close) calculations</li>
                                <li>✓ Loss triangle methodologies</li>
                                <li>✓ Actuarial data standards</li>
                                <li>✓ Financial reporting integration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <div className="bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Modernize Your Reinsurance Operations?
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        See how NIZSOFT can help you automate bordereaux processing, improve cedant relationships, and streamline accounting.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-secondary hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
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
