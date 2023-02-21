import { ProfileWorkExperience } from '@/components/Experience/ProfileWorkExperience'
import { motion } from 'framer-motion'

function work () {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.5
        }
      }}
      exit={{
        y: -10,
        opacity: 0,
        transition: {
          duration: 0.6
        }
      }}
    >
      <ProfileWorkExperience />
    </motion.div>
  )
}

export default work
