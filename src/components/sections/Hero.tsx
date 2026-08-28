import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Chip } from '@/components/ui/Chip'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { scrollToSection } from '@/lib/scroll'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  const reduced = usePrefersReducedMotion()
  const featured = projects.find((p) => p.featured) ?? projects[0]

  return (
    <section className="relative scroll-mt-24 pt-16 pb-16 sm:pt-24 sm:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-sm text-muted backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl leading-[1.05] sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-lg font-medium text-transparent sm:text-xl"
          >
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-base text-muted sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              onClick={() => scrollToSection('proyectos')}
              size="lg"
            >
              Ver proyectos
              <Icon name="arrow-right" size={18} />
            </Button>
            {profile.cv.es && (
              <Button href={profile.cv.es} download variant="secondary" size="lg">
                <Icon name="download" size={18} />
                Descargar CV
              </Button>
            )}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={s.label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-fg transition-colors hover:border-accent/40 hover:text-accent hover:-translate-y-0.5"
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
            <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-muted">
              <Icon name="pin" size={16} />
              {profile.location}
            </span>
          </motion.div>
        </motion.div>

        {/* Tarjeta "enfoque actual" */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 24, rotate: -1 }}
          animate={reduced ? undefined : { opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="rounded-3xl border border-border bg-surface/80 p-6 shadow-[0_1px_2px_rgba(20,18,28,0.04),0_24px_60px_-24px_rgba(20,18,28,0.28)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Enfoque actual
              </p>
              <span className="text-lg" aria-hidden>
                {featured.accentEmoji}
              </span>
            </div>

            <p className="mt-3 font-display text-xl font-semibold text-fg-strong">
              {featured.name}
            </p>
            <p className="mt-1 text-sm text-muted">
              {featured.role} · {featured.tagline}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {featured.stack.slice(0, 5).map((tech) => (
                <Chip key={tech} accent={featured.stack.indexOf(tech) < 2}>
                  {tech}
                </Chip>
              ))}
            </div>

            <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5 text-center">
              <div>
                <dt className="text-xs text-muted">Carrera</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-fg-strong">90%</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Inglés</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-fg-strong">B2+</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Proyectos</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-fg-strong">
                  {projects.length}
                </dd>
              </div>
            </dl>
          </div>

          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/20 to-accent-2/20 blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
