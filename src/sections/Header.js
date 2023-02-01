import Link from 'next/link'
import { DarkMode } from '@/components/DarkMode'

export const Header = () => {
  const navigation = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' }
  ]

  return (
    <header className='h-16 flex items-center justify-between'>
      <ul className='flex gap-4'>
        {navigation.map(nav =>
          <Link
            href={nav.path}
            key={nav.label}
            className='font-semibold text-tertiary hover:text-secondary dark:hover:text-white'
          >
            {nav.label}
          </Link>
        )}
      </ul>
      <DarkMode />
    </header>
  )
}
