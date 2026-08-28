import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Chip } from '@/components/ui/Chip'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { getProjectBySlug } from '@/data/projects'
import { NotFound } from './NotFound'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
    if (project) document.title = `${project.name} — Roberto Benavente Jiménez`
    return () => {
      document.title = 'Roberto Benavente Jiménez — Desarrollador Full Stack / Backend'
    }
  }, [project])

  if (!project) return <NotFound />

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Link
        to="/"
        state={{ scrollTo: 'proyectos' }}
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg-strong"
      >
        <Icon name="arrow-left" size={16} />
        Volver a proyectos
      </Link>

      <Reveal className="mt-8">
        <div className="flex items-center gap-4">
          <span
            className="grid size-14 place-items-center rounded-2xl border border-border bg-surface-2 text-2xl"
            aria-hidden
          >
            {project.accentEmoji ?? '📦'}
          </span>
          <div>
            <h1 className="text-3xl sm:text-4xl">{project.name}</h1>
            <p className="mt-1 text-muted">{project.tagline}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <StatusBadge status={project.status} kind="project" />
          <span className="inline-flex items-center gap-1.5 text-muted">
            <Icon name="users" size={15} />
            {project.role}
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted">
            <Icon name="clock" size={15} />
            {project.period}
          </span>
        </div>

        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                <Icon name={link.icon ?? 'external'} size={16} />
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <p className="text-lg text-fg">{project.summary}</p>
        {project.context && <p className="mt-4 text-muted">{project.context}</p>}
      </Reveal>

      <Reveal delay={0.15} className="mt-12">
        <h2 className="text-xl">Mi aporte</h2>
        <ul className="mt-4 space-y-3">
          {project.contributions.map((c) => (
            <li key={c} className="flex gap-3">
              <Icon
                name="check"
                size={18}
                className="mt-1 shrink-0 text-accent"
              />
              <span className="text-fg">{c}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.2} className="mt-12">
        <h2 className="text-xl">Stack técnico</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech, i) => (
            <Chip key={tech} accent={i < 2}>
              {tech}
            </Chip>
          ))}
        </div>
      </Reveal>

      {project.highlights.length > 0 && (
        <Reveal delay={0.25} className="mt-12">
          <div className="grid gap-4 rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur-sm sm:grid-cols-3">
            {project.highlights.map((h) => (
              <div key={h.label}>
                <p className="text-xs uppercase tracking-wide text-muted">{h.label}</p>
                <p className="mt-1 font-display font-semibold text-fg-strong">{h.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {project.links.length === 0 && (
        <p className="mt-10 rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-muted">
          <Icon name="clock" size={15} className="mr-1.5 inline align-[-2px]" />
          Repositorio privado por ahora. Puedo compartir el código o una demo en una
          entrevista.
        </p>
      )}

      <div className="mt-14 border-t border-border pt-8">
        <Button to="/" variant="ghost">
          <Icon name="arrow-left" size={16} />
          Volver al inicio
        </Button>
      </div>
    </article>
  )
}
