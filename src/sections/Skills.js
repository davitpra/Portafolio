import { SkillCard } from '@/components/SkillCard'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'

const habilities = [
  {
    name: 'Next js',
    level: 'Intermidian',
    svg: 'nextjs-icon.svg'
  },
  {
    name: 'React',
    level: 'Advance',
    svg: 'react-icon.svg'
  }
//   { technology: 'React' }
//   { technology: 'Redux' },
//   { technology: 'Xstate' },
//   { technology: 'JavaScript' },
//   { technology: 'TypeScript' },
//   { technology: 'WebPack' },
//   { technology: 'Vite' },
//   { technology: 'tailwind' },
//   { technology: 'Styled Components' },
//   { technology: 'CCS' },
//   { technology: 'HTML' }
]

export const Skills = () => {
  return (
    <>
      <Title title='Skills' />
      <Subtitle subtitle='Library for building user interfaces' />
      <ul className='flex space-x-4'>
        {habilities.map(skill => <SkillCard {...skill} key={skill.name} />)}
      </ul>

    </>
  )
}
