import { Button } from '@/components/Button'

export const Hero = () => {
  return (
    <>
      <section
        className='m-16 h-auto'
      >
        <p className='text-4xl font-bold'>Hi! I am </p>
        <h1 className='text-7xl font-bold dark:text-primary my-3'>David Prado</h1>
        <h3 className='text-4xl my-3'> I am Frontend Developer</h3>
      </section>
      <div className='w-full flex justify-center space-x-12 mb-40'>
        <Button
          className=' w-40 bg-primary text-white px-6'
        >
          Hire Me!
        </Button>
        <Button
          className='w-40 bg-fourthy text-black font-semibold px-6'
        >
          Curriculum
        </Button>
      </div>
    </>
  )
}
