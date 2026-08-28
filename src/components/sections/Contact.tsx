import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { profile } from '@/data/profile'

export function Contact() {
  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="¿Conversamos?"
      description="Estoy abierto a oportunidades como desarrollador Junior, Full Stack o Backend."
    >
      <Reveal className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface/80 backdrop-blur-xl">
        <div className="relative p-8 sm:p-10">
          <div
            aria-hidden
            className="absolute -right-16 -top-16 size-56 rounded-full bg-gradient-to-br from-accent/25 to-accent-2/25 blur-3xl"
          />

          <div className="relative grid gap-8 sm:grid-cols-2">
            <div>
              <p className="font-display text-xl font-semibold text-fg-strong">
                {profile.name}
              </p>
              <p className="mt-1 text-sm text-muted">{profile.role}</p>

              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2.5 text-fg transition-colors hover:text-accent"
                  >
                    <Icon name="mail" size={18} className="text-accent" />
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2.5 text-fg transition-colors hover:text-accent"
                  >
                    <Icon name="phone" size={18} className="text-accent" />
                    {profile.phone}
                  </a>
                </li>
                <li className="inline-flex items-center gap-2.5 text-fg">
                  <Icon name="pin" size={18} className="text-accent" />
                  {profile.location}
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:items-end sm:justify-center">
              <Button href={`mailto:${profile.email}`} size="lg" className="w-full sm:w-auto">
                <Icon name="mail" size={18} />
                Escribirme un correo
              </Button>
              {profile.cv.es && (
                <Button
                  href={profile.cv.es}
                  download
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Icon name="download" size={18} />
                  Descargar CV
                </Button>
              )}
              <div className="mt-2 flex gap-2">
                {profile.socials
                  .filter((s) => s.href.startsWith('http'))
                  .map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-fg transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      <Icon name={s.icon} size={18} />
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
