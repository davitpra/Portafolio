import { motion } from 'framer-motion'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import { useState } from 'react'

export const Menu = () => {
  const [isOpen, toggleOpen] = useState(false)
  return (
    <motion.nav
      animate={isOpen ? 'open' : 'closed'}
      className='ring-2 ring-tertiary rounded-md hover:ring-primary hover:shadow-2xl flex justify-center items-center'
    >
      {isOpen && <Navigation toggle={toggleOpen} />}
      <MenuToggle toggle={() => toggleOpen(!isOpen)} />
    </motion.nav>
  )
}
