'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface AccordionItem {
    question: string
    answer: string
}

interface AccordionProps {
    items: AccordionItem[]
    allowMultiple?: boolean
    className?: string
}

export default function Accordion({ items, allowMultiple = false, className = '' }: AccordionProps) {
    const [openIndices, setOpenIndices] = useState<number[]>([])

    const toggleItem = (index: number) => {
        if (allowMultiple) {
            setOpenIndices(prev =>
                prev.includes(index)
                    ? prev.filter(i => i !== index)
                    : [...prev, index]
            )
        } else {
            setOpenIndices(prev =>
                prev.includes(index) ? [] : [index]
            )
        }
    }

    return (
        <div className={`space-y-4 ${className}`}>
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-white/10 rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/2 hover:border-primary/50 transition-colors"
                >
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
                    >
                        <span className="font-semibold text-white text-lg">{item.question}</span>
                        <motion.svg
                            animate={{ rotate: openIndices.includes(index) ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-5 h-5 text-primary flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                    </button>

                    <AnimatePresence>
                        {openIndices.includes(index) && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-4 text-gray leading-relaxed">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    )
}
