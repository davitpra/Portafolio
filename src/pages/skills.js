import { Border } from '@/components/Border'
import { SkillCard } from '@/components/SkillCard'
import { SkillList } from '@/components/SkillList'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { skills } from '@/data/skillsList'

export default function skill () {
  return (
    <Border>
      <div className='w-5/6'>
        <Title title='Skills' />
        <Subtitle subtitle='This is my list of technologies that I handle: ' className='py-3' />
        <SkillList className='flex-wrap'>
          {skills.map(skill =>
            <SkillCard
              {...skill}
              key={skill.name}
              className=''
            />)}
        </SkillList>
      </div>
    </Border>
  )
}
