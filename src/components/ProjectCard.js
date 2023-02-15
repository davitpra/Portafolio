import { Button } from './Button'
import ProfileDot from './ProfileDot'
import { AiFillGithub } from 'react-icons/ai'

export const ProjectCard = () => {
  return (
    <div className='h-full w-full md:w-1/3 bg-white dark:bg-darkPrimary ring-1 ring-tertiary  shadow-lg rounded-lg p-5 flex flex-col justify-center items-start'>
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
      <p className='text-sm text-tertiary'>
        It uses Local Storage to save your information and React Context to communicate between components. Additionally, it utilizes React Portals to teleport components for a seamless user experience
      </p>
      <div className='flex justify-center m-2 mx-3'>
        <Button className='w-full bg-primary'>Demo</Button>
        <Button className='w-full'><AiFillGithub /></Button>
      </div>
    </div>
  )
}
