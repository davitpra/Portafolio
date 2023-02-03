import Link from 'next/link'
import { DarkMode } from '@/components/DarkMode'

export const Header = () => {
  const navigation = [
    { label: 'Home', path: '/' },
    { label: 'Resume', path: '/resume' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' }
  ]

  return (
    <header className='px-6 h-16 flex items-center justify-between border-b-4 border-primary'>
      <ul className='flex gap-4'>
        {navigation.map(nav =>
          <Link
            href={nav.path}
            key={nav.label}
            className='font-semibold traslation_animated'
          >
            {nav.label}
          </Link>
        )}
      </ul>
      <DarkMode />
    </header>
  )
}
