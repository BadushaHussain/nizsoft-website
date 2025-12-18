import Link from 'next/link'
import { ReactNode } from 'react'

interface FeatureItemProps {
  icon: ReactNode
  title: string
  description: string
  link?: string
}

export default function FeatureItem({ icon, title, description, link }: FeatureItemProps) {
  const content = (
    <div className="flex flex-col md:flex-row gap-6 lg:gap-8 p-6 lg:p-10 bg-gradient-to-br from-white/5 to-white/2 border border-white/8 rounded-2xl hover:border-primary/50 hover:translate-x-0 md:hover:translate-x-3 transition-all">
      <div className="text-4xl lg:text-5xl min-w-[60px] drop-shadow-lg">{icon}</div>
      <div>
        <h4 className="text-xl lg:text-2xl font-bold text-white mb-3">{title}</h4>
        <p className="text-gray leading-relaxed text-base lg:text-lg">{description}</p>
      </div>
    </div>
  )

  if (link) {
    return (
      <Link href={link} className="block mb-8 lg:mb-12 cursor-pointer">
        {content}
      </Link>
    )
  }

  return content
}