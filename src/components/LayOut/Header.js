import Link from 'next/link'
import { DarkMode } from './DarkMode'
import ProfileBubble from './ProfileBubble'
import { usePathname } from 'next/navigation'

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Information', path: '/info' }
]

export const Header = () => {
  const pathName = usePathname()
  return (
    <header className='h-28 lg:h-20 px-6 flex items-center justify-between border-b-4 border-tertiary dark:border-white z-10'>
      <ProfileBubble />
      <ul className='hidden lg:flex gap-4'>
        {navigation.map(nav =>
          <Link
            href={nav.path}
            key={nav.label}
            className={`text-xl traslation_animated hover:font-bold ${nav.path === pathName ? 'font-bold text-primary' : ''}`}
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
