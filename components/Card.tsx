import Link from 'next/link'

interface CardProps {
  icon: string
  title: string
  description: string
  href?: string
}

export default function Card({ icon, title, description, href }: CardProps) {
  const CardContent = () => (
    <div className="relative group h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
      <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-white/8 rounded-2xl p-8 lg:p-10 h-full hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all cursor-pointer">
        <div className="text-4xl lg:text-5xl mb-5 drop-shadow-lg">{icon}</div>
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray leading-relaxed">{description}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href}>
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
}