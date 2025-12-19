'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import toast from 'react-hot-toast'

export default function LoginPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate a brief loading state
        await new Promise(resolve => setTimeout(resolve, 800))

        // Always show error message
        toast.error('Invalid login credentials or account not found')

        setIsSubmitting(false)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark dark:via-dark-light dark:to-dark relative overflow-hidden py-8 px-4">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-40" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
                {/* Left side - Decorative */}
                <div className="hidden lg:flex flex-col items-start justify-center space-y-8">

                    {/* Animated circles */}
                    <div className="relative w-full max-w-lg h-[500px] flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Outermost circle */}
                            <div className="absolute w-[420px] h-[420px] border-2 border-primary/30 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }}>
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
                            </div>

                            {/* Second circle */}
                            <div className="absolute w-[350px] h-[350px] border-2 border-primary/25 rounded-full animate-spin-reverse" style={{ animationDuration: '18s' }}>
                                <div className="absolute top-1/4 -right-2 w-4 h-4 bg-primary/70 rounded-full" />
                            </div>

                            {/* Third circle */}
                            <div className="absolute w-[280px] h-[280px] border-2 border-primary/30 rounded-full animate-spin-slow" style={{ animationDuration: '16s' }}>
                                <div className="absolute -bottom-2 left-1/4 w-4 h-4 bg-primary rounded-full" />
                            </div>

                            {/* Fourth circle */}
                            <div className="absolute w-[210px] h-[210px] border-2 border-primary/25 rounded-full animate-spin-reverse" style={{ animationDuration: '14s' }}>
                                <div className="absolute top-1/2 -left-2 w-4 h-4 bg-primary/70 rounded-full" />
                            </div>

                            {/* Fifth circle */}
                            <div className="absolute w-[140px] h-[140px] border-2 border-primary/30 rounded-full animate-spin-slow" style={{ animationDuration: '12s' }}>
                                <div className="absolute -top-2 right-1/3 w-4 h-4 bg-primary rounded-full" />
                            </div>

                            {/* Center circle */}
                            <div className="absolute w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl" />
                        </div>
                    </div>
                </div>

                {/* Right side - Login form */}
                <div className="w-full max-w-md mx-auto lg:mx-0">
                    <div className="bg-white dark:bg-dark-light backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
                        {/* Logo */}
                        <div className="mb-6">
                            <Link href="/" className="inline-block">
                                <Image
                                    src="/nizsoft-logo.png"
                                    alt="Nizsoft Logo"
                                    width={180}
                                    height={48}
                                    className="h-8 sm:h-10 w-auto"
                                />
                            </Link>
                        </div>

                        {/* Title */}
                        <div className="mb-6 sm:mb-8">
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Enter your credentials to access your account</p>
                        </div>

                        {/* Login form */}
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="enter your email"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    placeholder="enter your password"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                />
                                <div className="mt-3 text-right">
                                    <button
                                        type="button"
                                        onClick={() => toast.error('Password reset is not available')}
                                        className="text-primary hover:text-primary/80 text-sm font-medium transition-colors py-2 px-1 min-h-[44px] inline-flex items-center"
                                    >
                                        Forgot Password
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="groupCode" className="block mb-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                                    Group Code
                                </label>
                                <input
                                    type="text"
                                    id="groupCode"
                                    name="groupCode"
                                    placeholder="enter your group code"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3.5 rounded-lg font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                            >
                                {isSubmitting ? 'Signing in...' : 'Sign in'}
                            </button>
                        </form>

                        {/* Register link */}
                        <div className="mt-6 text-center">
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                New User?{' '}
                                <button
                                    onClick={() => toast.error('Registration is not available')}
                                    className="text-primary hover:text-primary/80 font-semibold transition-colors py-2 px-1 min-h-[44px] inline-flex items-center"
                                >
                                    Register
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
