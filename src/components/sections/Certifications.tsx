import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { certifications } from '@/data/certifications'
import { cn } from '@/lib/cn'

const dotStyle: Record<string, string> = {
  completed: 'bg-emerald-500 border-emerald-500',
  'in-progress': 'bg-amber-500 border-amber-500',
  planned: 'bg-surface border-border-strong',
}

export function Certifications() {
  const done = certifications.filter((c) => c.status === 'completed').length

  return (
    <Section
      id="certificaciones"
      eyebrow="Certificaciones"
      title="Roadmap de certificaciones"
      description={`Un plan vivo que voy actualizando. ${done} de ${certifications.length} completadas.`}
    >
      <ol className="mx-auto max-w-2xl">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} as="li" delay={i * 0.08} className="relative flex gap-5 pb-8 last:pb-0">
            {/* línea + nodo */}
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  'z-10 mt-1 size-3.5 shrink-0 rounded-full border-2',
                  dotStyle[cert.status],
                )}
              />
              {i < certifications.length - 1 && (
                <span className="w-px flex-1 bg-border" />
              )}
            </div>

            <div className="flex-1 rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur-sm">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="text-base font-semibold text-fg-strong">
                  {cert.name}
                  {cert.code && (
                    <span className="ml-2 font-mono text-xs font-normal text-muted">
                      {cert.code}
                    </span>
                  )}
                </h3>
                <StatusBadge status={cert.status} kind="certification" />
              </div>
              <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
              {cert.description && (
                <p className="mt-2 text-sm text-fg">{cert.description}</p>
              )}
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong hover:underline"
                >
                  Ver detalles del examen
                  <Icon name="arrow-up-right" size={14} />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
