import Image from 'next/image'

export const SkillCard = ({ name, level, svg, className }) => {
  return (
    <li className={`h-56 w-44 bg-white m-2 p-4 hover:ring-2 hover:ring-tertiary rounded-md ${className}`}>
      <div className='w-20 h-28 flex justify-center items-center'>
        <Image src={`./svg/${svg}`} width='70' height='70' />
      </div>
      <p className='text-lg font-semibold text-black py-3'>{name}</p>
      <p className='text-secondary font-semibold'>Level : </p>
      <p className='text-secondary'>{level} </p>
    </li>

  )
}
