import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { certifications } from '@/data/certifications'
import { navItems } from '@/data/navigation'
import { profile } from '@/data/profile'
import { cn } from '@/lib/cn'
import { scrollToSection } from '@/lib/scroll'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function go(target: string) {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: target } })
    } else {
      scrollToSection(target)
    }
  }

  function goHome() {
    setMenuOpen(false)
    if (location.pathname !== '/') navigate('/')
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-bg/80 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={goHome}
          className="group flex items-center gap-2.5 rounded-full py-1 pr-2 font-display text-sm font-semibold text-fg-strong"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-white shadow-lg shadow-accent/25">
            {profile.initials}
          </span>
          <span className="hidden sm:block">{profile.shortName}</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => go(item.target)}
              className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-fg-strong"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {profile.cv.es && (
            <Button
              href={profile.cv.es}
              download
              variant="primary"
              className="hidden sm:inline-flex"
            >
              <Icon name="download" size={16} />
              CV
            </Button>
          )}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menú"
            aria-expanded={menuOpen}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-fg md:hidden"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-border bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => go(item.target)}
                  className="rounded-xl px-3 py-3 text-left text-base text-fg transition-colors hover:bg-surface-2"
                >
                  {item.label}
                </button>
              ))}
              {profile.cv.es && (
                <Button href={profile.cv.es} download size="lg" className="mt-2">
                  <Icon name="download" size={18} />
                  Descargar CV
                </Button>
              )}
              <p className="mt-3 px-3 text-xs text-muted">
                {certifications.filter((c) => c.status === 'completed').length} de{' '}
                {certifications.length} certificaciones completadas
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
