import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiFillHome } from 'react-icons/ai'
import { MdWork, MdInfo, MdFavorite } from 'react-icons/md'
import { DarkMode } from './DarkMode'

const SIZE = '25px'

const navigation = [
  { label: 'Home', path: '/', Svg: AiFillHome },
  { label: 'Projects', path: '/projects', Svg: MdFavorite },
  { label: 'Experience', path: '/experience', Svg: MdWork },
  { label: 'Information', path: '/info', Svg: MdInfo }
]

export function TabBar () {
  const pathName = usePathname()
  return (
    <nav
      className='w-full h-auto px-6 py-4 flex items-center justify-between fixed left-0 bottom-0 md:hidden bg-white dark:bg-darkPrimary border-t-2 border-tertiary z-30'
    >
      <DarkMode />
      {navigation.map(nav => {
        const color = nav.path === pathName ? '#1d4ed8' : 'gray'
        return (
          <Link
            key={nav.label}
            href={nav.path}
          >
            <nav.Svg size={SIZE} color={color} />
          </Link>
        )
      })}
    </nav>
  )
}
