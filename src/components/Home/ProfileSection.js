import React from 'react'

export const ProfileSection = ({ children }) => {
  return (
    <div className='w-full flex flex-col my-4 space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
      {children}
    </div>
  )
}
