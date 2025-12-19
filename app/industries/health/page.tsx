import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import { HiBuildingOffice2, HiUserGroup, HiDocumentCheck, HiServer, HiShieldCheck, HiChartBar } from 'react-icons/hi2'

export const metadata = {
    title: 'Health Insurance Platform | NIZSOFT',
    description: 'Modern health insurance platform with provider network management, pre-authorization workflows, HL7/FHIR integration, and HIPAA compliance.',
}

export default function HealthInsurancePage() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-4 md:pt-6 bg-gradient-to-br from-info/5 to-transparent">
                <div className="max-w-6xl px-6 lg:px-8 text-center relative z-10 py-20">
                    <div className="inline-block px-7 py-3 bg-info/15 border border-info/40 rounded-full text-info text-xs lg:text-sm font-bold uppercase tracking-wider mb-4">
                        <HiBuildingOffice2 className="inline-block mr-2 -mt-1" />
                        Health Insurance Solutions
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
                        Next-Gen Health Insurance Platform
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Comprehensive platform for individual and group health plans. Manage provider networks, streamline pre-authorizations, integrate with HL7/FHIR systems, and ensure HIPAA compliance.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-info hover:bg-info/90 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                        >
                            Book a Demo
                        </Link>
                        <Link
                            href="/platform"
                            className="px-8 py-4 bg-white dark:bg-dark-light border-2 border-gray-200 dark:border-white/10 hover:border-info dark:hover:border-info text-gray-900 dark:text-white rounded-lg font-semibold transition-all"
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
                    title="Comprehensive Health Insurance Capabilities"
                    description="Everything you need to manage health insurance operations efficiently"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <Card
                        icon={<HiUserGroup className="text-info" />}
                        title="Provider Network Management"
                        description="Complete provider network administration with credentialing, contract management, network adequacy analysis, and provider portal access."
                    />
                    <Card
                        icon={<HiDocumentCheck className="text-info" />}
                        title="Pre-Authorization Workflows"
                        description="Automated pre-authorization processing with clinical decision support, medical necessity review, and real-time eligibility verification."
                    />
                    <Card
                        icon={<HiServer className="text-info" />}
                        title="HL7/FHIR Integration"
                        description="Seamless integration with healthcare systems using HL7 and FHIR standards for claims, eligibility, and clinical data exchange."
                    />
                    <Card
                        icon={<HiShieldCheck className="text-info" />}
                        title="HIPAA Compliance"
                        description="Built-in HIPAA compliance with encrypted data storage, audit logging, access controls, and privacy rule enforcement."
                    />
                    <Card
                        icon={<HiChartBar className="text-info" />}
                        title="Utilization Management"
                        description="Comprehensive utilization review, case management, disease management programs, and cost containment analytics."
                    />
                    <Card
                        icon={<HiDocumentCheck className="text-info" />}
                        title="Claims Adjudication"
                        description="Automated claims processing with medical coding validation, duplicate detection, and coordination of benefits."
                    />
                </div>
            </section>

            {/* Workflows */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 bg-gray-50 dark:bg-dark-light/30">
                <SectionHeader
                    label="Workflows"
                    title="Streamlined Health Insurance Processes"
                    description="Optimize every step of the health insurance lifecycle"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Enrollment & Eligibility</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="text-info mr-2">•</span>
                                <span>Online enrollment with plan comparison tools</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-info mr-2">•</span>
                                <span>Real-time eligibility verification (270/271 EDI)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-info mr-2">•</span>
                                <span>Dependent and family coverage management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-info mr-2">•</span>
                                <span>Qualifying life events processing</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-info mr-2">•</span>
                                <span>Member ID card generation and distribution</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Claims Processing</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="text-info mr-2">•</span>
                                <span>EDI claims submission (837 transactions)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-info mr-2">•</span>
                                <span>Automated adjudication with business rules</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-info mr-2">•</span>
                                <span>Medical coding validation (ICD-10, CPT)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-info mr-2">•</span>
                                <span>Coordination of benefits (COB)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-info mr-2">•</span>
                                <span>Explanation of benefits (EOB) generation</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Compliance */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <SectionHeader
                    label="Compliance"
                    title="Health Insurance Regulatory Compliance"
                    description="Stay compliant with healthcare regulations and standards"
                />

                <div className="bg-white dark:bg-dark-light p-8 lg:p-12 rounded-xl border border-gray-200 dark:border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Regulatory Requirements</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>✓ HIPAA Privacy and Security Rules</li>
                                <li>✓ Affordable Care Act (ACA) compliance</li>
                                <li>✓ State insurance regulations</li>
                                <li>✓ Medicare and Medicaid requirements</li>
                                <li>✓ Mental Health Parity Act</li>
                                <li>✓ No Surprises Act compliance</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Data Standards</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>✓ HL7 v2.x and FHIR integration</li>
                                <li>✓ X12 EDI transactions (270, 271, 837, 835)</li>
                                <li>✓ ICD-10 and CPT coding standards</li>
                                <li>✓ NCPDP for pharmacy claims</li>
                                <li>✓ CAQH credentialing standards</li>
                                <li>✓ HEDIS quality measures</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <div className="bg-gradient-to-r from-info to-info/80 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Modernize Your Health Insurance Operations?
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        See how NIZSOFT can help you improve member experience, streamline claims processing, and ensure regulatory compliance.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-info hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
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
