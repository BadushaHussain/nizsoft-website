export default function SupportPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-dark">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block px-6 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-bold uppercase tracking-wider mb-6">
                        ⏱️ 24×7 Enterprise Support
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Always Here When You Need Us</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Dedicated support team with SLA-backed response times. Proactive monitoring, regular health checks,
                        and direct access to technical architects ensure your operations run smoothly 24/7.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-2xl p-8 border border-primary/20">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">24/7 Availability</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li>✓ Round-the-clock support coverage</li>
                            <li>✓ Multi-channel support (phone, email, chat)</li>
                            <li>✓ Emergency hotline for critical issues</li>
                            <li>✓ Follow-the-sun support model</li>
                            <li>✓ No holidays or downtime</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-secondary/5 to-primary/5 dark:from-secondary/10 dark:to-primary/10 rounded-2xl p-8 border border-secondary/20">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">SLA-Backed Response</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li>✓ P1 Critical: 15-minute response</li>
                            <li>✓ P2 High: 1-hour response</li>
                            <li>✓ P3 Medium: 4-hour response</li>
                            <li>✓ P4 Low: 1 business day response</li>
                            <li>✓ Guaranteed resolution times</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-accent/5 to-primary/5 dark:from-accent/10 dark:to-primary/10 rounded-2xl p-8 border border-accent/20">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Proactive Monitoring</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li>✓ Real-time system health monitoring</li>
                            <li>✓ Automated alert notifications</li>
                            <li>✓ Performance trend analysis</li>
                            <li>✓ Capacity planning recommendations</li>
                            <li>✓ Regular health check reports</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-success/5 to-secondary/5 dark:from-success/10 dark:to-secondary/10 rounded-2xl p-8 border border-success/20">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Expert Access</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li>✓ Dedicated account manager</li>
                            <li>✓ Direct access to technical architects</li>
                            <li>✓ Regular business reviews</li>
                            <li>✓ Custom training sessions</li>
                            <li>✓ Priority feature requests</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Support Tiers</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border-2 border-gray-200 dark:border-white/10 rounded-2xl p-6">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Standard</h4>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Essential support for growing teams</p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                <li>✓ Email support</li>
                                <li>✓ Knowledge base access</li>
                                <li>✓ Community forums</li>
                                <li>✓ Business hours coverage</li>
                            </ul>
                        </div>

                        <div className="border-2 border-primary rounded-2xl p-6 bg-primary/5 dark:bg-primary/10 relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">
                                POPULAR
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Premium</h4>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Advanced support for enterprises</p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                <li>✓ 24/7 phone & email support</li>
                                <li>✓ Priority ticket handling</li>
                                <li>✓ Dedicated account manager</li>
                                <li>✓ Quarterly business reviews</li>
                                <li>✓ Custom training</li>
                            </ul>
                        </div>

                        <div className="border-2 border-gray-200 dark:border-white/10 rounded-2xl p-6">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h4>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">White-glove support for mission-critical systems</p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                <li>✓ All Premium features</li>
                                <li>✓ Technical architect access</li>
                                <li>✓ Custom SLA agreements</li>
                                <li>✓ On-site support available</li>
                                <li>✓ Dedicated Slack channel</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-2xl p-8 border border-primary/20 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Need Enterprise Support?</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Contact our team to discuss custom support packages tailored to your organization's needs.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 transition-all"
                    >
                        Contact Support Team
                    </a>
                </div>
            </div>
        </div>
    )
}
