import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24 py-20 sm:py-28', className)}
      aria-labelledby={`${id}-title`}
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h2
          id={`${id}-title`}
          className="mt-3 text-3xl sm:text-4xl"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>
        )}
      </Reveal>
      <div className="mt-14">{children}</div>
    </section>
  )
}
