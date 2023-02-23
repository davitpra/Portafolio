import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DarkModeMenu } from './DarkModeMenu'

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Information', path: '/info' }
]

export const Navigation = ({ toggle }) => {
  const pathName = usePathname()
  return (
    <ul
      className='p-4 pb-8 absolute top-[110px] right-0 w-full rounded-lg bg-fourthy  dark:bg-darkPrimary border-2 border-tertiary my-2'
    >
      {navigation.map(nav => (
        <Link
          key={nav.label}
          onClick={() => toggle()}
          href={nav.path}
          className={`flex items-center ${nav.path === pathName ? 'font-bold text-primary' : ''}`}
        >
          <li className='ml-4 text-2xl my-6'> {nav.label} </li>
        </Link>
      ))}
      <DarkModeMenu />
    </ul>
  )
}
