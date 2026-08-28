import { Link } from 'react-router-dom'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { TiltCard } from '@/components/ui/TiltCard'
import { Chip } from '@/components/ui/Chip'
import { Icon } from '@/components/ui/Icon'
import { StatusBadge } from '@/components/ui/StatusBadge'
import type { Project } from '@/data/types'
import { projects } from '@/data/projects'
import { cn } from '@/lib/cn'

function StackRow({ stack, limit = 5 }: { stack: string[]; limit?: number }) {
  const shown = stack.slice(0, limit)
  const rest = stack.length - shown.length
  return (
    <div className="flex flex-wrap gap-2">
      {shown.map((tech, i) => (
        <Chip key={tech} accent={i < 2}>
          {tech}
        </Chip>
      ))}
      {rest > 0 && <Chip>+{rest}</Chip>}
    </div>
  )
}

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <TiltCard className={cn(featured && 'lg:col-span-2')} max={featured ? 4 : 6}>
      <Link
        to={`/proyectos/${project.slug}`}
        className="block h-full focus-visible:outline-none"
      >
        <div
          className={cn(
            'flex h-full flex-col p-6 sm:p-8',
            featured && 'lg:flex-row lg:items-center lg:gap-10',
          )}
        >
          <div className={cn(featured && 'lg:flex-1')}>
            <div className="flex items-center gap-3">
              <span
                className="grid size-11 place-items-center rounded-xl border border-border bg-surface-2 text-xl"
                aria-hidden
              >
                {project.accentEmoji ?? '📦'}
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-fg-strong">
                  {project.name}
                </p>
                <p className="text-sm text-muted">{project.period}</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-fg sm:text-base">{project.summary}</p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <StatusBadge status={project.status} kind="project" />
              <span className="text-xs text-muted">·</span>
              <span className="text-xs font-medium text-muted">{project.role}</span>
            </div>

            <div className="mt-5">
              <StackRow stack={project.stack} limit={featured ? 7 : 4} />
            </div>

            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong transition-transform group-hover:translate-x-1">
              Ver caso de estudio
              <Icon name="arrow-right" size={16} />
            </span>
          </div>

          {featured && (
            <div className="mt-8 hidden shrink-0 lg:mt-0 lg:block lg:w-64">
              <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/10 to-accent-2/10 p-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Destacado
                </p>
                <ul className="mt-3 space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h.label}>
                      <p className="text-xs text-muted">{h.label}</p>
                      <p className="text-sm font-semibold text-fg-strong">{h.value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </Link>
    </TiltCard>
  )
}

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Section
      id="proyectos"
      eyebrow="Proyectos"
      title="Lo que he construido"
      description="Cada proyecto vive en su propia página con el detalle de mi rol, el stack y las decisiones técnicas. La lista irá creciendo."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {featured.map((project) => (
          <Reveal key={project.slug} className="lg:col-span-2">
            <ProjectCard project={project} featured />
          </Reveal>
        ))}
        {rest.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
