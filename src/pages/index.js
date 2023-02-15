import { ProfileAbout } from '@/components/Home/ProfileAbout'
import { ProfileEducation } from '@/components/Home/ProfileEducation'
import ProfileHero from '@/components/Home/ProfileHero'
import { ProfileHobbies } from '@/components/Home/ProfileHobbies'
import { ProfileInfo } from '@/components/Home/ProfileInfo'
import ProfileSection from '@/components/Home/ProfileSection'
import ProfileWorkExperience from '@/components/Home/ProfileWorkExperience'
import { ProjectCard } from '@/components/Project/ProjectCard'
import { Slider } from '@/components/Project/Slider'
import React from 'react'

const profile = () => {
  return (
    <>
      <ProfileHero />
      <ProfileAbout />
      <ProfileSection>
        <Slider />
        <ProjectCard />
      </ProfileSection>
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
