import { Border } from '@/components/Border'
import { LargePrimaryButton } from '@/components/LargePrimaryButton'
import { ProjectCard } from '@/components/ProjectCard'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import React from 'react'

export const Projects = () => {
  return (
    <Border>
      <div className='w-5/6 flex flex-col'>
        <Title title='Projects' />
        <Subtitle subtitle='Lets me show you some of proyects that I had worked on: ' className='my-3' />
        <div className='flex flex-wrap justify-center'>
          {[1, 2].map(card => <ProjectCard key={card} />)}
        </div>
        <LargePrimaryButton>
          View All
        </LargePrimaryButton>
      </div>
    </Border>
  )
}
