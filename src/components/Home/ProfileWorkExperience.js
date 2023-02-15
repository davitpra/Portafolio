import ResumeCard from '@/components/ResumeCard'
import { resumeInfo } from '@/data/resumeInfo'

export default function ProfileWorkExperience () {
  return (
    <div className='flex-1 rounded-lg shadow-xl p-8 my-4 ring-2 ring-tertiary  bg-white dark:bg-darkPrimary'>
      <h4 className='text-xl text-primary font-bold'>Work Experience</h4>
      <div className='relative'>
        <div className='absolute h-full border border-dashed border-opacity-20 border-secondary dark:border-white' />
        {resumeInfo.map(data =>
          <ResumeCard {...data} key={data.position} />
        )}
      </div>
    </div>
  )
}
