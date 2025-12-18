import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'
import { HiChartBar, HiCpuChip, HiDocumentText, HiChatBubbleLeftRight } from 'react-icons/hi2'

export default function AnalyticsPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Intelligence"
          title="Analytics & AI Capabilities"
          description="Turn data into actionable insights with advanced analytics and machine learning"
        />

        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon={<HiChartBar className="text-primary" />}
            title="Real-Time Dashboards"
            description="Executive dashboards with KPIs, loss ratios, premium trends, claims analytics, and operational metrics. Customizable views for different roles and departments."
          />
          <FeatureItem
            icon={<HiCpuChip className="text-secondary" />}
            title="Predictive Analytics"
            description="Machine learning models for risk scoring, churn prediction, fraud detection, and claims cost estimation. Continuously learning algorithms improve over time."
          />
          <FeatureItem
            icon={<HiDocumentText className="text-accent" />}
            title="Intelligent Document Processing"
            description="OCR and NLP-powered extraction from policy documents, claims forms, and medical records. Automatic data validation and exception handling."
          />
          <FeatureItem
            icon={<HiChatBubbleLeftRight className="text-success" />}
            title="AI Chatbots & Virtual Assistants"
            description="24/7 customer support with natural language understanding. Handle policy inquiries, claims status, payment processing, and escalate to human agents when needed."
          />
        </div>
      </section>
    </div>
  )
}