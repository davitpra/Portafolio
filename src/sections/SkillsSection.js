import { Border } from '@/components/Border'
import { LargePrimaryButton } from '@/components/LargePrimaryButton'
import { SkillCard } from '@/components/SkillCard'
import { SkillList } from '@/components/SkillList'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { skillShort } from '@/data/skillsShort'

export const Skills = () => {
  return (
    <Border>
      <div className='w-5/6 my-6'>
        <Title title='Skills' className='py-2' />
        <Subtitle subtitle='This is my list of technologies that I handle: ' className='' />
        <SkillList className='flex-wrap'>
          {skillShort.map(skill =>
            <SkillCard
              {...skill}
              key={skill.name}
              className=''
            />)}
        </SkillList>
        <div className='flex justify-center'>
          <LargePrimaryButton>
            See All
          </LargePrimaryButton>
        </div>
      </div>
    </Border>
  )
}
