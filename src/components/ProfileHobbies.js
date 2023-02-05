import { GiMountainClimbing } from 'react-icons/gi'

export const ProfileHobbies = () => {
  return (
    <div className='h-auto flex-1 rounded-lg shadow-xl p-8 ring-2 ring-tertiary'>
      <h4 className='text-xl text-primary font-bold'>Hobbies</h4>
      <div className='flex flex-col items-center w-full my-6'>
        <GiMountainClimbing size={60} fill='' />
        <p className='text-sm'>Climbing</p>
      </div>
    </div>
  )
}
