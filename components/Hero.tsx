import Link from 'next/link'

interface HeroProps {
  badge?: string
  title: string
  subtitle: string
  primaryCTA?: string
  primaryCTALink?: string
  secondaryCTA?: string
  secondaryCTALink?: string
  showTrustBadges?: boolean
}

export default function Hero({
  badge = '✓ Production-Ready Enterprise Platform',
  title,
  subtitle,
  primaryCTA = 'Book a Demo',
  primaryCTALink = '/contact',
  secondaryCTA,
  secondaryCTALink,
  showTrustBadges = true
}: HeroProps) {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-transparent to-transparent opacity-30" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-move" />
      
      <div className="max-w-6xl px-6 lg:px-8 text-center relative z-10 animate-fade-in">
        <div className="inline-block px-7 py-3 bg-success/15 border border-success/40 rounded-full text-success text-xs lg:text-sm font-bold uppercase tracking-wider mb-8">
          {badge}
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-white via-light to-secondary bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray mb-12 max-w-4xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        
        <div className="flex gap-6 justify-center flex-wrap mb-16">
          <Link href={primaryCTALink} className="bg-gradient-to-r from-primary to-secondary text-white px-7 lg:px-9 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all">
            {primaryCTA}
          </Link>
          {secondaryCTA && secondaryCTALink && (
            <Link href={secondaryCTALink} className="bg-white/5 backdrop-blur-lg text-white px-7 lg:px-9 py-3 lg:py-4 border border-white/10 rounded-xl font-semibold text-base lg:text-lg hover:bg-white/10 hover:border-primary hover:-translate-y-1 transition-all">
              {secondaryCTA}
            </Link>
          )}
        </div>
        
        {showTrustBadges && (
          <div className="flex justify-center gap-6 lg:gap-10 flex-wrap">
            {[
              { icon: '☁️', text: 'Cloud-Native' },
              { icon: '🔗', text: 'API-First' },
              { icon: '🔒', text: 'Enterprise Security' },
              { icon: '⏱️', text: '24×7 Support' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 px-4 lg:px-6 py-3 lg:py-4 bg-white/3 border border-white/8 rounded-xl hover:border-primary hover:bg-primary/5 transition-all">
                <span className="text-xl lg:text-2xl">{badge.icon}</span>
                <span className="font-semibold text-sm lg:text-base">{badge.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
