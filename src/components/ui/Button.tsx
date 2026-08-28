import type { ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-strong hover:shadow-accent/35 hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'border border-border-strong bg-surface text-fg-strong hover:border-accent/40 hover:bg-surface-2 hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'text-fg hover:bg-surface-2 hover:text-fg-strong',
}

const sizes: Record<Size, string> = {
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<'button'>, keyof CommonProps> & { href?: undefined; to?: undefined }

type ButtonAsAnchor = CommonProps &
  Omit<ComponentProps<'a'>, keyof CommonProps> & { href: string; to?: undefined }

type ButtonAsLink = CommonProps & { to: string; href?: undefined; className?: string }

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('to' in props && props.to !== undefined) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    )
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
