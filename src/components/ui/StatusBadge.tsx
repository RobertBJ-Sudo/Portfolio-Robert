import { cn } from '@/lib/cn'
import type { CertificationStatus, ProjectStatus } from '@/data/types'

const projectLabels: Record<ProjectStatus, string> = {
  active: 'En desarrollo',
  shipped: 'Entregado',
  archived: 'Archivado',
  wip: 'En progreso',
}

const certLabels: Record<CertificationStatus, string> = {
  completed: 'Completada',
  'in-progress': 'En progreso',
  planned: 'Planificada',
}

const styles: Record<string, string> = {
  active: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
  shipped: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
  completed: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
  wip: 'bg-amber-500/12 text-amber-600 dark:text-amber-400 border-amber-500/25',
  'in-progress': 'bg-amber-500/12 text-amber-600 dark:text-amber-400 border-amber-500/25',
  planned: 'bg-slate-500/12 text-muted border-border-strong',
  archived: 'bg-slate-500/12 text-muted border-border-strong',
}

interface StatusBadgeProps {
  status: ProjectStatus | CertificationStatus
  kind?: 'project' | 'certification'
  className?: string
}

export function StatusBadge({ status, kind = 'project', className }: StatusBadgeProps) {
  const label =
    kind === 'project'
      ? projectLabels[status as ProjectStatus]
      : certLabels[status as CertificationStatus]

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium',
        styles[status],
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden />
      {label}
    </span>
  )
}
