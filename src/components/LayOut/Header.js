import Link from 'next/link'
import { DarkMode } from './DarkMode'
import ProfileBubble from './ProfileBubble'

export const Header = () => {
  const navigation = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Information', path: '/info' }
  ]

  return (
    <header className='h-28 lg:h-20 px-6 flex items-center justify-between border-b-4 border-tertiary dark:border-white z-10'>
      <ProfileBubble />
      <ul className='hidden lg:flex gap-4'>
        {navigation.map(nav =>
          <Link
            href={nav.path}
            key={nav.label}
            className='text-xl font-semibold traslation_animated hover:text-primary hover:font-bold'
          >
            {nav.label}
          </Link>
        )}
      </ul>
      <div className='flex flex-col ml-20 lg:hidden'>
        <h2 className='text-4xl font-semibold'> David Prado</h2>
        <h3 className='text-2xl text-tertiary '> Junior Developer</h3>
      </div>
      <div className='justify-end '>
        <DarkMode />
      </div>
    </header>
  )
}
