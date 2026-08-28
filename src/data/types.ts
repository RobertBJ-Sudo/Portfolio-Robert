/* ------------------------------------------------------------------ */
/*  Tipos compartidos del contenido del portafolio                    */
/*  Editá los archivos de /src/data para actualizar el sitio.         */
/* ------------------------------------------------------------------ */

export interface SocialLink {
  label: string
  href: string
  /** Nombre del icono en <Icon />. */
  icon: 'github' | 'linkedin' | 'mail' | 'phone' | 'external'
}

export interface Language {
  name: string
  level: string
}

export interface Profile {
  name: string
  shortName: string
  initials: string
  /** Titular corto que aparece bajo el nombre. */
  role: string
  /** Frase de una línea para el hero. */
  tagline: string
  location: string
  phone: string
  email: string
  /** Estado de búsqueda laboral. */
  availability: string
  /** Resumen profesional (2-4 frases). */
  summary: string
  /** Nota sobre forma de trabajo / uso de IA. */
  workNote: string
  education: {
    school: string
    degree: string
    location: string
    progress: string
  }
  languages: Language[]
  socials: SocialLink[]
  /** Rutas a los archivos de CV dentro de /public. */
  cv: {
    es?: string
    en?: string
  }
}

export type ProjectStatus = 'active' | 'shipped' | 'archived' | 'wip'

export interface ProjectLink {
  label: string
  href: string
  icon?: SocialLink['icon']
}

export interface ProjectHighlight {
  label: string
  value: string
}

export interface Project {
  /** Identificador para la URL: /proyectos/:slug */
  slug: string
  name: string
  /** Subtítulo de una línea. */
  tagline: string
  role: string
  period: string
  status: ProjectStatus
  /** Aparece destacado y más grande en la portada. */
  featured?: boolean
  /** Resumen para la tarjeta y el encabezado del detalle. */
  summary: string
  /** Contexto del proyecto (párrafo). Opcional. */
  context?: string
  /** Qué hiciste vos concretamente. */
  contributions: string[]
  /** Tecnologías. La primera(s) se resaltan en la tarjeta. */
  stack: string[]
  highlights: ProjectHighlight[]
  links: ProjectLink[]
  /** Emoji/etiqueta usada como marca visual mientras no haya imágenes. */
  accentEmoji?: string
}

export type CertificationStatus = 'completed' | 'in-progress' | 'planned'

export interface Certification {
  name: string
  /** Código del examen, p. ej. AZ-900. */
  code?: string
  issuer: string
  status: CertificationStatus
  /** Fecha objetivo o de obtención (texto libre). */
  date?: string
  description?: string
  url?: string
}

export interface SkillGroup {
  label: string
  /** Nombre del icono para el grupo. */
  icon: 'code' | 'server' | 'layout' | 'database' | 'tool' | 'sparkles' | 'users'
  skills: string[]
}
