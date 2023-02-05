import { GiMountainClimbing, GiMountains } from 'react-icons/gi'
import { MdDraw } from 'react-icons/md'

export const ProfileHobbies = () => {
  return (
    <div className='h-auto flex-1 rounded-lg shadow-xl p-8 ring-2 ring-tertiary'>
      <h4 className='text-xl text-primary font-bold'>Hobbies</h4>
      <div className='flex justify-between'>
        <div className='flex flex-col items-center my-6'>
          <GiMountainClimbing size={60} fill='' />
          <p className='text-sm'>Rock climbing</p>
        </div>
        <div className='flex flex-col items-center my-6'>
          <GiMountains size={60} fill='' />
          <p className='text-sm'>Alpinism</p>
        </div>
        <div className='flex flex-col items-center my-6'>
          <MdDraw size={60} fill='' />
          <p className='text-sm'>Design</p>
        </div>
      </div>
    </div>
  )
}
