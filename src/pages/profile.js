import { ProfileAbout } from '@/components/ProfileAbout'
import { ProfileEducation } from '@/components/ProfileEducation'
import ProfileHero from '@/components/ProfileHero'
import { ProfileHobbies } from '@/components/ProfileHobbies'
import { ProfileInfo } from '@/components/ProfileInfo'
import ProfileSection from '@/components/ProfileSection'
import ProfileWorkExperience from '@/components/ProfileWorkExperience'
import { ProjectCard } from '@/components/ProjectCard'
import { Slider } from '@/components/Slider'
import React from 'react'

const profile = () => {
  return (
    <>
      <ProfileHero />
      <ProfileAbout />
      <div className='w-full flex flex-col my-4 space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
        <Slider />
        <ProjectCard />
      </div>
      <ProfileWorkExperience />
      <ProfileSection>
        <ProfileInfo />
        <div className='w-full flex flex-col space-y-4'>
          <ProfileEducation />
          <ProfileHobbies />
        </div>
      </ProfileSection>
    </>

  )
}

export default profile
