import Border from '../Border'

export const ProfileEducation = () => {
  const educationInfo = [
    { start: 'September 2023', end: 'May 2025', title: 'Full Stack Developer', school: 'Fanshawe College' },
    { start: 'November 2019', end: 'May 2023', title: 'Full Stack Web Developer', school: 'Platzi - Web Development School' },
    { start: 'November 2021', end: 'Jan 2023', title: 'React- Frontend Web Developer', school: 'Platzi - Web Development School' }
  ]
  return (
    <Border>
      <h4 className='text-xl text-primary font-bold'>Education</h4>
      <div className='relative'>
        <div className='absolute -left-2 md:left-0 h-full border border-dashed border-opacity-40 bg-white ring-0 dark:bg-secondary border-secondary dark:border-white' />

        {educationInfo.map(edu =>
          <div className='flex items-center w-full my-6 -ml-1.5' key={edu.title}>
            <div className='w-1/12 z-10'>
              <div className='dot' />
            </div>

            <div className='w-11/12'>
              <p className=' text-tertiary'>{edu.start} - {edu.end}</p>
              <p className='text-lg font-semibold'>{edu.title}</p>
              <p className=' text-tertiary'>{edu.school}</p>
            </div>
          </div>
        )}

      </div>
    </Border>
  )
}
