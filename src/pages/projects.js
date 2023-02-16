import { useState } from 'react'
import { ProjectCard } from '@/components/Project/ProjectCard'
import { Slider } from '@/components/Project/Slider'
import { projectsInfo } from '@/data/projectsInfo'
import ProjectImage from '@/components/Project/ProjectImage'

const projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? projectsInfo.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === projectsInfo.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  console.log(projectsInfo[currentIndex].url)
  return (
    <>

      <div className='w-full flex flex-col md:flex-row '>
        <Slider prevSlide={prevSlide} nextSlide={nextSlide} goToSlide={goToSlide}>
          <ProjectImage projectInfo={projectsInfo[currentIndex]} />
        </Slider>
        <div className='w-full h-full flex flex-col'>
          <ProjectCard {...projectsInfo[currentIndex]} />
        </div>
      </div>

    </>
  )
}

export default projects
