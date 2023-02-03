import { ProjectCard } from '@/components/ProjectCard'
import React from 'react'

export const Projects = () => {
  return (
    <div className='flex flex-wrap'>
      {[1, 2, 3].map(card => <ProjectCard key={card} />)}
    </div>
  )
}
