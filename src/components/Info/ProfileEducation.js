import ProfileDot from '../Home/ProfileDot'

export const ProfileEducation = () => {
  const educationInfo = [
    { start: 'November 2021', end: 'In Course', title: 'Full Stack Developer', school: 'Platzi - Web Developer School' },
    { start: 'November 2021', end: 'Junuary 2023', title: 'React Frontend Developer', school: 'Platzi - Web Developer School' },
    { start: 'September 2011', end: 'May 2018', title: 'Civil Engineer', school: 'Nacional Politecnical School' }
  ]
  return (
    <div className='h-auto flex-1 rounded-lg shadow-xl p-8 ring-2 ring-tertiary bg-white dark:bg-darkPrimary'>
      <h4 className='text-xl text-primary font-bold'>Education</h4>
      <div className='relative px-4'>
        <div className='absolute h-full border border-dashed border-opacity-20 border-secondary dark:border-white' />

        {educationInfo.map(edu =>
          <div className='flex items-center w-full my-6 -ml-1.5' key={edu.title}>
            <div className='w-1/12 z-10'>
              <ProfileDot />
            </div>

            <div className='w-11/12'>
              <p className='text-xs text-tertiary'>{edu.start} - {edu.end}</p>
              <p className='text-sm'>{edu.title}</p>
              <p className='text-xs text-tertiary'>{edu.school}</p>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
