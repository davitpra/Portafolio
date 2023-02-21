import React from 'react'

export function ProjectImage ({ projectInfo }) {
  return (
    <div className='flex-1'>
      <div
        style={{ backgroundImage: `url(${projectInfo.url})` }}
        className='border w-[350px] h-[650px] bg-center bg-cover duration-500  rounded-lg'
      />
    </div>
  )
}
