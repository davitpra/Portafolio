import { motion } from 'framer-motion'

export function ProjectImage ({ projectInfo }) {
  return (
    <div className='flex-1'>
      <motion.div
        layout
        style={{ backgroundImage: `url(${projectInfo.url})` }}
        className='border w-[350px] h-[648px] bg-center bg-cover duration-500  rounded-lg'
      />
    </div>
  )
}
