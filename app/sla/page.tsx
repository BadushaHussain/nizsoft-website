export default function SLAPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-dark">
            <div className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">Service Level Agreement</h1>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                        NIZSOFT is committed to providing enterprise-grade reliability and support for our insurance platform.
                        This Service Level Agreement (SLA) outlines our commitments to uptime, performance, and support response times.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Uptime Guarantee</h2>
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl p-6 mb-6">
                        <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">99.95% Uptime</p>
                        <p className="text-gray-600 dark:text-gray-300">Maximum downtime: 4.38 hours per year</p>
                    </div>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li>✓ Measured monthly across all core platform services</li>
                        <li>✓ Excludes scheduled maintenance windows (announced 7 days in advance)</li>
                        <li>✓ Includes automatic failover and redundancy</li>
                        <li>✓ Real-time status monitoring at status.nizsoft.cloud</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Performance Commitments</h2>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li>✓ <strong>API Response Time:</strong> 95th percentile under 200ms</li>
                        <li>✓ <strong>Page Load Time:</strong> Under 2 seconds for 95% of requests</li>
                        <li>✓ <strong>Database Query Time:</strong> 95th percentile under 100ms</li>
                        <li>✓ <strong>Report Generation:</strong> Standard reports within 30 seconds</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Support Response Times</h2>

                    <div className="space-y-6 mt-6">
                        <div className="border border-red-200 dark:border-red-800 rounded-xl p-6 bg-red-50 dark:bg-red-900/20">
                            <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">Critical (P1)</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">Complete system outage or data loss</p>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li>• <strong>Initial Response:</strong> 15 minutes</li>
                                <li>• <strong>Status Updates:</strong> Every 30 minutes</li>
                                <li>• <strong>Resolution Target:</strong> 4 hours</li>
                            </ul>
                        </div>

                        <div className="border border-orange-200 dark:border-orange-800 rounded-xl p-6 bg-orange-50 dark:bg-orange-900/20">
                            <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-3">High (P2)</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">Major functionality impaired</p>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li>• <strong>Initial Response:</strong> 1 hour</li>
                                <li>• <strong>Status Updates:</strong> Every 2 hours</li>
                                <li>• <strong>Resolution Target:</strong> 8 hours</li>
                            </ul>
                        </div>

                        <div className="border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 bg-yellow-50 dark:bg-yellow-900/20">
                            <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-300 mb-3">Medium (P3)</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">Minor functionality issues or questions</p>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li>• <strong>Initial Response:</strong> 4 hours</li>
                                <li>• <strong>Status Updates:</strong> Daily</li>
                                <li>• <strong>Resolution Target:</strong> 2 business days</li>
                            </ul>
                        </div>

                        <div className="border border-blue-200 dark:border-blue-800 rounded-xl p-6 bg-blue-50 dark:bg-blue-900/20">
                            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">Low (P4)</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">Feature requests or general inquiries</p>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li>• <strong>Initial Response:</strong> 1 business day</li>
                                <li>• <strong>Status Updates:</strong> As needed</li>
                                <li>• <strong>Resolution Target:</strong> 5 business days</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Support Channels</h2>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li>✓ <strong>24/7 Emergency Hotline:</strong> For P1 critical issues</li>
                        <li>✓ <strong>Email Support:</strong> support@nizsoft.cloud</li>
                        <li>✓ <strong>Support Portal:</strong> Ticket tracking and knowledge base</li>
                        <li>✓ <strong>Dedicated Account Manager:</strong> For enterprise customers</li>
                        <li>✓ <strong>Slack/Teams Integration:</strong> Direct channel for premium support</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Maintenance Windows</h2>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li>✓ <strong>Scheduled Maintenance:</strong> Monthly, announced 7 days in advance</li>
                        <li>✓ <strong>Typical Window:</strong> Sundays 2:00 AM - 6:00 AM UTC</li>
                        <li>✓ <strong>Emergency Maintenance:</strong> Announced with minimum 2 hours notice</li>
                        <li>✓ <strong>Zero-downtime Deployments:</strong> For most updates</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Data Backup & Recovery</h2>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li>✓ <strong>Backup Frequency:</strong> Continuous replication + hourly snapshots</li>
                        <li>✓ <strong>Retention Period:</strong> 30 days of point-in-time recovery</li>
                        <li>✓ <strong>Recovery Time Objective (RTO):</strong> 1 hour</li>
                        <li>✓ <strong>Recovery Point Objective (RPO):</strong> 5 minutes</li>
                        <li>✓ <strong>Geo-redundant Storage:</strong> Data replicated across multiple regions</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">SLA Credits</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        If we fail to meet our uptime commitment, you're eligible for service credits:
                    </p>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li>• <strong>99.95% - 99.0%:</strong> 10% monthly service credit</li>
                        <li>• <strong>99.0% - 95.0%:</strong> 25% monthly service credit</li>
                        <li>• <strong>Below 95.0%:</strong> 50% monthly service credit</li>
                    </ul>
                    <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
                        Credits must be requested within 30 days of the incident and are applied to future invoices.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Monitoring & Reporting</h2>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li>✓ <strong>Real-time Status Page:</strong> Public status dashboard</li>
                        <li>✓ <strong>Monthly SLA Reports:</strong> Detailed performance metrics</li>
                        <li>✓ <strong>Incident Post-mortems:</strong> Root cause analysis for major incidents</li>
                        <li>✓ <strong>Custom Dashboards:</strong> Enterprise customers get custom monitoring</li>
                    </ul>

                    <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-2xl border border-primary/20">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Questions About Our SLA?</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Our team is available to discuss custom SLA requirements, enterprise support packages,
                            or any questions about our service commitments.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 transition-all"
                        >
                            Contact Sales Team
                        </a>
                    </div>

                    <div className="mt-8 p-6 bg-gray-100 dark:bg-dark-light rounded-xl">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong>Last Updated:</strong> December 2025<br />
                            This SLA applies to all NIZSOFT platform customers. Enterprise customers may have custom SLAs with enhanced commitments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
