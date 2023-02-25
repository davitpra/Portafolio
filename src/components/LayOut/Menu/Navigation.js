import Link from 'next/link'
import { Whatsapp } from '../Whatsapp'
import { usePathname } from 'next/navigation'
import { useDownloadCV } from '@/hooks/useDownloadCV'
import { MdDownload, MdEmail, MdInfo } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const SIZE = '25px'

const navigation = [
  { label: 'Email', path: '/contact', Svg: MdEmail },
  { label: 'Information', path: '/info', Svg: MdInfo }
]

export const Navigation = ({ toggle }) => {
  const pathName = usePathname()
  const { downloadCV } = useDownloadCV()

  const haddleClick = () => {
    toggle()
    downloadCV()
  }
  return (
    <ul
      className='p-4 pb-8 absolute top-[100px] md:top-[70px] right-0 w-full md:w-1/3 rounded-lg bg-fourthy  dark:bg-darkPrimary border-2 border-tertiary my-2 flex flex-col items-start'
    >
      <button
        className='flex items-center gap-4 ml-4 text-2xl my-6 hover:font-bold hover:text-primary'
        onClick={() => haddleClick()}
      >
        <MdDownload size={SIZE} /> Curriculum
      </button>
      <Whatsapp
        className='flex items-center gap-4 ml-4 text-2xl my-6 hover:font-bold hover:text-primary'
      >
        <AiOutlineWhatsApp size={SIZE} /> Whatsapp
      </Whatsapp>
      {navigation.map(nav => (
        <Link
          key={nav.label}
          onClick={() => toggle()}
          href={nav.path}
          className={`ml-4 text-2xl my-6 flex items-center gap-4 ${nav.path === pathName ? 'font-bold text-primary' : ''}`}
        >
          <nav.Svg size={SIZE} />
          <li> {nav.label} </li>
        </Link>
      ))}
    </ul>
  )
}
