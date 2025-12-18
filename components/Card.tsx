'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  icon: ReactNode
  title: string
  description: string
  href?: string
}

export default function Card({ icon, title, description, href }: CardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: '0 20px 60px rgba(0, 102, 255, 0.3)',
        transition: { duration: 0.3 }
      }}
      className="bg-gradient-to-br from-white/5 to-white/2 border border-white/8 rounded-2xl p-8 hover:border-primary/50 transition-all group"
    >
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray leading-relaxed">{description}</p>
    </motion.div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}