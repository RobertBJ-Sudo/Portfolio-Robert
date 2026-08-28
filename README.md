# Portafolio — Roberto Benavente Jiménez

**En vivo:** https://portfolio-robert-sable.vercel.app

Portafolio personal como desarrollador Full Stack / Backend. React + Vite + TypeScript + Tailwind CSS.

**Dirección de diseño:** _Neo-tactile_ — fondo tipo "aurora" con degradados difuminados, tarjetas con profundidad e inclinación 3D sutil al pasar el mouse, modo claro/oscuro.

## Stack

| Área      | Herramienta                          |
| --------- | ------------------------------------ |
| UI        | React 19                            |
| Build     | Vite                                |
| Lenguaje  | TypeScript                          |
| Estilos   | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Ruteo     | React Router                        |
| Animación | Framer Motion                       |
| Deploy    | Vercel (`vercel.json` incluido)     |

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + build a /dist
npm run preview  # sirve /dist localmente
```

## Cómo agregar contenido (sin tocar el diseño)

Todo el contenido vive en `src/data/` con tipos en `src/data/types.ts`:

| Archivo             | Qué contiene                                                         |
| ------------------- | ------------------------------------------------------------------- |
| `profile.ts`        | Nombre, rol, contacto, resumen, redes, ruta del CV                 |
| `projects.ts`       | Lista de proyectos (cada uno con su página en `/proyectos/:slug`)  |
| `skills.ts`         | Grupos de habilidades técnicas                                     |
| `certifications.ts` | Roadmap de certificaciones (`planned` → `in-progress` → `completed`) |
| `navigation.ts`     | Enlaces del menú                                                   |

### Agregar un proyecto

1. Abrí `src/data/projects.ts`.
2. Copiá un objeto del array, cambiá el `slug` (debe ser único) y el resto de campos.
3. Marcá `featured: true` como máximo en uno para el bloque grande.
4. Listo: la tarjeta en la portada y la página de detalle se generan solas.

### El CV

Colocá el PDF en `public/cv/Roberto-Benavente-CV-ES.pdf` (o cambiá la ruta en
`src/data/profile.ts` → `cv.es`). El botón "Descargar CV" aparece automáticamente.

## Pendientes de completar

- [ ] Agregar `public/cv/Roberto-Benavente-CV-ES.pdf`.
- [ ] Reemplazar las URLs de GitHub y LinkedIn en `src/data/profile.ts`.
- [ ] Confirmar el correo público (`profile.email`).
- [ ] (Opcional) Agregar `public/og-image.png` (1200×630) para las vistas previas en redes.

## Deploy

Desplegado en Vercel (preset **Vite**, build `npm run build`, output `dist`). Cada push a
`main` hace redeploy automático. El `vercel.json` redirige todas las rutas a `index.html`
para que el ruteo del lado del cliente funcione al recargar.
