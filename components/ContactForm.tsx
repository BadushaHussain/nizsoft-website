'use client'

import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      message: `
Insurance Segment: ${formData.get('segment')}
Area of Interest: ${formData.get('interest') || 'Not specified'}

${formData.get('message') || 'No additional details provided'}
      `.trim(),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      toast.success('Thank you for your interest! Check your email for confirmation. Our team will contact you within 24 hours.')

      // Reset form safely and clear all inputs
      const form = e.currentTarget
      if (form) {
        form.reset()
        // Also manually clear all input values to ensure they're cleared
        const inputs = form.querySelectorAll('input, textarea, select')
        inputs.forEach((input: any) => {
          if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false
          } else {
            input.value = ''
          }
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Failed to send your request. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 lg:p-12 bg-gradient-to-br from-white/5 to-white/2 border border-white/8 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block mb-3 text-light font-semibold">First Name <span className="text-red-500">*</span></label>
          <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-light focus:outline-none focus:border-primary focus:bg-white/5 transition-all" />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-3 text-light font-semibold">Last Name <span className="text-red-500">*</span></label>
          <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-light focus:outline-none focus:border-primary focus:bg-white/5 transition-all" />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block mb-3 text-light font-semibold">Business Email <span className="text-red-500">*</span></label>
        <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-light focus:outline-none focus:border-primary focus:bg-white/5 transition-all" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="company" className="block mb-3 text-light font-semibold">Company Name <span className="text-red-500">*</span></label>
          <input type="text" id="company" name="company" required className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-light focus:outline-none focus:border-primary focus:bg-white/5 transition-all" />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-3 text-light font-semibold">Phone Number <span className="text-red-500">*</span></label>
          <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-light focus:outline-none focus:border-primary focus:bg-white/5 transition-all" />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="segment" className="block mb-3 text-light font-semibold">Insurance Segment <span className="text-red-500">*</span></label>
        <select id="segment" name="segment" required className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-light focus:outline-none focus:border-primary focus:bg-white/5 transition-all">
          <option value="">Select your segment</option>
          <option value="life">Life Insurance</option>
          <option value="health">Health Insurance</option>
          <option value="motor">Motor Insurance</option>
          <option value="pc">Property & Casualty</option>
          <option value="reinsurance">Reinsurance</option>
          <option value="broker">Broker / Intermediary</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="interest" className="block mb-3 text-light font-semibold">Area of Interest</label>
        <select id="interest" name="interest" className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-light focus:outline-none focus:border-primary focus:bg-white/5 transition-all">
          <option value="">What are you looking for?</option>
          <option value="platform">Complete Platform Demo</option>
          <option value="policy">Policy Administration</option>
          <option value="claims">Claims Management</option>
          <option value="billing">Billing Automation</option>
          <option value="migration">Data Migration</option>
          <option value="integration">System Integration</option>
          <option value="pricing">Pricing Information</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block mb-3 text-light font-semibold">Additional Details</label>
        <textarea id="message" name="message" rows={5} placeholder="Tell us about your current challenges and requirements..." className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-light focus:outline-none focus:border-primary focus:bg-white/5 transition-all resize-vertical" />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-primary to-secondary text-white px-9 py-4 rounded-xl font-semibold text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {isSubmitting ? 'Sending...' : 'Request Demo'}
      </button>
    </form>
  )
}