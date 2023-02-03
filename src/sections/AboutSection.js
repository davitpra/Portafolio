import { Subtitle } from '@/components/Subtitle'
import { CiLocationOn } from 'react-icons/ci'
import { AiFillGithub } from 'react-icons/ai'
import { Border } from '@/components/Border'
import { PrimaryButton } from '@/components/PrimaryButton'

export const About = () => {
  return (
    <Border>
      <div className='flex flex-col md:flex-row w-5/6 md:space-x-8 space-y-4'>
        {/* image */}
        <div className='w-full md:w-2/5 flex justify-center items-center'>
          <figure className='w-3/4 md:w-full rounded-full overflow-hidden'>
            <img src='./img/foto.png' alt='woman wearing a headwrap and an Africa-shaped earring while smiling' />
          </figure>
        </div>
        {/* content */}
        <article className='w-full md:w-3/5 flex flex-col justify-center items-center'>
          <div className='flex flex-col space-y-4'>
            <Subtitle subtitle='About me' className='text-center md:text-left text-2xl font-bold text-primary' />
            <p className='inline text-secondary dark:text-white w-full text-base mb-4'>I'm a junior web dev always learning. I enjoy using tech to create practical projects. Currently training in Next.Js and seeking opportunities to apply my skills.</p>
            <ul className='md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row text-left justify-center items-center'>
              <li className='text-sm text-secondary dark:text-white flex justify-center items-center space-x-1'><CiLocationOn size={15} />UIO -ECU </li>
              <li className='text-sm text-secondary dark:text-white flex justify-center items-center space-x-1'>
                <AiFillGithub size={15} />
                <span>github.com/davitpra</span>
              </li>
            </ul>
            <div className='flex justify-center'>
              <PrimaryButton>
                Know More
              </PrimaryButton>
            </div>
          </div>
        </article>
      </div>
    </Border>
  )
}
