'use client'

import { FormEvent } from 'react'

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you for your interest! Our team will contact you within 24 hours to schedule your personalized demo.')
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 lg:p-12 bg-gradient-to-br from-white/5 to-white/2 border border-white/8 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block mb-3 text-light font-semibold">First Name *</label>
          <input type="text" id="firstName" required className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-light focus:outline-none focus:border-primary focus:bg-white/5 transition-all" />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-3 text-light font-semibold">Last Name *</label>
          <input type="text" id="lastName" required className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-light focus:outline-none focus:border-primary focus:bg-white/5 transition-all" />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block mb-3 text-light font-semibold">Business Email *</label>
        <input type="email" id="email" required className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-light focus:outline-none focus:border-primary focus:bg-white/5 transition-all" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="company" className="block mb-3 text-light font-semibold">Company Name *</label>
          <input type="text" id="company" required className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-light focus:outline-none focus:border-primary focus:bg-white/5 transition-all" />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-3 text-light font-semibold">Phone Number</label>
          <input type="tel" id="phone" className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-light focus:outline-none focus:border-primary focus:bg-white/5 transition-all" />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="segment" className="block mb-3 text-light font-semibold">Insurance Segment *</label>
        <select id="segment" required className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-light focus:outline-none focus:border-primary focus:bg-white/5 transition-all">
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
        <select id="interest" className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-light focus:outline-none focus:border-primary focus:bg-white/5 transition-all">
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
        <textarea id="message" rows={5} placeholder="Tell us about your current challenges and requirements..." className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-light focus:outline-none focus:border-primary focus:bg-white/5 transition-all resize-vertical" />
      </div>
      
      <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white px-9 py-4 rounded-xl font-semibold text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all">
        Request Demo
      </button>
    </form>
  )
}