import { useTheme } from '@/hooks/useTheme'
import { Icon } from '@/components/ui/Icon'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-fg transition-colors hover:border-accent/40 hover:text-accent"
    >
      <Icon name={isDark ? 'sun' : 'moon'} size={18} />
    </button>
  )
}
