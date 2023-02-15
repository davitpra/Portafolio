import { Subtitle } from '@/components/Subtitles'
import { Slider } from '@/components/Slider'
import { Title } from '@/components/Title'

const projects = () => {
  return (
    <>
      <Title title='Projects' className='text-primary' />
      <Subtitle subtitle='This is my list of technologies that I handle: ' className='py-3' />
      <Slider />
    </>
  )
}

export default projects
