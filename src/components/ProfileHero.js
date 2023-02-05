import { PrimaryButton } from './PrimaryButton'
import { SecondaryButton } from './SecondaryButton'

const ProfileHero = () => {
  return (
    <section className='rounded-lg shadow-xl pb-8 ring-2 ring-tertiary'>
      {/* background profile */}
      <div className='w-full h-[250px] '>
        <img src='https://images.pexels.com/photos/32997/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='w-full h-full rounded-tl-lg rounded-tr-lg' />
      </div>
      {/* profile */}
      <div className='flex flex-col items-center -mt-20'>
        {/* imagen */}
        <img src='./img/foto.png' className='w-40 border-4 border-tertiary rounded-full' />
        {/* nombre y check */}
        <div className='flex items-center space-x-2 mt-2'>
          <p className='text-4xl font-semibold dark:text-primary'>David Prado</p>
          <span className='bg-primary rounded-full p-1 my-3' title='Verified'>
            <svg xmlns='http://www.w3.org/2000/svg' className='text-gray-100 h-2.5 w-2.5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='4' d='M5 13l4 4L19 7' /></svg>
          </span>
        </div>
        {/* Titulo y Lugar */}
        <p className='text-2xl text-secondary dark:text-tertiary'>Junior Web Developer</p>
        <p className='text-xl'>Quito, Ecuador</p>
      </div>
      {/* Bottones */}
      <div className='flex flex-col md:flex-row items-center justify-center mt-4 px-8'>
        {/* Botton de Correo */}
        <PrimaryButton>
          Correo
        </PrimaryButton>
        {/* Botton de Message */}
        <SecondaryButton>
          WhatsApp
        </SecondaryButton>
      </div>
    </section>
  )
}

export default ProfileHero
