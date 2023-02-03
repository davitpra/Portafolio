import { Button } from '@/components/Button'
import { SkillCard } from '@/components/SkillCard'
import { SkillList } from '@/components/SkillList'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { skills } from '@/data/skillsList'

export const Skills = () => {
  return (
    <section className='mb-40'>
      <Title title='Skills' />
      <Subtitle subtitle='This is my list of technologies that I handle: ' className='mx-5' />
      <SkillList className='overflow-x-auto scrollbar-hide md:scrollbar-default overflow-y-hidden'>
        {skills.map(skill =>
          <SkillCard
            {...skill}
            key={skill.name}
            className='flex flex-col items-center shadow-md hover:shadow-xl dark:ring-primary dark:shadow-primary traslation_animated'
          />)}
      </SkillList>
      <div className='flex justify-center'>
        <Button className='w-40 bg-primary text-white px-6'>
          Show All
        </Button>
      </div>
    </section>
  )
}
