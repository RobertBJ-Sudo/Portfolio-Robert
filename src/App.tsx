import { Route, Routes } from 'react-router-dom'
import { AuroraBackground } from '@/components/layout/AuroraBackground'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { ProjectDetail } from '@/pages/ProjectDetail'

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <AuroraBackground />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
