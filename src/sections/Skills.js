import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { SkillCard } from '@/components/SkillCard'
import { SkillList } from '@/components/SkillList'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { skillShort } from '@/data/skillsShort'

export const Skills = () => {
  return (
    <Border className='flex-col'>
      <Title title='Skills' className='justify-center flex py-2' />
      <Subtitle subtitle='This is my list of technologies that I handle: ' className='flex justify-center' />
      <SkillList className='flex-wrap justify-center'>
        {skillShort.map(skill =>
          <SkillCard
            {...skill}
            key={skill.name}
            className='flex flex-col items-center ring-1 ring-tertiary shadow-md hover:shadow-xl dark:ring-primary dark:shadow-primary traslation_animated'
          />)}
      </SkillList>
      <div className='flex justify-center'>
        <Button className='w-40 bg-primary text-white px-6'>
          See All
        </Button>
      </div>
    </Border>
  )
}
