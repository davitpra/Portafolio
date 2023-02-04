import { Border } from '@/components/Border'
import { PrimaryButton } from '@/components/PrimaryButton'
import { SecondaryButton } from '@/components/SecondaryButton'

export const Hero = () => {
  return (
    <>
      <Border className='rounded-r-[3rem] rounded-t-[3rem]'>
        <div className='max-w-2xl my-3 px-6'>
          <article
            className='h-auto'
          >
            <p className='text-3xl md:text-4xl md:font-bold text-white '>Hi! I am </p>
            <h1 className='my-3 text-6xl md:text-7xl font-bold text-black dark:text-white'>David Prado</h1>
            <h3 className='my-3 text-3xl md:text-4xl md:font-bold text-white'> I am Frontend Developer</h3>
          </article>
          <div className='w-full flex flex-wrap justify-center items-center mt-6'>
            <PrimaryButton>
              Curriculum
            </PrimaryButton>
            <SecondaryButton>
              Github
            </SecondaryButton>
          </div>
        </div>
      </Border>

    </>
  )
}
