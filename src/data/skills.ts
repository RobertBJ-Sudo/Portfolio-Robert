import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    label: 'Lenguajes',
    icon: 'code',
    skills: ['C#', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'PHP'],
  },
  {
    label: 'Backend',
    icon: 'server',
    skills: [
      'ASP.NET Core',
      '.NET',
      'Entity Framework Core',
      'CodeIgniter',
      'APIs REST',
    ],
  },
  {
    label: 'Frontend',
    icon: 'layout',
    skills: ['React', 'Vite', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    label: 'Bases de datos',
    icon: 'database',
    skills: ['SQL Server', 'MySQL', 'Oracle', 'Consultas SQL', 'PL/SQL'],
  },
  {
    label: 'Herramientas',
    icon: 'tool',
    skills: [
      'Git',
      'GitHub',
      'Azure DevOps',
      'Visual Studio',
      'VS Code',
      'SSMS',
      'MySQL Workbench',
      'NetBeans',
      'Figma',
    ],
  },
  {
    label: 'IA aplicada',
    icon: 'sparkles',
    skills: ['ChatGPT', 'GitHub Copilot', 'Claude'],
  },
  {
    label: 'Metodologías',
    icon: 'users',
    skills: ['Scrum', 'Agile', 'Trabajo colaborativo'],
  },
]
