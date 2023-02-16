import { ProfileAbout } from '@/components/Home/ProfileAbout'
import { ProfileHero } from '@/components/Home/ProfileHero'

import React from 'react'

const profile = () => {
  return (
    <div className='h-screen w-full'>
      <ProfileHero />
      <ProfileAbout />
    </div>

  )
}

export default profile
