import type { Project } from './types'

/* ------------------------------------------------------------------ */
/*  Para agregar un proyecto: copiá un objeto, cambiá el `slug`        */
/*  (único) y sus campos. El diseño se adapta solo.                    */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    slug: 'openpaw-devs',
    name: 'OpenPaw Devs',
    tagline: 'Plataforma de gestión para clínicas veterinarias',
    role: 'Lead Backend',
    period: '2025',
    status: 'active',
    featured: true,
    accentEmoji: '🐾',
    summary:
      'Aplicación web para administrar las operaciones diarias de una clínica veterinaria: pacientes, propietarios, citas y autenticación de usuarios.',
    context:
      'Proyecto desarrollado en equipo con metodología Scrum. El frontend lo construyó el equipo en React + Vite y yo lideré todo el lado del servidor y la base de datos, coordinando la integración a través de Azure DevOps.',
    contributions: [
      'Lideré el desarrollo del backend con ASP.NET Core y Entity Framework Core, diseñando e implementando las APIs REST de las operaciones principales de la clínica.',
      'Diseñé y administré la base de datos en SQL Server (pacientes, propietarios, citas), incluyendo el modelo relacional y las migraciones.',
      'Implementé el registro y la autenticación de usuarios.',
      'Coordiné con el equipo de frontend (React + Vite) usando Git y Azure DevOps para control de versiones y seguimiento de tareas.',
    ],
    stack: [
      'ASP.NET Core',
      'Entity Framework Core',
      'SQL Server',
      'C#',
      'REST APIs',
      'React',
      'Vite',
      'Azure DevOps',
      'Git',
    ],
    highlights: [
      { label: 'Mi rol', value: 'Lead Backend' },
      { label: 'Equipo', value: 'Full Stack · Scrum' },
      { label: 'Dominio', value: 'Gestión veterinaria' },
    ],
    links: [
      // TODO(Roberto): agregá el repo o demo cuando estén públicos.
      // { label: 'Repositorio', href: 'https://...', icon: 'github' },
    ],
  },
  {
    slug: 'proyectos-academicos',
    name: 'Sistemas y aplicaciones académicas',
    tagline: 'Escritorio, consola y web CRUD a lo largo de la carrera',
    role: 'Desarrollador',
    period: '2021 — 2025',
    status: 'archived',
    accentEmoji: '🎓',
    summary:
      'Conjunto de proyectos construidos durante la carrera de Ingeniería Informática: aplicaciones de escritorio y consola, aplicaciones web CRUD y varios proyectos de bases de datos.',
    contributions: [
      'Aplicaciones de escritorio y de consola en C# y Java.',
      'Aplicaciones web CRUD con PHP y CodeIgniter.',
      'Múltiples proyectos de bases de datos en SQL Server, MySQL y Oracle, con consultas SQL y PL/SQL.',
    ],
    stack: ['C#', 'Java', 'PHP', 'CodeIgniter', 'SQL Server', 'MySQL', 'Oracle', 'PL/SQL'],
    highlights: [
      { label: 'Contexto', value: 'Cursos y prácticas' },
      { label: 'Enfoque', value: 'Fundamentos + datos' },
    ],
    links: [],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
