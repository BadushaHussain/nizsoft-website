import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import { HiBriefcase, HiCodeBracket, HiPresentationChartLine, HiAcademicCap, HiGlobeAlt, HiSparkles } from 'react-icons/hi2'

export const metadata = {
    title: 'Careers | NIZSOFT',
    description: 'Join our growing team. We\'re hiring engineers, product managers, and insurance domain experts. Competitive compensation with equity.',
}

export default function CareersPage() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-4 md:pt-6 bg-gradient-to-br from-success/5 to-transparent">
                <div className="max-w-6xl px-6 lg:px-8 text-center relative z-10 py-20">
                    <div className="inline-block px-7 py-3 bg-success/15 border border-success/40 rounded-full text-success text-xs lg:text-sm font-bold uppercase tracking-wider mb-4">
                        Careers
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
                        Build the Future with Us
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Join our growing team transforming insurance technology globally
                    </p>
                </div>
            </section>

            {/* Why Join */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <SectionHeader
                    label="Why NIZSOFT"
                    title="Work on Meaningful Problems"
                    description="Make an impact in a $6 trillion industry"
                />

                <div className="bg-white dark:bg-dark-light p-8 lg:p-12 rounded-2xl border border-gray-200 dark:border-white/10 mb-12">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        Join our growing team. We're hiring engineers, product managers, and insurance domain experts. Competitive compensation with equity.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        At NIZSOFT, you'll work on challenging technical problems while making a real difference in how insurance companies operate. Our platform serves millions of policyholders and processes billions in premiums, giving you the opportunity to see the direct impact of your work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    <Card
                        icon={<HiSparkles className="text-success" />}
                        title="Cutting-Edge Technology"
                        description="Work with modern tech stack including React, Node.js, Python, Kubernetes, and cloud-native architecture."
                    />
                    <Card
                        icon={<HiGlobeAlt className="text-primary" />}
                        title="Global Impact"
                        description="Build solutions used by insurers across multiple countries and insurance verticals."
                    />
                    <Card
                        icon={<HiAcademicCap className="text-info" />}
                        title="Learning & Growth"
                        description="Continuous learning opportunities, mentorship programs, and conference attendance."
                    />
                </div>
            </section>

            {/* Open Positions */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 bg-gray-50 dark:bg-dark-light/30">
                <SectionHeader
                    label="Open Positions"
                    title="We're Hiring"
                    description="Join our team in Abu Dhabi or work remotely"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <a href="/company/careers/engineering" className="block hover:scale-105 transition-transform">
                        <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10 h-full">
                            <HiCodeBracket className="w-12 h-12 text-success mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Engineering</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                                <li>• Backend Engineers (Golang, Python)</li>
                                <li>• Frontend Engineers (React, Next.js, Java)</li>
                                <li>• DevOps Engineers</li>
                                <li>• Cloud Engineers (DevOps, SecOps)</li>
                            </ul>
                            <span className="text-success hover:underline font-semibold">
                                View Positions →
                            </span>
                        </div>
                    </a>

                    <a href="/company/careers/product-design" className="block hover:scale-105 transition-transform">
                        <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10 h-full">
                            <HiPresentationChartLine className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Product & Design</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                                <li>• Product Managers</li>
                                <li>• UX/UI Designers</li>
                                <li>• Product Designers</li>
                                <li>• UX Researchers</li>
                                <li>• Technical Writers</li>
                            </ul>
                            <span className="text-primary hover:underline font-semibold">
                                View Positions →
                            </span>
                        </div>
                    </a>

                    <a href="/company/careers/insurance" className="block hover:scale-105 transition-transform">
                        <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10 h-full">
                            <HiBriefcase className="w-12 h-12 text-info mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Insurance Domain</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                                <li>• Insurance Consultants</li>
                                <li>• Underwriting Experts</li>
                                <li>• Actuaries</li>
                                <li>• Claims Specialists</li>
                                <li>• Compliance Experts</li>
                            </ul>
                            <span className="text-info hover:underline font-semibold">
                                View Positions →
                            </span>
                        </div>
                    </a>
                </div>
            </section>

            {/* Benefits */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <SectionHeader
                    label="Benefits"
                    title="Competitive Compensation & Perks"
                    description="We take care of our team"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">💰 Compensation</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>• Competitive salary packages</li>
                            <li>• Equity/stock options</li>
                            <li>• Performance bonuses</li>
                            <li>• Annual salary reviews</li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">🏥 Health & Wellness</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>• Comprehensive health insurance</li>
                            <li>• Dental and vision coverage</li>
                            <li>• Mental health support</li>
                            <li>• Wellness programs</li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">🌴 Time Off</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>• Generous vacation policy</li>
                            <li>• Paid holidays</li>
                            <li>• Sick leave</li>
                            <li>• Parental leave</li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">📚 Growth</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>• Learning & development budget</li>
                            <li>• Conference attendance</li>
                            <li>• Online courses and certifications</li>
                            <li>• Mentorship programs</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <div className="bg-gradient-to-r from-success to-success/80 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Join Our Team?
                    </h2>
                    <p className="text-xl mb-4 text-white/90 max-w-2xl mx-auto">
                        Send us your resume and let's discuss how you can make an impact at NIZSOFT.
                    </p>
                    <p className="text-lg mb-8 text-white/90">
                        Email your resume to{' '}
                        <a href="mailto:careers@nizsoft.com" className="font-bold underline hover:text-white">
                            careers@nizsoft.com
                        </a>
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-success hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/company"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white rounded-lg font-semibold transition-all"
                        >
                            Back to Company
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
