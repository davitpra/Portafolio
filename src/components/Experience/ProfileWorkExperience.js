import Border from '../Border'

export function ProfileWorkExperience ({ children }) {
  return (
    <Border className='mt-4'>
      <h4 className='title mb-4'>Experience</h4>
      {children}
    </Border>

  )
}
