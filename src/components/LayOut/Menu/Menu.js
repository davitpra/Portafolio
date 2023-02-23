import { motion } from 'framer-motion'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import { useState } from 'react'

export const Menu = () => {
  const [isOpen, toggleOpen] = useState(false)
  return (
    <motion.nav
      animate={isOpen ? 'open' : 'closed'}
      className='md:hidden w-full h-full'
    >
      {isOpen && <Navigation toggle={toggleOpen} />}
      <MenuToggle toggle={() => toggleOpen(!isOpen)} />
    </motion.nav>
  )
}
