import { Icon } from '@/components/ui/Icon'
import { profile } from '@/data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-fg-strong">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            © {year} · Hecho con React, Vite y Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-2">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={s.label}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-fg transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Icon name={s.icon} size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
