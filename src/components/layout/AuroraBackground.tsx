/**
 * Fondo fijo con manchas de color difuminadas ("aurora"). Puramente
 * decorativo. Las animaciones se detienen con `prefers-reduced-motion`
 * gracias a la regla global en index.css.
 */
export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base */}
      <div className="absolute inset-0 bg-bg" />

      {/* manchas */}
      <div
        className="absolute -left-[10%] top-[-15%] h-[45rem] w-[45rem] rounded-full blur-3xl animate-aurora"
        style={{ background: 'radial-gradient(circle, var(--aurora-1), transparent 65%)' }}
      />
      <div
        className="absolute right-[-15%] top-[10%] h-[40rem] w-[40rem] rounded-full blur-3xl animate-aurora [animation-delay:-8s]"
        style={{ background: 'radial-gradient(circle, var(--aurora-2), transparent 65%)' }}
      />
      <div
        className="absolute bottom-[-20%] left-[20%] h-[38rem] w-[38rem] rounded-full blur-3xl animate-aurora [animation-delay:-16s]"
        style={{ background: 'radial-gradient(circle, var(--aurora-3), transparent 65%)' }}
      />

      {/* grano/veladura para unificar */}
      <div className="absolute inset-0 bg-bg/40 backdrop-blur-[2px]" />
      {/* viñeta suave */}
      <div className="absolute inset-0 [background:radial-gradient(120%_120%_at_50%_0%,transparent_40%,var(--bg))]" />
    </div>
  )
}
