import { SkillList } from '@/components/SkillList'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { ProjectCard } from '@/components/ProjectCard'

const projects = () => {
  return (
    <>
      <Title title='Projects' className='text-primary' />
      <Subtitle subtitle='This is my list of technologies that I handle: ' className='py-3' />
      <SkillList className='flex-wrap'>
        {[1, 2, 3].map(card => <ProjectCard key={card} />)}
      </SkillList>
    </>
  )
}

export default projects
