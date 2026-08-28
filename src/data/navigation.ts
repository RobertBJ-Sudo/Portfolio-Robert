export interface NavItem {
  label: string
  /** id de la sección en la portada (sin #). */
  target: string
}

export const navItems: NavItem[] = [
  { label: 'Sobre mí', target: 'sobre-mi' },
  { label: 'Proyectos', target: 'proyectos' },
  { label: 'Skills', target: 'skills' },
  { label: 'Certificaciones', target: 'certificaciones' },
  { label: 'Contacto', target: 'contacto' },
]
