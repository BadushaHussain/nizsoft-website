import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import { HiUserGroup, HiAcademicCap, HiGlobeAlt, HiChartBar } from 'react-icons/hi2'

export const metadata = {
    title: 'Leadership | NIZSOFT',
    description: 'Experienced team with backgrounds from leading insurance companies, technology firms, and enterprise software vendors.',
}

export default function LeadershipPage() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-4 md:pt-6 bg-gradient-to-br from-secondary/5 to-transparent">
                <div className="max-w-6xl px-6 lg:px-8 text-center relative z-10 py-20">
                    <div className="inline-block px-7 py-3 bg-secondary/15 border border-secondary/40 rounded-full text-secondary text-xs lg:text-sm font-bold uppercase tracking-wider mb-4">
                        Leadership
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
                        Experienced Team Driving Innovation
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Industry veterans with deep expertise in insurance and technology
                    </p>
                </div>
            </section>

            {/* Leadership Overview */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <SectionHeader
                    label="Our Team"
                    title="World-Class Expertise"
                    description="Combining insurance domain knowledge with cutting-edge technology"
                />

                <div className="bg-white dark:bg-dark-light p-8 lg:p-12 rounded-2xl border border-gray-200 dark:border-white/10 mb-12">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        Our leadership team brings together decades of experience from leading insurance companies, technology firms, and enterprise software vendors. This unique combination ensures we understand both the technical challenges and business needs of modern insurers.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        With backgrounds spanning underwriting, claims, actuarial science, software engineering, product management, and enterprise sales, our team has the comprehensive expertise needed to build a truly production-ready insurance platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    <Card
                        icon={<HiUserGroup className="text-secondary" />}
                        title="Insurance Expertise"
                        description="Veterans from top global insurers and reinsurers with deep domain knowledge in life, health, P&C, and specialty lines."
                    />
                    <Card
                        icon={<HiAcademicCap className="text-primary" />}
                        title="Technology Leadership"
                        description="Engineers and architects from leading tech companies with expertise in cloud-native architecture, AI/ML, and enterprise software."
                    />
                    <Card
                        icon={<HiChartBar className="text-accent" />}
                        title="Enterprise Software"
                        description="Product and business leaders from major software vendors with experience scaling SaaS platforms globally."
                    />
                </div>
            </section>

            {/* Values */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 bg-gray-50 dark:bg-dark-light/30">
                <SectionHeader
                    label="Our Values"
                    title="What Drives Us"
                    description="The principles that guide our work and culture"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Customer Success</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            We measure our success by our customers' success. Every decision is made with the goal of helping insurers transform their operations and deliver better outcomes.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Innovation with Reliability</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            We combine startup agility with enterprise reliability. Our platform is production-ready from day one, not a minimum viable product.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Continuous Learning</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            The insurance industry is constantly evolving. We stay ahead by continuously learning, adapting, and incorporating the latest technologies and best practices.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Transparency & Trust</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            We build trust through transparency in our technology, pricing, and partnerships. Our customers know exactly what they're getting.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <div className="bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Want to Learn More About Our Team?
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Connect with our leadership team to discuss how NIZSOFT can transform your insurance operations.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-secondary hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
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
