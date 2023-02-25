import Border from '../Border'

export function ProfileWorkExperience ({ children }) {
  return (
    <Border className='my-4' padding='p-8 pb-4'>
      <h4 className='title mb-4'>Experience</h4>
      {children}
    </Border>

  )
}
