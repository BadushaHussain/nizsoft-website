'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChatBubbleLeftRight, HiXMark, HiPaperAirplane } from 'react-icons/hi2'
import toast from 'react-hot-toast'

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [step, setStep] = useState<'form' | 'chat'>('form')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Validate required fields
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields')
            return
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address')
            return
        }

        // Store customer info (in real app, send to backend)
        console.log('Customer Information:', formData)

        toast.success('Thanks! An agent will be with you shortly.')
        setStep('chat')
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            {/* Chat Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-full shadow-2xl hover:shadow-primary/50 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Open chat"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <HiXMark className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <HiChatBubbleLeftRight className="w-6 h-6" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-white dark:bg-dark-light rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <HiChatBubbleLeftRight className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Chat with us</h3>
                                        <p className="text-xs text-white/80">We're here to help!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 max-h-[500px] overflow-y-auto">
                            {step === 'form' ? (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        Please provide your details so we can assist you better.
                                    </p>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Name <span className="text-error">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-white/10 rounded-lg bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Email <span className="text-error">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-white/10 rounded-lg bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-white/10 rounded-lg bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="+971 50 123 4567"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-white/10 rounded-lg bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="Your company"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Message <span className="text-error">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-white/10 rounded-lg bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                            placeholder="How can we help you?"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
                                    >
                                        Start Chat
                                        <HiPaperAirplane className="w-4 h-4" />
                                    </button>
                                </form>
                            ) : (
                                <div className="space-y-4">
                                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                                        <p className="text-sm text-gray-700 dark:text-gray-300">
                                            <strong>Hello {formData.name}!</strong> 👋
                                            <br />
                                            <br />
                                            Thank you for reaching out. We've received your information and an agent will connect with you shortly.
                                            <br />
                                            <br />
                                            <strong>Your Details:</strong>
                                            <br />
                                            📧 {formData.email}
                                            {formData.phone && (
                                                <>
                                                    <br />
                                                    📱 {formData.phone}
                                                </>
                                            )}
                                            {formData.company && (
                                                <>
                                                    <br />
                                                    🏢 {formData.company}
                                                </>
                                            )}
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                            Expected response time: <strong>5-10 minutes</strong>
                                        </p>
                                        <button
                                            onClick={() => {
                                                setStep('form')
                                                setFormData({
                                                    name: '',
                                                    email: '',
                                                    phone: '',
                                                    company: '',
                                                    message: ''
                                                })
                                            }}
                                            className="text-primary hover:underline text-sm font-medium"
                                        >
                                            Start New Chat
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
