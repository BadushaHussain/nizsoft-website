'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

interface AnimatedNumberProps {
    value: number
    duration?: number
    decimals?: number
    suffix?: string
    prefix?: string
    className?: string
}

export default function AnimatedNumber({
    value,
    duration = 2,
    decimals = 0,
    suffix = '',
    prefix = '',
    className = ''
}: AnimatedNumberProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [hasAnimated, setHasAnimated] = useState(false)

    const spring = useSpring(0, {
        mass: 0.8,
        stiffness: 75,
        damping: 15,
        duration: duration * 1000
    })

    const display = useTransform(spring, (current) => {
        if (decimals > 0) {
            return current.toFixed(decimals)
        }
        return Math.floor(current).toString()
    })

    useEffect(() => {
        if (isInView && !hasAnimated) {
            spring.set(value)
            setHasAnimated(true)
        }
    }, [isInView, value, spring, hasAnimated])

    return (
        <span ref={ref} className={className}>
            {prefix}
            <motion.span>{display}</motion.span>
            {suffix}
        </span>
    )
}
