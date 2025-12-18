import SectionHeader from '@/components/SectionHeader'
import ContactForm from '@/components/ContactForm'
import Stats from '@/components/Stats'
import { HiMapPin, HiEnvelope, HiPhone, HiClock } from 'react-icons/hi2'

export default function ContactPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Get Started"
          title="Experience NIZSOFT in Action"
          description="Schedule a personalized demo tailored to your requirements"
        />

        <ContactForm />

        <Stats items={[
          { value: <HiMapPin className="text-primary" />, label: 'Headquarters\nAbu Dhabi, UAE' },
          { value: <HiEnvelope className="text-secondary" />, label: 'General\ninfo@nizsoft.com' },
          { value: <HiPhone className="text-accent" />, label: 'Sales\nsales@nizsoft.com' },
          { value: <HiClock className="text-success" />, label: '24×7 Support\nsupport@nizsoft.com' },
        ]} />
      </section>
    </div>
  )
}
