import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'
import Link from 'next/link'
import { HiBolt, HiChartBar, HiServer, HiArrowPath, HiCpuChip, HiClock } from 'react-icons/hi2'

export default function PerformancePage() {
    return (
        <div className="animate-fade-in">
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <SectionHeader
                    label="Performance"
                    title="High Performance & Scalability"
                    description="Sub-100ms API response times, handles 10,000+ concurrent users. Auto-scaling infrastructure adapts to demand spikes. Real-time event processing with message queues."
                />

                {/* Performance Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-6 text-center">
                        <div className="text-4xl font-bold text-primary mb-2">&lt;100ms</div>
                        <div className="text-gray text-sm">API Response Time</div>
                    </div>
                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 rounded-2xl p-6 text-center">
                        <div className="text-4xl font-bold text-secondary mb-2">10,000+</div>
                        <div className="text-gray text-sm">Concurrent Users</div>
                    </div>
                    <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-6 text-center">
                        <div className="text-4xl font-bold text-accent mb-2">99.99%</div>
                        <div className="text-gray text-sm">Uptime SLA</div>
                    </div>
                    <div className="bg-gradient-to-br from-success/10 to-success/5 border border-success/30 rounded-2xl p-6 text-center">
                        <div className="text-4xl font-bold text-success mb-2">1M+</div>
                        <div className="text-gray text-sm">Transactions/Day</div>
                    </div>
                </div>

                {/* Key Features */}
                <div className="space-y-6 lg:space-y-8">
                    <FeatureItem
                        icon={<HiBolt className="text-primary" />}
                        title="Lightning-Fast Response Times"
                        description="Sub-100ms API response times through optimized database queries and efficient caching strategies. Redis caching layer for frequently accessed data. Database query optimization with proper indexing. CDN distribution for static assets. Connection pooling and keep-alive."
                    />

                    <FeatureItem
                        icon={<HiServer className="text-secondary" />}
                        title="Auto-Scaling Infrastructure"
                        description="Kubernetes horizontal pod autoscaling based on CPU and memory metrics. Automatic scaling of database read replicas. Load balancer auto-scaling for traffic spikes. Predictive scaling based on historical patterns. Scale from zero to thousands of instances seamlessly."
                    />

                    <FeatureItem
                        icon={<HiChartBar className="text-accent" />}
                        title="High Concurrency Support"
                        description="Handle 10,000+ concurrent users without performance degradation. Asynchronous processing for non-blocking operations. Message queues for background job processing. Connection pooling and resource optimization. Distributed caching across multiple nodes."
                    />

                    <FeatureItem
                        icon={<HiArrowPath className="text-success" />}
                        title="Real-Time Event Processing"
                        description="Apache Kafka for high-throughput event streaming. Real-time data processing with stream analytics. Event-driven architecture for instant notifications. Message queue system for reliable async processing. WebSocket support for real-time updates."
                    />

                    <FeatureItem
                        icon={<HiCpuChip className="text-warning" />}
                        title="Optimized Database Performance"
                        description="Read replicas for query distribution. Database connection pooling. Query result caching with Redis. Optimized indexes for fast lookups. Partitioning for large tables. Regular performance tuning and optimization."
                    />

                    <FeatureItem
                        icon={<HiClock className="text-info" />}
                        title="Performance Monitoring"
                        description="Real-time performance metrics and dashboards. Application Performance Monitoring (APM) with detailed traces. Automated performance testing and benchmarking. Proactive alerting for performance degradation. Regular load testing and capacity planning."
                    />
                </div>

                {/* Performance Optimization Techniques */}
                <div className="mt-20 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 lg:p-12">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">Performance Optimization</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/5 border border-primary/20 rounded-2xl p-6">
                            <h4 className="text-xl font-bold text-primary mb-3">Caching Strategy</h4>
                            <ul className="space-y-2 text-gray text-sm">
                                <li>• Multi-layer caching (Redis, CDN)</li>
                                <li>• Cache warming and preloading</li>
                                <li>• Intelligent cache invalidation</li>
                                <li>• Distributed cache clusters</li>
                            </ul>
                        </div>

                        <div className="bg-white/5 border border-secondary/20 rounded-2xl p-6">
                            <h4 className="text-xl font-bold text-secondary mb-3">Database Optimization</h4>
                            <ul className="space-y-2 text-gray text-sm">
                                <li>• Query optimization and indexing</li>
                                <li>• Read replicas for scaling</li>
                                <li>• Connection pooling</li>
                                <li>• Database sharding</li>
                            </ul>
                        </div>

                        <div className="bg-white/5 border border-accent/20 rounded-2xl p-6">
                            <h4 className="text-xl font-bold text-accent mb-3">Infrastructure</h4>
                            <ul className="space-y-2 text-gray text-sm">
                                <li>• Auto-scaling policies</li>
                                <li>• Load balancing</li>
                                <li>• CDN distribution</li>
                                <li>• Geographic redundancy</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <Link href="/contact" className="group bg-gradient-to-r from-primary to-secondary text-white px-7 lg:px-9 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all inline-flex items-center gap-2">
                        Discuss Performance Requirements
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    )
}
