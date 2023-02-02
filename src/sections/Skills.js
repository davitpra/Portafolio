import { SkillCard } from '@/components/SkillCard'
import { SkillList } from '@/components/SkillList'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { skills } from '@/data/skillsList'

export const Skills = () => {
  return (
    <>
      <Title title='Skills' />
      <Subtitle subtitle='List of interface development technologies: ' />
      <SkillList className='flex-wrap'>
        {skills.map(skill =>
          <SkillCard
            {...skill}
            key={skill.name}
            className='flex flex-col items-center'
          />)}
      </SkillList>
    </>
  )
}
