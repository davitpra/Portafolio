import Link from 'next/link'
import Border from '../Border'

export const ProjectCard = ({ name, description, features, demoUrl, gitHubUrl }) => {
  return (
    <Border className='h-2/3 mb-4'>
      <h1 className=' title mb-4'>
        Project
      </h1>
      <h2 className='font-bold text-lg mb-2'>
        {name}
      </h2>
      <p className=' w-auto mb-2'>
        {description}
      </p>
      <h2 className='font-bold text-lg mb-2'>
        Feature
      </h2>
      {
      features.map((feature) =>
        <li key={feature}>{feature}</li>
      )
      }

      <div className='flex flex-col md:flex-row items-center justify-center mt-4'>
        {/* Botton de Demo */}
        <Link href={demoUrl} target='_blank' className='primary_button text-center' rel='noreferrer'>
          Demo
        </Link>
        {/* Botton de Github */}
        <Link href={gitHubUrl} target='_blank' className='secondary_button text-center' rel='noreferrer'>
          GitHub
        </Link>
      </div>
    </Border>

  )
}
