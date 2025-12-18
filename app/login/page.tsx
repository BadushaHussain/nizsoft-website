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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark dark:via-dark-light dark:to-dark relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(100,100,100,0.05)_1px,transparent_1px),linear-gradient(rgba(100,100,100,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left side - Decorative */}
                <div className="hidden lg:flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-md">
                        {/* Animated circles */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-96 h-96 border-2 border-primary/20 rounded-full animate-spin-slow" />
                            <div className="absolute w-80 h-80 border-2 border-secondary/20 rounded-full animate-spin-reverse" />
                            <div className="absolute w-64 h-64 border-2 border-primary/30 rounded-full animate-spin-slow" />
                            <div className="absolute w-48 h-48 border-2 border-secondary/30 rounded-full animate-spin-reverse" />
                            <div className="absolute w-32 h-32 border-2 border-primary/40 rounded-full animate-spin-slow" />
                        </div>

                        {/* Dots on circles */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full animate-pulse" />
                            <div className="absolute top-1/4 right-0 w-3 h-3 bg-secondary rounded-full animate-pulse delay-100" />
                            <div className="absolute bottom-1/4 left-0 w-3 h-3 bg-primary rounded-full animate-pulse delay-200" />
                            <div className="absolute bottom-0 right-1/3 w-3 h-3 bg-secondary rounded-full animate-pulse delay-300" />
                        </div>
                    </div>
                </div>

                {/* Right side - Login form */}
                <div className="w-full max-w-md mx-auto lg:mx-0">
                    <div className="bg-white/95 dark:bg-dark-light/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl">
                        {/* Logo and title */}
                        <div className="mb-8">
                            <Link href="/" className="inline-block mb-6">
                                <Image
                                    src="/nizsoft-logo.png"
                                    alt="Nizsoft Logo"
                                    width={150}
                                    height={40}
                                    className="h-8 w-auto"
                                />
                            </Link>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h1>
                            <p className="text-gray-600 dark:text-gray-300">Enter your credentials to access your account</p>
                        </div>

                        {/* Login form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-gray-700 dark:text-light font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="enter your email"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray/50 focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-white/10 transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-2 text-gray-700 dark:text-light font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    placeholder="enter your password"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray/50 focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-white/10 transition-all"
                                />
                                <div className="mt-2 text-right">
                                    <button
                                        type="button"
                                        onClick={() => toast.error('Password reset is not available')}
                                        className="text-primary hover:text-secondary text-sm transition-colors"
                                    >
                                        Forgot Password?
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="groupCode" className="block mb-2 text-gray-700 dark:text-light font-medium">
                                    Group Code
                                </label>
                                <input
                                    type="text"
                                    id="groupCode"
                                    name="groupCode"
                                    placeholder="enter your group code"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray/50 focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-white/10 transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                            >
                                {isSubmitting ? 'Signing in...' : 'Sign in'}
                            </button>
                        </form>

                        {/* Register link */}
                        <div className="mt-6 text-center">
                            <p className="text-gray-600 dark:text-gray text-sm">
                                New User?{' '}
                                <button
                                    onClick={() => toast.error('Registration is not available')}
                                    className="text-primary hover:text-secondary font-semibold transition-colors"
                                >
                                    Register
                                </button>
                            </p>
                        </div>
                    </div>

                    {/* Additional info */}
                    <p className="text-center text-gray-600 dark:text-gray text-sm mt-6">
                    </p>
                </div>
            </div>
        </div>
    )
}
