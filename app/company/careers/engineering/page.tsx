import Link from 'next/link'
import { HiArrowLeft, HiMapPin, HiClock, HiCodeBracket } from 'react-icons/hi2'
import { getEngineeringJobs } from '@/data/jobs'

export const metadata = {
    title: 'Engineering Positions | NIZSOFT Careers',
    description: 'Join our engineering team building the future of insurance technology. Open positions in backend, frontend, and cloud engineering.',
}

export default function EngineeringJobsPage() {
    const jobs = getEngineeringJobs()

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="min-h-[40vh] flex items-center justify-center relative overflow-hidden pt-4 md:pt-6 bg-gradient-to-br from-success/5 to-transparent">
                <div className="max-w-6xl px-6 lg:px-8 text-center relative z-10 py-16">
                    <Link href="/company/careers" className="inline-flex items-center gap-2 text-success hover:underline mb-4">
                        <HiArrowLeft /> Back to Careers
                    </Link>

                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center">
                            <HiCodeBracket className="w-8 h-8 text-success" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
                            Engineering
                        </h1>
                    </div>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
                        Build scalable systems and innovative solutions for the insurance industry
                    </p>
                    <p className="text-md text-gray-500 dark:text-gray-400">
                        {jobs.length} open positions
                    </p>
                </div>
            </section>

            {/* Job Listings */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <div className="space-y-8">
                    {jobs.map((job) => (
                        <div key={job.id} className="bg-white dark:bg-dark-light p-8 lg:p-10 rounded-2xl border border-gray-200 dark:border-white/10">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                <div className="flex-1">
                                    <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                                        {job.title}
                                    </h2>
                                    <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300">
                                        <span className="flex items-center gap-2">
                                            <HiMapPin className="w-5 h-5" />
                                            {job.location}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <HiClock className="w-5 h-5" />
                                            {job.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Apply via email</p>
                                    <a
                                        href="mailto:careers@nizsoft.com"
                                        className="text-lg font-semibold text-success hover:underline"
                                    >
                                        careers@nizsoft.com
                                    </a>
                                </div>
                            </div>

                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                {job.description}
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Responsibilities</h3>
                                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                        {job.responsibilities.map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="text-success mr-2 mt-1">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Requirements</h3>
                                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                        {job.requirements.map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="text-success mr-2 mt-1">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {job.niceToHave && job.niceToHave.length > 0 && (
                                        <>
                                            <h3 className="text-xl font-bold mb-4 mt-6 text-gray-900 dark:text-white">Nice to Have</h3>
                                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                                {job.niceToHave.map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-gray-400 mr-2 mt-1">○</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <div className="bg-gradient-to-r from-success to-success/80 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Build the Future?
                    </h2>
                    <p className="text-xl mb-4 text-white/90 max-w-2xl mx-auto">
                        Join our engineering team and work on cutting-edge insurance technology.
                    </p>
                    <p className="text-lg mb-8 text-white/90">
                        Share your resume with our talent acquisition team at{' '}
                        <a href="mailto:careers@nizsoft.com" className="font-bold underline hover:text-white">
                            careers@nizsoft.com
                        </a>
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-success hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
                        >
                            Apply Now
                        </Link>
                        <Link
                            href="/company/careers"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white rounded-lg font-semibold transition-all"
                        >
                            View All Categories
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
