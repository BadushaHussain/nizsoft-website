import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import { HiClock, HiShieldCheck, HiUserGroup, HiChatBubbleLeftRight, HiPhone, HiEnvelope } from 'react-icons/hi2'

export const metadata = {
    title: '24×7 Support | NIZSOFT',
    description: 'Round-the-clock support with SLA-backed response times. Dedicated customer success managers and technical account managers.',
}

export default function SupportPage() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-4 md:pt-6 bg-gradient-to-br from-warning/5 to-transparent">
                <div className="max-w-6xl px-6 lg:px-8 text-center relative z-10 py-20">
                    <div className="inline-block px-7 py-3 bg-warning/15 border border-warning/40 rounded-full text-warning text-xs lg:text-sm font-bold uppercase tracking-wider mb-4">
                        24×7 Support
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
                        Always Here for You
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Round-the-clock enterprise support when you need it most
                    </p>
                </div>
            </section>

            {/* Support Overview */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <SectionHeader
                    label="Our Commitment"
                    title="Enterprise-Grade Support"
                    description="Dedicated teams ensuring your success"
                />

                <div className="bg-white dark:bg-dark-light p-8 lg:p-12 rounded-2xl border border-gray-200 dark:border-white/10 mb-12">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        Round-the-clock support with SLA-backed response times. Dedicated customer success managers and technical account managers ensure your success.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Our support team combines deep technical expertise with insurance domain knowledge to provide fast, accurate resolutions to any issue. We're available 24/7/365 across all time zones.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <Card
                        icon={<HiClock className="text-warning" />}
                        title="24×7 Availability"
                        description="Round-the-clock support coverage across all time zones with no downtime."
                    />
                    <Card
                        icon={<HiShieldCheck className="text-success" />}
                        title="SLA-Backed"
                        description="Guaranteed response times with enterprise SLAs and uptime commitments."
                    />
                    <Card
                        icon={<HiUserGroup className="text-primary" />}
                        title="Dedicated CSM"
                        description="Customer success managers for strategic guidance and relationship management."
                    />
                    <Card
                        icon={<HiChatBubbleLeftRight className="text-info" />}
                        title="Technical TAM"
                        description="Technical account managers for deep technical support and architecture guidance."
                    />
                </div>
            </section>

            {/* Support Tiers */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 bg-gray-50 dark:bg-dark-light/30">
                <SectionHeader
                    label="Support Tiers"
                    title="Choose Your Support Level"
                    description="Flexible support options to match your needs"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border-2 border-gray-200 dark:border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Standard</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">For growing insurance companies</p>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                            <li>✓ Business hours support (8×5)</li>
                            <li>✓ Email and portal access</li>
                            <li>✓ 24-hour response time</li>
                            <li>✓ Knowledge base access</li>
                            <li>✓ Community forums</li>
                        </ul>
                        <Link href="/contact" className="block text-center px-6 py-3 bg-gray-100 dark:bg-dark hover:bg-gray-200 dark:hover:bg-dark-light text-gray-900 dark:text-white rounded-lg font-semibold transition-all">
                            Contact Sales
                        </Link>
                    </div>

                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border-2 border-primary">
                        <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-2">POPULAR</div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Premium</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">For established insurers</p>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                            <li>✓ 24×7 support coverage</li>
                            <li>✓ Phone, email, and chat</li>
                            <li>✓ 4-hour response time</li>
                            <li>✓ Dedicated CSM</li>
                            <li>✓ Quarterly business reviews</li>
                            <li>✓ Priority bug fixes</li>
                        </ul>
                        <Link href="/contact" className="block text-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all">
                            Contact Sales
                        </Link>
                    </div>

                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border-2 border-warning">
                        <div className="inline-block px-4 py-1 bg-warning/10 text-warning text-xs font-bold rounded-full mb-2">ENTERPRISE</div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Enterprise</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">For large-scale operations</p>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                            <li>✓ 24×7 priority support</li>
                            <li>✓ All communication channels</li>
                            <li>✓ 1-hour response time</li>
                            <li>✓ Dedicated TAM + CSM</li>
                            <li>✓ Custom SLAs</li>
                            <li>✓ Architecture reviews</li>
                            <li>✓ On-site support available</li>
                        </ul>
                        <Link href="/contact" className="block text-center px-6 py-3 bg-warning hover:bg-warning/90 text-white rounded-lg font-semibold transition-all">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <SectionHeader
                    label="Get in Touch"
                    title="Multiple Ways to Reach Us"
                    description="Choose the channel that works best for you"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10 text-center">
                        <HiPhone className="w-12 h-12 text-warning mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Phone Support</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">24×7 hotline for urgent issues</p>
                        <a href="tel:+971-xxx-xxxx" className="text-warning hover:underline font-semibold">
                            +971-XXX-XXXX
                        </a>
                    </div>

                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10 text-center">
                        <HiEnvelope className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Email Support</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">Detailed technical inquiries</p>
                        <a href="mailto:support@nizsoft.com" className="text-primary hover:underline font-semibold">
                            support@nizsoft.com
                        </a>
                    </div>

                    <div className="bg-white dark:bg-dark-light p-8 rounded-xl border border-gray-200 dark:border-white/10 text-center">
                        <HiChatBubbleLeftRight className="w-12 h-12 text-info mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Live Chat</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">Quick questions and guidance</p>
                        <Link href="/contact" className="text-info hover:underline font-semibold">
                            Start Chat →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <div className="bg-gradient-to-r from-warning to-warning/80 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Need Help Right Now?
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Our support team is standing by to assist you with any questions or issues.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-warning hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
                        >
                            Contact Support
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
