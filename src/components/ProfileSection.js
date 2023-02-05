import React from 'react'
import { ProfileInfo } from './ProfileInfo'
import { ProfileEducation } from './ProfileEducation'
import { ProfileHobbies } from './ProfileHobbies'

const ProfileSection = () => {
  return (
    <div className='w-full flex flex-col md:flex-row my-4 space-y-4 md:space-x-4 md:space-y-0'>
      {/* <!-- personal Info --> */}
      <ProfileInfo />
      {/* <!-- Activity Log --> */}
      <div className='w-full flex flex-col space-y-4'>
        <ProfileEducation />
        <ProfileHobbies />
      </div>
    </div>
  )
}

export default ProfileSection
