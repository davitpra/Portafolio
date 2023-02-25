import Link from 'next/link'
import { Whatsapp } from '../Whatsapp'
import { usePathname } from 'next/navigation'
import { useDownloadCV } from '@/hooks/useDownloadCV'
import { MdDownload, MdInfo } from 'react-icons/md'
import { AiOutlineWhatsApp, AiFillGithub } from 'react-icons/ai'

const SIZE = '25px'

export const Navigation = ({ toggle }) => {
  const pathName = usePathname()
  const { downloadCV } = useDownloadCV()

  const haddleClick = () => {
    toggle()
    downloadCV()
  }
  return (
    <ul
      className='p-4 pb-8 absolute top-[100px] md:top-[70px] right-0 w-full md:w-1/3 rounded-lg bg-white  dark:bg-darkPrimary border-2 border-tertiary my-2 flex flex-col items-start'
    >
      <button
        className='flex items-center gap-4 ml-4 text-2xl my-6 hover:font-bold hover:text-primary'
        onClick={() => haddleClick()}
      >
        <MdDownload size={SIZE} /> Curriculum
      </button>
      <Whatsapp
        className='flex items-center gap-4 ml-4 text-2xl my-6 hover:font-bold hover:text-primary'
        onClick={() => toggle()}
      >
        <AiOutlineWhatsApp size={SIZE} /> Whatsapp
      </Whatsapp>
      <Link
        href='https://github.com/davitpra'
        target='_blank'
        className='flex items-center gap-4 ml-4 text-2xl my-6 hover:font-bold hover:text-primary'
        onClick={() => toggle()} rel='noreferrer'
      >
        <AiFillGithub size={SIZE} /> GitHub
      </Link>
      <Link
        onClick={() => toggle()}
        href='/info'
        className={`ml-4 text-2xl my-6 flex items-center gap-4 ${pathName === '/info' ? 'font-bold text-primary' : ''}`}
      >
        <MdInfo size={SIZE} /> Information
      </Link>

    </ul>
  )
}
