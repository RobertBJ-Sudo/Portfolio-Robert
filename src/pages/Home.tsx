import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Certifications } from '@/components/sections/Certifications'
import { Contact } from '@/components/sections/Contact'

export function Home() {
  const location = useLocation()

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    const target = state?.scrollTo ?? (location.hash ? location.hash.slice(1) : null)
    if (!target) return
    requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  )
}
