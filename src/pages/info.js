import { ProfileHobbies } from '@/components/Info/ProfileHobbies'
import { ProfileInfo } from '@/components/Info/ProfileInfo'
import { ProfileEducation } from '@/components/Info/ProfileEducation'
import { motion } from 'framer-motion'

function info () {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6
        }
      }}
      exit={{
        y: -10,
        opacity: 0,
        transition: {
          duration: 0.6
        }
      }}
      className='w-full flex flex-col my-4 space-y-4 md:flex-row md:space-x-4 md:space-y-0'
    >
      <ProfileInfo />
      <div className='w-full flex flex-col space-y-4'>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.6,
              delay: 0.3
            }
          }}
        >
          <ProfileEducation />
        </motion.div>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.6,
              delay: 0.6
            }
          }}
        >
          <ProfileHobbies />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default info
