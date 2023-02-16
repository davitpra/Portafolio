import Border from '../Border'
import { PrimaryButton } from '../PrimaryButton'
import { SecondaryButton } from '../SecondaryButton'

export const ProjectCard = ({ name, description, features }) => {
  return (
    <Border className='h-2/3'>
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
