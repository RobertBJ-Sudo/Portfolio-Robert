import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

export function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-6xl font-semibold text-fg-strong">404</p>
      <p className="mt-3 text-muted">
        Esta página no existe o el proyecto todavía no está publicado.
      </p>
      <Button to="/" variant="secondary" className="mt-8">
        <Icon name="arrow-left" size={16} />
        Volver al inicio
      </Button>
    </div>
  )
}
