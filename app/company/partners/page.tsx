import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import { HiGlobeAlt, HiShieldCheck, HiSparkles, HiServer, HiCloud, HiCog } from 'react-icons/hi2'

export const metadata = {
    title: 'Partners | NIZSOFT',
    description: 'Strategic partnerships with AWS, Azure, Oracle, and leading system integrators to ensure best-in-class implementation.',
}

export default function PartnersPage() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-4 md:pt-6 bg-gradient-to-br from-accent/5 to-transparent">
                <div className="max-w-6xl px-6 lg:px-8 text-center relative z-10 py-20">
                    <div className="inline-block px-7 py-3 bg-accent/15 border border-accent/40 rounded-full text-accent text-xs lg:text-sm font-bold uppercase tracking-wider mb-4">
                        Partners
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
                        Strategic Technology Partnerships
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Collaborating with industry leaders to deliver best-in-class solutions
                    </p>
                </div>
            </section>

            {/* Partners Overview */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <SectionHeader
                    label="Our Ecosystem"
                    title="Trusted Technology Partners"
                    description="Building on the best platforms and tools in the industry"
                />

                <div className="bg-white dark:bg-dark-light p-8 lg:p-12 rounded-2xl border border-gray-200 dark:border-white/10 mb-12">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        Strategic partnerships with AWS, Azure, Oracle, and leading system integrators to ensure best-in-class implementation, security, and scalability.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Our partner ecosystem enables us to deliver enterprise-grade solutions with proven reliability, while maintaining the flexibility to adapt to your specific infrastructure and technology requirements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <Card
                        icon={<HiCloud className="text-primary" />}
                        title="Cloud Providers"
                        description="Certified partnerships with AWS, Microsoft Azure, and Google Cloud Platform for flexible deployment options."
                    />
                    <Card
                        icon={<HiServer className="text-info" />}
                        title="Infrastructure Partners"
                        description="Oracle, IBM, and other enterprise infrastructure providers for on-premise and hybrid deployments."
                    />
                    <Card
                        icon={<HiShieldCheck className="text-success" />}
                        title="Security Partners"
                        description="Leading cybersecurity firms ensuring enterprise-grade security, compliance, and data protection."
                    />
                    <Card
                        icon={<HiSparkles className="text-warning" />}
                        title="System Integrators"
                        description="Global and regional SI partners for implementation, customization, and ongoing support services."
                    />
                    <Card
                        icon={<HiCog className="text-secondary" />}
                        title="Technology Vendors"
                        description="Integration with leading enterprise software including Salesforce, SAP, and Microsoft Dynamics."
                    />
                    <Card
                        icon={<HiGlobeAlt className="text-accent" />}
                        title="Insurance Tech Partners"
                        description="Partnerships with insurtech innovators for specialized capabilities like telematics, AI, and analytics."
                    />
                </div>
            </section>

            {/* Partner Benefits */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 bg-gray-50 dark:bg-dark-light/30">
                <SectionHeader
                    label="Why Partner with Us"
                    title="Mutual Success"
                    description="Building win-win relationships that deliver value to customers"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">For Technology Partners</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>• Access to growing insurance market</li>
                            <li>• Joint go-to-market opportunities</li>
                            <li>• Technical collaboration and integration</li>
                            <li>• Revenue sharing and referral programs</li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">For Implementation Partners</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>• Comprehensive training and certification</li>
                            <li>• Sales and marketing support</li>
                            <li>• Technical resources and documentation</li>
                            <li>• Partner portal and tools</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Interested in Partnering with NIZSOFT?
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Join our partner ecosystem and help insurers transform their operations globally.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-accent hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
                        >
                            Become a Partner
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
