import SectionHeader from '@/components/SectionHeader'
import FeatureItem from '@/components/FeatureItem'
import { HiMagnifyingGlass, HiDocumentText, HiChatBubbleLeftRight } from 'react-icons/hi2'

export default function AIAutomationPage() {
  return (
    <div className="animate-fade-in">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <SectionHeader
          label="Technology"
          title="AI & Automation"
          description="Leverage machine learning to transform operations"
        />

        <div className="space-y-6 lg:space-y-8">
          <FeatureItem
            icon={<HiMagnifyingGlass className="text-primary" />}
            title="Fraud Detection"
            description="Real-time fraud scoring using supervised and unsupervised ML models. Pattern recognition across claims history. Network analysis to identify fraud rings. Continuous learning from new data."
          />
          <FeatureItem
            icon={<HiDocumentText className="text-secondary" />}
            title="Document Intelligence"
            description="OCR extraction from policy forms, ID cards, medical records. NLP for understanding unstructured text. Automated data validation and exception handling. 95%+ accuracy rates."
          />
          <FeatureItem
            icon={<HiChatBubbleLeftRight className="text-accent" />}
            title="Conversational AI"
            description="Natural language chatbots for customer service. Intent recognition and entity extraction. Multi-language support. Seamless handoff to human agents when needed."
          />
        </div>
      </section>
    </div>
  )
}