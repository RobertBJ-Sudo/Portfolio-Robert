import type { Profile } from './types'

export const profile: Profile = {
  name: 'Roberto Benavente Jiménez',
  shortName: 'Roberto Benavente',
  initials: 'RB',
  role: 'Desarrollador Junior · Full Stack / Backend',
  tagline:
    'Construyo APIs y bases de datos sólidas con .NET y SQL Server, y las conecto con interfaces en React.',
  location: 'Costa Rica',
  phone: '+506 7221-6142',
  email: 'robertobj2106@gmail.com',
  availability: 'Disponible para incorporarme como Desarrollador Junior',
  summary:
    'Estudiante de Ingeniería en Computación en la Universidad Hispanoamericana (Costa Rica), con cerca del 90 % de la carrera completada. Tengo experiencia práctica —académica y en proyectos reales— con C#, .NET / ASP.NET Core, React, bases de datos SQL y herramientas de control de versiones y gestión de proyectos. Busco incorporarme como desarrollador Junior en un equipo Full Stack o Backend.',
  workNote:
    'Me apoyo en herramientas de IA (ChatGPT, GitHub Copilot, Claude) para acelerar el desarrollo, la depuración y el aprendizaje técnico, siempre revisando y entendiendo el código que entra al proyecto.',
  education: {
    school: 'Universidad Hispanoamericana',
    degree: 'Licenciatura en Ingeniería en Computación',
    location: 'Costa Rica',
    progress: '90 % completado',
  },
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'B2+ · fluido' },
  ],
  socials: [
    // TODO(Roberto): pasá la URL de tu repo/usuario de GitHub.
    { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/roberto-benavente-ab6850375',
      icon: 'linkedin',
    },
    { label: 'Correo', href: 'mailto:robertobj2106@gmail.com', icon: 'mail' },
  ],
  cv: {
    // Colocá el archivo en /public/cv/ con este nombre (o cambiá la ruta).
    es: '/cv/Roberto-Benavente-CV-ES.pdf',
  },
}
