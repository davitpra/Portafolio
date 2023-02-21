import { ProfileAbout } from '@/components/Home/ProfileAbout'
import { ProfileHero } from '@/components/Home/ProfileHero'

const profile = () => {
  return (
    <div className='h-screen w-full'>
      <ProfileHero />
      <ProfileAbout />
    </div>
  )
}

export default profile
