import ResumeCard from '@/components/ResumeCard'
import { Title } from '@/components/Title'
import { resumeInfo } from '@/data/resumeInfo'

const Resume = () => {
  return (
    <>
      <Title title='Work Experience' className='mt-10 mx-6' />
      <div class='container'>
        <div
          class='flex flex-col mx-auto p-2'
        >
          {resumeInfo.map(data =>
            <ResumeCard {...data} key={data.position} />
          )}
        </div>
      </div>
    </>
  )
}

export default Resume
