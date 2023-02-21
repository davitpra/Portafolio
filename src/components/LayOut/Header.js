import Link from 'next/link'
import { DarkMode } from './DarkMode'
import { ProfileBubble } from './ProfileBubble'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Information', path: '/info' }
]

export const Header = () => {
  const pathName = usePathname()
  return (
    <header className='h-28 md:h-20 px-6 flex items-center justify-between'>
      <ProfileBubble />
      <ul className='hidden md:flex gap-4'>
        {navigation.map(nav =>
          <Link
            href={nav.path}
            key={nav.label}
            className={`text-xl traslation_animated hover:font-bold ${nav.path === pathName ? 'font-bold text-primary -translate-y-1' : ''}`}
          >
            {nav.label}
            {nav.path === pathName
              ? (<motion.div className='underline' layoutId='underline' />)
              : null}
          </Link>
        )}
      </ul>
      <div className='flex flex-col ml-20 md:hidden w-full items-center'>
        <h2 className='text-3xl font-semibold'> David Prado</h2>
        <h3 className='text-xl text-tertiary '> Junior Developer</h3>
      </div>
      <div className='justify-end '>
        <DarkMode />
      </div>
    </header>
  )
}
