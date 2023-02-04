import { Border } from '@/components/Border'
import { About } from '@/sections/AboutSection'
import { Hero } from '@/sections/HeroSection'
import { Projects } from '@/sections/ProjectsSection'
import { Skills } from '@/sections/SkillsSection'

export default function Home () {
  return (
    <>
      <Hero />
      <Border className='rounded-r-[3rem] rounded-l-lg'>
        <div>
          <p className='text-white text-left text-3xl'>let me tell you about me</p>
        </div>
      </Border>
      <About />
      <Skills />
      <Projects />
    </>
  )
}
