import { ResumeCard } from '@/components/Experience/ResumeCard'
import { resumeInfo } from '@/data/resumeInfo'
import { ProfileWorkExperience } from '@/components/Experience/ProfileWorkExperience'
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

function work () {
  return (
    <motion.div
      initial='hidden'
      animate='content'
      exit='exit'
      variants={variants}
    >
      <ProfileWorkExperience>
        <ul className='relative'>
          <div className='absolute -left-2 md:left-0 h-full border border-dashed border-opacity-40 bg-white ring-0 dark:bg-secondary border-secondary dark:border-white' />
          {resumeInfo.map((data, index) =>
            <motion.li
              custom={{ delay: (index + 1) * 0.5 }}
              initial='hidden'
              animate='visible'
              variants={variants}
              key={data.position}
              className='my-8'
            >
              <ResumeCard {...data} className='bg-white dark:bg-darkPrimary' />
            </motion.li>

          )}
        </ul>
      </ProfileWorkExperience>
      <div id='modal-root' />
    </motion.div>
  )
}

export default work
