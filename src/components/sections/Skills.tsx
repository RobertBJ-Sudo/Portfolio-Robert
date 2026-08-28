import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'
import type { IconName } from '@/components/ui/Icon'
import { skillGroups } from '@/data/skills'

const iconMap: Record<string, IconName> = {
  code: 'code',
  server: 'server',
  layout: 'layout',
  database: 'database',
  tool: 'tool',
  sparkles: 'sparkles',
  users: 'users',
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Herramientas con las que trabajo"
      description="Fuerte en el lado del servidor y las bases de datos, cómodo en el frontend."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.label}
            delay={i * 0.06}
            className="rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur-sm transition-colors hover:border-accent/30"
          >
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-lg bg-accent/10 text-accent">
                <Icon name={iconMap[group.icon]} size={18} />
              </span>
              <h3 className="text-base font-semibold text-fg-strong">{group.label}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-sm text-fg"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
