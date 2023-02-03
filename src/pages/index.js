import { About } from '@/sections/AboutSection'
import { Hero } from '@/sections/HeroSection'
import { Projects } from '@/sections/ProjectsSection'
import { Skills } from '@/sections/SkillsSection'

export default function Home () {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  )
}
