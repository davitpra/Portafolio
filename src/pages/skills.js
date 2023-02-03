import { SkillCard } from '@/components/SkillCard'
import { SkillList } from '@/components/SkillList'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { skills } from '@/data/skillsList'

export default function skill () {
  return (
    <section className='mt-20'>
      <Title title='Skills' />
      <Subtitle subtitle='This is my list of technologies that I handle: ' className='mx-5' />
      <SkillList className='flex-wrap justify-center'>
        {skills.map(skill =>
          <SkillCard
            {...skill}
            key={skill.name}
            className='flex flex-col items-center shadow-md hover:shadow-xl dark:ring-primary dark:shadow-primary traslation_animated'
          />)}
      </SkillList>
    </section>
  )
}
