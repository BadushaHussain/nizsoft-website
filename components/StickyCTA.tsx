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
                    className="fixed bottom-0 left-0 right-0 bg-dark-light/80 backdrop-blur-xl border-t border-white/10 p-4 z-40 shadow-2xl"
                >
                    <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="text-center sm:text-left">
                            <p className="text-white font-semibold text-lg">Ready to transform your insurance operations?</p>
                            <p className="text-gray text-sm">Join leading insurers using NIZSOFT platform</p>
                        </div>
                        <div className="flex gap-3">
                            <Link
                                href="/contact"
                                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 transition-all whitespace-nowrap"
                            >
                                Book Demo
                            </Link>
                            <Link
                                href="/platform"
                                className="bg-white/5 backdrop-blur-lg text-white px-6 py-3 border border-white/10 rounded-xl font-semibold hover:bg-white/10 hover:border-primary transition-all whitespace-nowrap"
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
