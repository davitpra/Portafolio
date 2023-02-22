import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

export const Navigation = ({ isOpen }) => {
  return (
    <motion.ul
      variants={variants}
      className={`p-4 absolute top-[110px] right-0 w-full rounded-lg 
      ${isOpen
        ? 'bg-fourthy border-2 border-tertiary dark:bg-darkPrimary dark:border-white'
        : 'bg-transparent'}
      `}
    >
      {itemIds.map(i => (
        <MenuItem i={i} key={i} />
      ))}
    </motion.ul>
  )
}

const itemIds = [0, 1, 2, 3, 4]
