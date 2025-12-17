'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const updateProgress = () => {
            const scrolled = window.scrollY
            const height = document.documentElement.scrollHeight - window.innerHeight
            const progressValue = height > 0 ? (scrolled / height) * 100 : 0
            setProgress(progressValue)
        }

        window.addEventListener('scroll', updateProgress)
        updateProgress() // Initial calculation

        return () => window.removeEventListener('scroll', updateProgress)
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50 origin-left"
            style={{ width: `${progress}%` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.1 }}
        />
    )
}
