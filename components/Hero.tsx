import Link from 'next/link'
import { HiCloud, HiLink, HiShieldCheck, HiClock, HiArrowRight, HiSparkles } from 'react-icons/hi2'

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
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Pulsing radial gradient - reduced on mobile */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-transparent to-transparent opacity-5 md:opacity-20 animate-pulse-slow" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-move" />

      <div className="max-w-6xl px-6 lg:px-8 text-center relative z-10 animate-fade-in">
        {/* Floating badge with pulse animation */}
        <div className="inline-block px-7 py-3 bg-success/15 border border-success/40 rounded-full text-success text-xs lg:text-sm font-bold uppercase tracking-wider mb-8 animate-float">
          {badge}
        </div>

        {/* Title with slide-up animation */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight animate-slide-up">
          <span className="bg-gradient-to-r from-white via-light to-secondary bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

        {/* Subtitle with delayed slide-up */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up-delayed">
          {subtitle}
        </p>

        {/* CTA buttons with scale animation and icons */}
        <div className="flex gap-6 justify-center flex-wrap mb-16">
          <Link href={primaryCTALink} className="group bg-gradient-to-r from-primary to-secondary text-white px-7 lg:px-9 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all animate-scale-in flex items-center gap-2">
            <HiSparkles className="text-xl group-hover:rotate-12 transition-transform" />
            {primaryCTA}
            <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
          </Link>
          {secondaryCTA && secondaryCTALink && (
            <Link href={secondaryCTALink} className="group bg-white/5 backdrop-blur-lg text-white px-7 lg:px-9 py-3 lg:py-4 border border-white/10 rounded-xl font-semibold text-base lg:text-lg hover:bg-white/10 hover:border-primary hover:-translate-y-1 transition-all animate-scale-in-delayed flex items-center gap-2">
              {secondaryCTA}
              <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Trust badges with staggered fade-in and professional icons */}
        {showTrustBadges && (
          <div className="flex justify-center gap-6 lg:gap-10 flex-wrap">
            {[
              { icon: <HiCloud className="text-primary" />, text: 'Cloud-Native' },
              { icon: <HiLink className="text-secondary" />, text: 'API-First' },
              { icon: <HiShieldCheck className="text-accent" />, text: 'Enterprise Security' },
              { icon: <HiClock className="text-success" />, text: '24×7 Support' },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 lg:px-6 py-3 lg:py-4 bg-white/3 border border-white/8 rounded-xl hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all animate-fade-in-up group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-2xl lg:text-3xl group-hover:scale-110 transition-transform">{badge.icon}</span>
                <span className="font-semibold text-sm lg:text-base">{badge.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
