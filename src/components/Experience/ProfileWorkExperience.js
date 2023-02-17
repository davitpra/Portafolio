import ResumeCard from '@/components/Experience/ResumeCard'
import { resumeInfo } from '@/data/resumeInfo'
import Border from '../Border'

export function ProfileWorkExperience () {
  return (
    <Border className='mt-4'>
      <h4 className='title'>Work Experience</h4>
      <div className='relative'>
        <div className='absolute -left-2 md:left-0 h-full border border-dashed border-opacity-40 bg-white ring-0 dark:bg-secondary border-secondary dark:border-white' />
        {resumeInfo.map(data =>
          <ResumeCard {...data} key={data.position} className='bg-white dark:bg-darkPrimary' />
        )}
      </div>
    </Border>

  )
}
