import { ProjectCard } from '@/components/ProjectCard'

const projects = () => {
  return (
    <>
      <div>proyects</div>
      <div className='flex flex-wrap'>
        {[1, 2, 3].map(card => <ProjectCard key={card} />)}
      </div>
    </>
  )
}

export default projects
