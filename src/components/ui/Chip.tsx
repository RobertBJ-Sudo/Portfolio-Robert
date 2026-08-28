import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface ChipProps {
  children: ReactNode
  /** Resalta con el color de acento. */
  accent?: boolean
  className?: string
}

export function Chip({ children, accent, className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors',
        accent
          ? 'border-accent/30 bg-accent/10 text-accent-strong'
          : 'border-border bg-surface-2 text-fg',
        className,
      )}
    >
      {children}
    </span>
  )
}
