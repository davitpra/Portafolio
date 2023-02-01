import { Button } from '@/components/Button'

export const Hero = () => {
  return (
    <section
      className='m-16'
    >
      <h1 className='text-7xl font-bold'>
        Hi! I am <span className='dark:text-primary'>David</span>
      </h1>
      <h3 className='text-4xl my-3'> I am web Developer</h3>
      <p className='text-tertiary mb-8'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
      <Button
        className='bg-primary text-white px-6'
      >
        Hire Me!
      </Button>
    </section>
  )
}
