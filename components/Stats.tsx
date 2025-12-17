'use client'

import AnimatedNumber from './animations/AnimatedNumber'
import FadeIn from './animations/FadeIn'

interface StatItemProps {
  value: string | number
  label: string
  isNumeric?: boolean
  decimals?: number
  suffix?: string
  prefix?: string
}

interface StatsProps {
  items: StatItemProps[]
}

export default function Stats({ items }: StatsProps) {
  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center p-8 lg:p-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl border border-white/5 my-16">
        {items.map((item, index) => (
          <div key={index}>
            <h3 className="text-4xl lg:text-5xl font-extrabold gradient-text mb-3">
              {typeof item.value === 'number' || item.isNumeric ? (
                <AnimatedNumber
                  value={typeof item.value === 'number' ? item.value : parseFloat(item.value as string)}
                  decimals={item.decimals || 0}
                  suffix={item.suffix || ''}
                  prefix={item.prefix || ''}
                />
              ) : (
                item.value
              )}
            </h3>
            <p className="text-light font-medium text-sm lg:text-base whitespace-pre-line">{item.label}</p>
          </div>
        ))}
      </div>
    </FadeIn>
  )
}