import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import { HiBuildingOffice, HiGlobeAlt, HiShieldCheck, HiChartBar, HiDocumentText, HiCurrencyDollar } from 'react-icons/hi2'

export const metadata = {
    title: 'Property & Casualty Insurance Platform | NIZSOFT',
    description: 'Comprehensive P&C insurance platform with catastrophe modeling, reinsurance management, multi-peril policies, and exposure analysis.',
}

export default function PropertyCasualtyPage() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-4 md:pt-6 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="max-w-6xl px-6 lg:px-8 text-center relative z-10 py-20">
                    <div className="inline-block px-7 py-3 bg-primary/15 border border-primary/40 rounded-full text-primary text-xs lg:text-sm font-bold uppercase tracking-wider mb-4">
                        <HiBuildingOffice className="inline-block mr-2 -mt-1" />
                        Property & Casualty Solutions
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
                        Enterprise P&C Insurance Platform
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Comprehensive platform for commercial and personal P&C lines. Leverage catastrophe modeling, manage reinsurance, handle multi-peril policies, and perform sophisticated exposure analysis.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                        >
                            Book a Demo
                        </Link>
                        <Link
                            href="/platform"
                            className="px-8 py-4 bg-white dark:bg-dark-light border-2 border-gray-200 dark:border-white/10 hover:border-primary dark:hover:border-primary text-gray-900 dark:text-white rounded-lg font-semibold transition-all"
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
                    title="Comprehensive P&C Insurance Capabilities"
                    description="Everything you need to manage property and casualty insurance operations"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <Card
                        icon={<HiGlobeAlt className="text-primary" />}
                        title="Catastrophe Modeling"
                        description="Advanced CAT modeling integration with RMS, AIR, and CoreLogic for hurricane, earthquake, flood, and wildfire risk assessment."
                    />
                    <Card
                        icon={<HiCurrencyDollar className="text-primary" />}
                        title="Reinsurance Management"
                        description="Complete reinsurance administration with treaty management, facultative placement, bordereaux processing, and automated accounting."
                    />
                    <Card
                        icon={<HiDocumentText className="text-primary" />}
                        title="Multi-Peril Policies"
                        description="Flexible policy structure supporting multiple perils, coverages, and endorsements with complex rating algorithms."
                    />
                    <Card
                        icon={<HiChartBar className="text-primary" />}
                        title="Exposure Analysis"
                        description="Real-time exposure tracking, accumulation monitoring, geographic concentration analysis, and PML calculations."
                    />
                    <Card
                        icon={<HiShieldCheck className="text-primary" />}
                        title="Commercial Lines"
                        description="Comprehensive commercial insurance including general liability, workers' comp, commercial property, and package policies."
                    />
                    <Card
                        icon={<HiBuildingOffice className="text-primary" />}
                        title="Personal Lines"
                        description="Complete personal lines platform for homeowners, renters, condo, and umbrella policies with bundling capabilities."
                    />
                </div>
            </section>

            {/* Workflows */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 bg-gray-50 dark:bg-dark-light/30">
                <SectionHeader
                    label="Workflows"
                    title="Streamlined P&C Insurance Processes"
                    description="Optimize every step of the property and casualty insurance lifecycle"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Underwriting & Rating</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Property inspection and valuation tools</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Risk assessment with third-party data integration</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Complex rating algorithms for multi-peril policies</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Underwriter workbench with decision support</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Automated referral and approval workflows</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Claims Management</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>First notice of loss (FNOL) with mobile capture</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Adjuster assignment and field inspection</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Catastrophe claims management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Litigation and subrogation tracking</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Reserve management and IBNR calculations</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Compliance */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <SectionHeader
                    label="Compliance"
                    title="P&C Insurance Regulatory Compliance"
                    description="Stay compliant with property and casualty regulations"
                />

                <div className="bg-white dark:bg-dark-light p-8 lg:p-12 rounded-xl border border-gray-200 dark:border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Regulatory Requirements</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>✓ State rate and form filing</li>
                                <li>✓ NAIC statutory reporting</li>
                                <li>✓ Surplus lines compliance</li>
                                <li>✓ Workers' compensation regulations</li>
                                <li>✓ Flood insurance (NFIP) requirements</li>
                                <li>✓ Fair claims practices</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Data & Analytics</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>✓ ISO policy and claims data standards</li>
                                <li>✓ Catastrophe modeling integration</li>
                                <li>✓ Property data (CoreLogic, Verisk)</li>
                                <li>✓ Credit scoring (where permitted)</li>
                                <li>✓ Predictive analytics and ML models</li>
                                <li>✓ Loss ratio and combined ratio tracking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your P&C Insurance Operations?
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        See how NIZSOFT can help you manage complex risks, optimize underwriting, and improve claims outcomes.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-primary hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
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
