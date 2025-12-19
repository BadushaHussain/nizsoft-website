import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import { HiTruck, HiSignal, HiCalculator, HiMapPin, HiWrench, HiChartBar } from 'react-icons/hi2'

export const metadata = {
    title: 'Motor Insurance Platform | NIZSOFT',
    description: 'Advanced motor insurance platform with telematics integration, no-claims bonus management, geographic rating, and repair network coordination.',
}

export default function MotorInsurancePage() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-4 md:pt-6 bg-gradient-to-br from-warning/5 to-transparent">
                <div className="max-w-6xl px-6 lg:px-8 text-center relative z-10 py-20">
                    <div className="inline-block px-7 py-3 bg-warning/15 border border-warning/40 rounded-full text-warning text-xs lg:text-sm font-bold uppercase tracking-wider mb-4">
                        <HiTruck className="inline-block mr-2 -mt-1" />
                        Motor Insurance Solutions
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
                        Smart Motor Insurance Platform
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Comprehensive platform for auto and fleet coverage. Leverage telematics data, manage no-claims bonuses, implement geographic rating, and coordinate repair networks efficiently.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-warning hover:bg-warning/90 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                        >
                            Book a Demo
                        </Link>
                        <Link
                            href="/platform"
                            className="px-8 py-4 bg-white dark:bg-dark-light border-2 border-gray-200 dark:border-white/10 hover:border-warning dark:hover:border-warning text-gray-900 dark:text-white rounded-lg font-semibold transition-all"
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
                    title="Comprehensive Motor Insurance Capabilities"
                    description="Everything you need to manage auto and fleet insurance operations"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <Card
                        icon={<HiSignal className="text-warning" />}
                        title="Telematics Integration"
                        description="Real-time telematics data integration for usage-based insurance (UBI), driver behavior scoring, and dynamic premium adjustments."
                    />
                    <Card
                        icon={<HiCalculator className="text-warning" />}
                        title="No-Claims Bonus Management"
                        description="Automated NCB tracking, discount calculation, protection options, and transfer between policies with full audit trail."
                    />
                    <Card
                        icon={<HiMapPin className="text-warning" />}
                        title="Geographic Rating"
                        description="Advanced geographic rating engine with territory analysis, risk zone mapping, and location-based premium calculations."
                    />
                    <Card
                        icon={<HiWrench className="text-warning" />}
                        title="Repair Network Coordination"
                        description="Complete repair network management with approved repairer lists, job allocation, quality tracking, and payment processing."
                    />
                    <Card
                        icon={<HiChartBar className="text-warning" />}
                        title="Fleet Management"
                        description="Comprehensive fleet insurance administration with multi-vehicle policies, driver management, and fleet analytics."
                    />
                    <Card
                        icon={<HiTruck className="text-warning" />}
                        title="Claims Processing"
                        description="Streamlined motor claims with FNOL capture, damage assessment, repair authorization, and total loss handling."
                    />
                </div>
            </section>

            {/* Workflows */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 bg-gray-50 dark:bg-dark-light/30">
                <SectionHeader
                    label="Workflows"
                    title="Streamlined Motor Insurance Processes"
                    description="Optimize every step of the motor insurance lifecycle"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Quote & Bind</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="text-warning mr-2">•</span>
                                <span>Instant online quotes with vehicle lookup</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-warning mr-2">•</span>
                                <span>Driver history and MVR integration</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-warning mr-2">•</span>
                                <span>Multi-factor rating (age, location, vehicle, usage)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-warning mr-2">•</span>
                                <span>Telematics-based pricing options</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-warning mr-2">•</span>
                                <span>Digital policy issuance and delivery</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Claims Management</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="text-warning mr-2">•</span>
                                <span>First notice of loss (FNOL) via mobile app</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-warning mr-2">•</span>
                                <span>Photo-based damage assessment with AI</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-warning mr-2">•</span>
                                <span>Repair shop assignment and tracking</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-warning mr-2">•</span>
                                <span>Rental car coordination</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-warning mr-2">•</span>
                                <span>Subrogation and recovery management</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Compliance */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <SectionHeader
                    label="Compliance"
                    title="Motor Insurance Regulatory Compliance"
                    description="Stay compliant with auto insurance regulations"
                />

                <div className="bg-white dark:bg-dark-light p-8 lg:p-12 rounded-xl border border-gray-200 dark:border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Regulatory Requirements</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>✓ State minimum coverage requirements</li>
                                <li>✓ Financial responsibility laws</li>
                                <li>✓ Uninsured/underinsured motorist coverage</li>
                                <li>✓ Rate filing and approval processes</li>
                                <li>✓ Anti-discrimination regulations</li>
                                <li>✓ Consumer protection laws</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Data & Integration</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>✓ MVR (Motor Vehicle Record) integration</li>
                                <li>✓ VIN decoding and vehicle data</li>
                                <li>✓ CLUE (Comprehensive Loss Underwriting) reports</li>
                                <li>✓ Credit score integration (where permitted)</li>
                                <li>✓ Telematics data standards</li>
                                <li>✓ ISO ClaimSearch integration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <div className="bg-gradient-to-r from-warning to-warning/80 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Accelerate Your Motor Insurance Business?
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        See how NIZSOFT can help you leverage telematics, improve pricing accuracy, and deliver exceptional customer experience.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-warning hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
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
