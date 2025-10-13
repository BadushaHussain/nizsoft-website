import SectionHeader from '@/components/SectionHeader'
import ContactForm from '@/components/ContactForm'
import Stats from '@/components/Stats'

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
          { value: '📍', label: 'Headquarters\nAbu Dhabi, UAE' },
          { value: '📧', label: 'General\ninfo@nizsoft.com' },
          { value: '📞', label: 'Sales\nsales@nizsoft.com' },
          { value: '⏱️', label: '24×7 Support\nsupport@nizsoft.com' },
        ]} />
      </section>
    </div>
  )
}
