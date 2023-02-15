import { SkillCard } from '@/components/SkillCard'
import { SkillList } from '@/components/Skills/SkillList'
import { Subtitle } from '@/components/Subtitles'
import { Title } from '@/components/Title'
import { skills } from '@/data/skillsList'

export default function skill () {
  return (
    <>
      <Title title='Skills' className='text-primary' />
      <Subtitle subtitle='This is my list of technologies that I handle: ' className='py-3' />
      <SkillList className='flex-wrap'>
        {skills.map(skill =>
          <SkillCard
            {...skill}
            key={skill.name}
            className=''
          />)}
      </SkillList>
    </>
  )
}
