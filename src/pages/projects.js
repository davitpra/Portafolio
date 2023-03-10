import { Slider } from '@/components/Project/Slider'
import { ProjectImage } from '@/components/Project/ProjectImage'
import { ProjectCard } from '@/components/Project/ProjectCard'
import { SkillCard } from '@/components/Project/SkillCard'
import { useSlide } from '@/hooks/useSlide'
import { projectsInfo } from '@/data/projectsInfo'
import { motion } from 'framer-motion'

const variants = {
  hidden: {
    opacity: 0,
    y: -10
  },
  visible: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 1
    }
  }),
  content: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5
    }
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: {
      duration: 0.6
    }
  }
}

const projects = () => {
  const { currentIndex, prevSlide, nextSlide, goToSlide } = useSlide(projectsInfo)

  return (
    <div className='w-full flex flex-col md:flex-row my-4 md:space-x-4'>
      <motion.div
        initial='hidden'
        animate='content'
        exit='exit'
        variants={variants}
      >
        <Slider prevSlide={prevSlide} nextSlide={nextSlide} goToSlide={goToSlide}>
          <ProjectImage projectInfo={projectsInfo[currentIndex]} />
        </Slider>
      </motion.div>
      <motion.div
        initial='hidden'
        animate='content'
        exit='exit'
        variants={variants}
        className='w-full h-full flex flex-col '
      >
        <ProjectCard {...projectsInfo[currentIndex]} />
        <ul className='w-full md:w-[400px] px-1 py-4 flex items-center overflow-x-auto md:space-x-4'>
          {projectsInfo[currentIndex].skills.map((skill, index) =>
            <motion.li
              custom={{ delay: (index + 1) * 0.5 }}
              initial='hidden'
              animate='visible'
              variants={variants}
              className=''
              key={index}
            >
              <SkillCard {...skill} />
            </motion.li>
          )}
        </ul>
      </motion.div>
    </div>
  )
}

export default projects
