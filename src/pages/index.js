import { ProfileAbout } from '@/components/Home/ProfileAbout'
import { ProfileHero } from '@/components/Home/ProfileHero'
import { motion } from 'framer-motion'

const profile = () => {
  return (
    <div className='h-screen w-full'>
      <motion.div
        initial={{ y: -10 }}
        animate={{
          y: 0,
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
      >
        <ProfileHero />
      </motion.div>
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
        <ProfileAbout />
      </motion.div>
    </div>
  )
}

export default profile
