import { Border } from '@/components/Chat/Border'
import { LargeSecondaryButton } from '@/components/LargeSecondaryButton'
import { SkillCard } from '@/components/Project/SkillCard'
import { SkillList } from '@/components/Skills/SkillList'
import { Title } from '@/components/Title'
import { skillShort } from '@/data/skillsShort'

export const Skills = () => {
  return (
    <Border className='rounded-b-[3rem] rounded-r-[3rem] justify-center'>
      <article className='w-11/12'>
        <Title title='Skills' className='py-2' />
        <SkillList className=''>
          {skillShort.map(skill =>
            <SkillCard
              {...skill}
              key={skill.name}
              className=''
            />)}
        </SkillList>
        <div className='flex justify-center'>
          <LargeSecondaryButton>
            See All
          </LargeSecondaryButton>
        </div>
      </article>
    </Border>
  )
}
