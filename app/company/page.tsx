import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'
import Card from '@/components/Card'
import Stats from '@/components/Stats'
import { HiViewfinderCircle, HiUserGroup, HiUsers, HiBriefcase, HiClock } from 'react-icons/hi2'

export default function CompanyPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="About NIZSOFT"
          title="Building the Future of Insurance Technology"
          description="Founded in Abu Dhabi with a mission to modernize insurance operations globally"
        />

        <div className="mb-12">
          <FeatureItem
            icon={<HiViewfinderCircle className="text-primary" />}
            title="Our Mission"
            description="To democratize access to enterprise-grade insurance technology. We combine the innovation and agility of a startup with the reliability and completeness expected by enterprise insurers. NIZSOFT is production-ready, not MVP—a complete platform built to scale with your business."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          <a href="/company/leadership" className="block hover:scale-105 transition-transform">
            <Card
              icon={<HiUserGroup className="text-secondary" />}
              title="Leadership"
              description="Experienced team with backgrounds from leading insurance companies, technology firms, and enterprise software vendors."
            />
          </a>
          <a href="/company/partners" className="block hover:scale-105 transition-transform">
            <Card
              icon={<HiUsers className="text-accent" />}
              title="Partners"
              description="Strategic partnerships with AWS, Azure, Oracle, and leading system integrators to ensure best-in-class implementation."
            />
          </a>
          <a href="/company/careers" className="block hover:scale-105 transition-transform">
            <Card
              icon={<HiBriefcase className="text-success" />}
              title="Careers"
              description="Join our growing team. We're hiring engineers, product managers, and insurance domain experts. Competitive compensation with equity."
            />
          </a>
          <a href="/company/support" className="block hover:scale-105 transition-transform">
            <Card
              icon={<HiClock className="text-warning" />}
              title="24×7 Support"
              description="Round-the-clock support with SLA-backed response times. Dedicated customer success managers and technical account managers."
            />
          </a>
        </div>

        <Stats items={[
          { value: '2024', label: 'Founded in Abu Dhabi' },
          { value: '100+', label: 'Team Members' },
          { value: '6+', label: 'Countries Served' },
          { value: 'Enterprise', label: 'Production-Ready Platform' },
        ]} />
      </section>
    </div>
  )
}