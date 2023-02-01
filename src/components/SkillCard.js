import Image from 'next/image'

export const SkillCard = ({ name, level, svg }) => {
  return (
    <div className='h-auto w-52 bg-white flex flex-col items-center m-2 p-4 hover:ring-2 hover:ring-tertiary rounded-md '>
      <Image src={`./svg/${svg}`} width='70' height='70' />
      <p className='text-xl font-semibold text-black py-3'>{name}</p>
      <p className='font-md text-secondary'>level : {level} </p>
    </div>

  )
}
