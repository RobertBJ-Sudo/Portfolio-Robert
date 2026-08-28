import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface RevealProps {
  children: ReactNode
  /** Retraso en segundos para escalonar elementos. */
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'article'
}

/** Aparición suave al entrar en viewport. Se anula con reduced-motion. */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const reduced = usePrefersReducedMotion()
  const MotionTag = motion[as]

  if (reduced) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
