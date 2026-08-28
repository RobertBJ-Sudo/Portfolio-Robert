import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'
import { profile } from '@/data/profile'

export function About() {
  return (
    <Section
      id="sobre-mi"
      eyebrow="Sobre mí"
      title="Ingeniería Informática, con las manos en el código"
    >
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="rounded-2xl border border-border bg-surface/70 p-7 backdrop-blur-sm sm:p-9">
          <p className="text-base leading-relaxed text-fg sm:text-lg">{profile.summary}</p>

          <div className="mt-6 flex gap-3 rounded-xl border border-accent/20 bg-accent/[0.06] p-4">
            <Icon name="sparkles" size={20} className="mt-0.5 shrink-0 text-accent" />
            <p className="text-sm text-fg">{profile.workNote}</p>
          </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal
            delay={0.1}
            className="rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-muted">
              <Icon name="code" size={18} className="text-accent" />
              Educación
            </div>
            <p className="mt-3 font-display font-semibold text-fg-strong">
              {profile.education.degree}
            </p>
            <p className="mt-1 text-sm text-muted">
              {profile.education.school} · {profile.education.location}
            </p>
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-muted">
                <span>Progreso</span>
                <span>{profile.education.progress}</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-2">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                  style={{ width: '90%' }}
                />
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.2}
            className="rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-muted">
              <Icon name="users" size={18} className="text-accent" />
              Idiomas
            </div>
            <ul className="mt-3 space-y-2">
              {profile.languages.map((lang) => (
                <li key={lang.name} className="flex items-center justify-between text-sm">
                  <span className="font-medium text-fg-strong">{lang.name}</span>
                  <span className="text-muted">{lang.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
