import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { PointerEvent, ReactNode } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/cn'

interface TiltCardProps {
  children: ReactNode
  className?: string
  /** Grados máximos de inclinación. */
  max?: number
}

/**
 * Tarjeta con leve inclinación 3D siguiendo el puntero y un brillo
 * que reacciona a la posición del mouse. Se desactiva en táctil o
 * con `prefers-reduced-motion`.
 */
export function TiltCard({ children, className, max = 6 }: TiltCardProps) {
  const reduced = usePrefersReducedMotion()

  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const springX = useSpring(x, { stiffness: 150, damping: 20 })
  const springY = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(springY, [0, 1], [max, -max])
  const rotateY = useTransform(springX, [0, 1], [-max, max])
  const glowX = useTransform(springX, [0, 1], ['0%', '100%'])
  const glowY = useTransform(springY, [0, 1], ['0%', '100%'])
  const glow = useMotionTemplate`radial-gradient(280px circle at ${glowX} ${glowY}, color-mix(in oklab, var(--accent) 18%, transparent), transparent 70%)`

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    if (reduced || e.pointerType === 'touch') return
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  function handleLeave() {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={
        reduced
          ? undefined
          : { rotateX, rotateY, transformPerspective: 1000, transformStyle: 'preserve-3d' }
      }
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-surface',
        'shadow-[0_1px_2px_rgba(20,18,28,0.04),0_12px_32px_-12px_rgba(20,18,28,0.12)]',
        'transition-colors hover:border-accent/30',
        className,
      )}
    >
      {!reduced && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glow }}
        />
      )}
      <div className="relative">{children}</div>
    </motion.div>
  )
}
