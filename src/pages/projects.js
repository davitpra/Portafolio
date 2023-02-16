import { ProfileSection } from '@/components/Info/ProfileSection'
import { ProjectCard } from '@/components/Project/ProjectCard'
import { Slider } from '@/components/Project/Slider'

const projects = () => {
  return (
    <>
      <ProfileSection>
        <Slider />
        <ProjectCard />
      </ProfileSection>
    </>
  )
}

export default projects
