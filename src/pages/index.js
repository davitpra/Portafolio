import { ChatDate } from '@/components/ChatDate'
import { Message } from '@/components/Message'
import { About } from '@/sections/AboutSection'
import { Hero } from '@/sections/HeroSection'
import { Projects } from '@/sections/ProjectsSection'
import { Skills } from '@/sections/SkillsSection'

export default function Home () {
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)
  const dayOfWeek = yesterday.toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <>
      <ChatDate className='mt-3 mb-6'> {dayOfWeek} </ChatDate>
      <Hero />
      <Message className='rounded-r-[3rem] rounded-l-lg'>
        Let me tell you about me
      </Message>
      <About />
      <ChatDate className='my-12'>Today</ChatDate>
      <Message message='right' className='rounded-l-[3rem] rounded-t-[3rem]'>
        Hi David, nice to meet you.
      </Message>
      <Message message='right' className='rounded-l-[3rem] rounded-r-lg'>
        You have a very interesting profile.
      </Message>
      <Message message='right' className='rounded-l-[3rem] rounded-b-[3rem]'>
        Can you tell me about the skills you have been learning lately?
      </Message>
      <Message className='rounded-r-[3rem] rounded-t-[3rem] mt-12'>
        Sure!. Lately, I've been focusing on improving my skills in Next JS, React's FrameWork
      </Message>
      <Message className='rounded-r-[3rem] rounded-l-lg'>
        but let me show you my this is my list of technologies that I handle
      </Message>
      <Skills />
      <Message message='right' className='rounded-l-[3rem] rounded-t-[3rem] mt-12'>
        That's kinda impressive
      </Message>
      <Message message='right' className='rounded-l-[3rem] rounded-b-[3rem]'>
        Can you tell me about the recent projects you have worked on?
      </Message>
      <Message className='rounded-r-[3rem] rounded-t-[3rem] mt-12'>
        Thank you, I'm glad you like it
      </Message>
      <Message className='rounded-r-[3rem] rounded-l-lg'>
        Recently, I have been involved in the development of an e-commerce platform. I utilized static site rendering techniques to enhance page speed, incorporating optimization best practices with React.js and Next.js.
      </Message>
      <Projects />
    </>
  )
}
