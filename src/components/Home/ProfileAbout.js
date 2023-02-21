import Border from '../Border'
import { motion } from 'framer-motion'

export const ProfileAbout = () => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.5
      }}
      exit={{ opacity: 0 }}
    >
      <Border className=''>
        <h4 className='title'>About</h4>
        <p className='text-lg mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates obcaecati numquam error et ut fugiat asperiores. Sunt nulla ad incidunt laboriosam, laudantium est unde natus cum numquam, neque facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni odio magnam commodi sunt ipsum eum! Voluptas eveniet aperiam at maxime, iste id dicta autem odio laudantium eligendi commodi distinctio!</p>
      </Border>
    </motion.div>
  )
}
