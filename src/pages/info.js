import { ProfileHobbies } from '@/components/Info/ProfileHobbies'
import { ProfileInfo } from '@/components/Info/ProfileInfo'
import { ProfileEducation } from '@/components/Info/ProfileEducation'

function info () {
  return (
    <div className='w-full flex flex-col my-4 space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
      <ProfileInfo />
      <div className='w-full flex flex-col space-y-4'>
        <ProfileEducation />
        <ProfileHobbies />
      </div>
    </div>
  )
}

export default info
