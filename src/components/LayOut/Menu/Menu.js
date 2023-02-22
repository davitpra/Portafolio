import { motion } from 'framer-motion'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import { useState } from 'react'

export const Menu = () => {
  const [isOpen, toggleOpen] = useState(false)
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className='md:hidden absolute top-4 right-0 bottom-0 w-full h-full'
    >
      <Navigation isOpen={isOpen} />
      <MenuToggle toggle={() => toggleOpen(!isOpen)} />
    </motion.nav>
  )
}
