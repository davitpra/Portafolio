import Image from 'next/image'

export const SkillCard = ({ name, level, svg, className }) => {
  return (
    <li className={`h-56 w-36 m-4 p-4 bg-white flex flex-col items-center rounded-md shrink-0 shadow-md ring-1 ring-tertiary hover:ring-2 hover:shadow-lg dark:ring-tertiary dark:shadow-white  ${className}`}>
      <div className='w-20 h-28 flex justify-center items-center'>
        <Image src={`./svg/${svg}`} width='70' height='70' />
      </div>
      <p className='text-black text-lg font-semibold  py-3'>{name}</p>
      <p className='text-secondary font-semibold'>Level : </p>
      <p className='text-secondary'>{level} </p>
    </li>

  )
}
