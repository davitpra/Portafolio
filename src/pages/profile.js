import { ProfileAbout } from '@/components/ProfileAbout'
import ProfileHero from '@/components/ProfileHero'
import ProfileSection from '@/components/ProfileSection'
import ProfileWorkExperience from '@/components/ProfileWorkExperience'
import React from 'react'

const profile = () => {
  return (
    <>
      <ProfileHero />
      <ProfileAbout />
      <ProfileWorkExperience />
      <ProfileSection />
    </>

  )
}

export default profile
