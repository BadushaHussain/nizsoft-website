'use client'

import { useState, MouseEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Ripple {
    x: number
    y: number
    id: number
}

interface RippleButtonProps {
    children: React.ReactNode
    onClick?: () => void
    className?: string
    href?: string
}

export default function RippleButton({ children, onClick, className = '', href }: RippleButtonProps) {
    const [ripples, setRipples] = useState<Ripple[]>([])

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const newRipple = { x, y, id: Date.now() }
        setRipples([...ripples, newRipple])

        // Remove ripple after animation
        setTimeout(() => {
            setRipples(prev => prev.filter(r => r.id !== newRipple.id))
        }, 600)

        if (onClick) onClick()
    }

    return (
        <button
            onClick={handleClick}
            className={`relative overflow-hidden ${className}`}
        >
            {children}
            <AnimatePresence>
                {ripples.map(ripple => (
                    <motion.span
                        key={ripple.id}
                        initial={{ width: 0, height: 0, opacity: 0.5 }}
                        animate={{ width: 300, height: 300, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="absolute bg-white rounded-full pointer-events-none"
                        style={{
                            left: ripple.x,
                            top: ripple.y,
                            transform: 'translate(-50%, -50%)'
                        }}
                    />
                ))}
            </AnimatePresence>
        </button>
    )
}
