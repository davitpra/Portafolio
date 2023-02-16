import Border from '../Border'
import { PrimaryButton } from '../PrimaryButton'
import { SecondaryButton } from '../SecondaryButton'

export const ProjectCard = () => {
  return (
    <Border className='md:mx-4'>
      <h4 className=' title mb-4'>Project</h4>
      <div className='font-bold text-lg my-1'>
        To-Do-List-React
      </div>
      <p className=' w-auto mb-2'>
        A task management application built in React that allows you to create and manage your task lists with ease.
      </p>
      <p className=''>
        It uses Local Storage to save your information and React Context to communicate between components. Additionally, it utilizes React Portals to teleport components for a seamless user experience
      </p>
      <div className='flex flex-col md:flex-row items-center justify-center mt-4'>
        {/* Botton de Correo */}
        <PrimaryButton>
          Demo
        </PrimaryButton>
        {/* Botton de Message */}
        <SecondaryButton>
          GitHub
        </SecondaryButton>
      </div>
    </Border>

  )
}
