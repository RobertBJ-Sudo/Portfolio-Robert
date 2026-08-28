/** Desplaza suavemente a una sección por id y refleja el hash en la URL. */
export function scrollToSection(target: string) {
  const el = document.getElementById(target)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', `#${target}`)
}
