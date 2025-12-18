'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyCTA() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show CTA after scrolling 800px down
            setVisible(window.scrollY > 800)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-dark-light/80 backdrop-blur-xl p-3 md:p-4 z-40 shadow-2xl"
                >
                    <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
                        <div className="text-center sm:text-left">
                            <p className="text-gray-900 dark:text-white font-semibold text-sm md:text-lg">Ready to transform your insurance operations?</p>
                            <p className="text-gray-600 dark:text-gray text-xs md:text-sm">Join leading insurers using NIZSOFT platform</p>
                        </div>
                        <div className="flex gap-2 md:gap-3">
                            <Link
                                href="/contact"
                                className="bg-gradient-to-r from-primary to-secondary text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-sm md:text-base hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 transition-all whitespace-nowrap"
                            >
                                Book Demo
                            </Link>
                            <Link
                                href="/platform"
                                className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg text-gray-900 dark:text-white px-4 md:px-6 py-2 md:py-3 border border-gray-300 dark:border-white/10 rounded-xl font-semibold text-sm md:text-base hover:bg-gray-200 dark:hover:bg-white/10 hover:border-primary transition-all whitespace-nowrap"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
