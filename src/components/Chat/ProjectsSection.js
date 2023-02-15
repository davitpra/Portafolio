import { Border } from '@/components/Chat/Border'
import { LargeSecondaryButton } from '@/components/LargeSecondaryButton'
import { ProjectCard } from '@/components/ProjectCard'
import { Title } from '@/components/Title'
import React from 'react'

export const Projects = () => {
  return (
    <Border className='rounded-b-[3rem] rounded-r-[3rem] justify-center'>
      <div className='w-5/6 flex flex-col'>
        <Title title='Projects' />
        <div className='shrink-0 flex justify-center'>
          <ProjectCard />
        </div>
        <LargeSecondaryButton>
          View All
        </LargeSecondaryButton>
      </div>
    </Border>
  )
}
