import { useState } from 'react'
import { Button } from './Button'
import { PrimaryButton } from './PrimaryButton'
import ProfileDot from './ProfileDot'
import { AiFillGithub } from 'react-icons/ai'

export const ProjectCard = () => {
  const [show, setShow] = useState(true)

  const toggleshow = () => {
    setShow(!show)
  }

  return (
    <div
      className='relative h-96 m-4 w-full rounded-lg shadow-md bg-cover bg-top max-w-xs flex justify-center'
      style={{ backgroundImage: 'url(./img/To-Do-List-React.png' }}
    >
      {/* card */}
      <div
        className='absolute bottom-0 h-auto w-5/6 bg-white dark:bg-darkPrimary ring-1 ring-tertiary  shadow-lg rounded-lg p-5 flex flex-col justify-center items-start'
      >
        <div className='inline-flex items-center '>
          <ProfileDot className='h-2 mx-2' />
          <div className='flex-1 text-sm'>
            React
          </div>
        </div>
        <div className='font-bold text-lg my-1'>
          To-Do-List-React
        </div>

        <p className=' w-auto text-sm text-tertiary mb-2'>
          A task management application built in React that allows you to create and manage your task lists with ease.
        </p>
        {show
          ? <button
              className='text-xs text-primary'
              onClick={toggleshow}
            >
            show more
            </button>
          : <div className=''>
            <p className='text-sm text-tertiary'>
              It uses Local Storage to save your information and React Context to communicate between components. Additionally, it utilizes React Portals to teleport components for a seamless user experience
            </p>
            <button
              className='text-xs text-primary'
              onClick={toggleshow}
            >
              show less
            </button>
            </div>}
        <div className='flex justify-center m-2 mx-3'>
          <Button className='w-full bg-primary'>Demo</Button>
          <Button className='w-full'><AiFillGithub /></Button>
        </div>

      </div>
    </div>
  )
}
