'use client'

import { useEffect, useRef, useState } from 'react'

interface ParallaxProps {
    children: React.ReactNode
    speed?: number
    className?: string
    direction?: 'up' | 'down'
}

export default function Parallax({
    children,
    speed = 0.5,
    className = '',
    direction = 'up'
}: ParallaxProps) {
    const [offset, setOffset] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return

            const rect = ref.current.getBoundingClientRect()
            const scrolled = window.scrollY
            const elementTop = rect.top + scrolled
            const windowHeight = window.innerHeight

            // Only apply parallax when element is in viewport
            if (scrolled + windowHeight > elementTop && scrolled < elementTop + rect.height) {
                const parallaxOffset = (scrolled - elementTop) * speed
                setOffset(direction === 'up' ? -parallaxOffset : parallaxOffset)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial calculation

        return () => window.removeEventListener('scroll', handleScroll)
    }, [speed, direction])

    return (
        <div ref={ref} className={className}>
            <div style={{ transform: `translateY(${offset}px)`, transition: 'transform 0.1s ease-out' }}>
                {children}
            </div>
        </div>
    )
}
