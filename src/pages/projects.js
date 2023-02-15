import { Subtitle } from '@/components/Subtitles'
import { Slider } from '@/components/Slider'

const projects = () => {
  return (
    <>
      <h1 className='title'>Projects </h1>
      <Subtitle subtitle='This is my list of technologies that I handle: ' className='py-3' />
      <Slider />
    </>
  )
}

export default projects
