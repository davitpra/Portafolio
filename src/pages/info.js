import { ProfileHobbies } from '@/components/Home/ProfileHobbies'
import { ProfileInfo } from '@/components/Home/ProfileInfo'
import { ProfileSection } from '@/components/Home/ProfileSection'
import { ProfileEducation } from '@/components/Home/ProfileEducation'

function info () {
  return (
    <ProfileSection>
      <ProfileInfo />
      <div className='w-full flex flex-col space-y-4'>
        <ProfileEducation />
        <ProfileHobbies />
      </div>
    </ProfileSection>
  )
}

export default info
