import { Border } from '@/components/Border'
import { PrimaryButton } from '@/components/PrimaryButton'
import { SecondaryButton } from '@/components/SecondaryButton'

export const Hero = () => {
  return (
    <>
      <Border>
        <div className='w-5/6 my-6'>
          <article
            className='h-auto'
          >
            <p className='text-4xl font-bold'>Hi! I am </p>
            <h1 className='text-7xl font-bold dark:text-primary my-3'>David Prado</h1>
            <h3 className='text-4xl my-3 '> I am Frontend Developer</h3>
          </article>
          <div className='w-full flex flex-wrap justify-center items-center mt-6'>
            <PrimaryButton>
              Hire Me!
            </PrimaryButton>
            <SecondaryButton>
              Curriculum
            </SecondaryButton>
          </div>
        </div>
      </Border>

    </>
  )
}
