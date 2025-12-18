'use client'

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
    threshold?: number
    rootMargin?: string
    freezeOnceVisible?: boolean
}

export function useIntersectionObserver(
    options: UseIntersectionObserverOptions = {}
) {
    const {
        threshold = 0.1,
        rootMargin = '50px',
        freezeOnceVisible = true,
    } = options

    const [isVisible, setIsVisible] = useState(false)
    const [hasBeenVisible, setHasBeenVisible] = useState(false)
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = elementRef.current
        if (!element) return

        // If already been visible and we want to freeze, don't observe
        if (freezeOnceVisible && hasBeenVisible) {
            setIsVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                const visible = entry.isIntersecting
                setIsVisible(visible)

                if (visible && !hasBeenVisible) {
                    setHasBeenVisible(true)
                }

                // If freezeOnceVisible and now visible, stop observing
                if (freezeOnceVisible && visible) {
                    observer.disconnect()
                }
            },
            {
                threshold,
                rootMargin,
            }
        )

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [threshold, rootMargin, freezeOnceVisible, hasBeenVisible])

    return { elementRef, isVisible }
}
