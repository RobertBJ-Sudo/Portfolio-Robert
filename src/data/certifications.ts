import type { Certification } from './types'

/* ------------------------------------------------------------------ */
/*  Roadmap de certificaciones. Actualizá `status` y `date`:           */
/*  'planned'  -> 'in-progress' -> 'completed'                         */
/* ------------------------------------------------------------------ */

export const certifications: Certification[] = [
  {
    name: 'Azure Fundamentals',
    code: 'AZ-900',
    issuer: 'Microsoft',
    status: 'in-progress',
    date: 'En progreso',
    description:
      'Fundamentos de la nube, servicios principales de Azure, precios, SLA y gobernanza.',
    url: 'https://learn.microsoft.com/certifications/exams/az-900/',
  },
  {
    name: 'Scrum Fundamentals Certified',
    code: 'SFC',
    issuer: 'SCRUMstudy',
    status: 'planned',
    date: 'Planificada',
    description: 'Fundamentos del marco de trabajo Scrum, roles, eventos y artefactos.',
  },
  {
    name: 'Azure Developer Associate',
    code: 'AZ-204',
    issuer: 'Microsoft',
    status: 'planned',
    date: 'Planificada',
    description:
      'Desarrollo de soluciones en Azure: cómputo, almacenamiento, seguridad y APIs.',
    url: 'https://learn.microsoft.com/certifications/exams/az-204/',
  },
]
