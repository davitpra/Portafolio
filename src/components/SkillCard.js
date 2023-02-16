import Image from 'next/image'
import Border from './Border'

export const SkillCard = ({ name, level, svg, className }) => {
  return (
    <Border padding='p-4 w-full h-full flex flex-col justify-center items-center' className={`w-32 ${className}`}>
      <Image src={`./svg/${svg}`} width='60' height='60' alt={name} />
      <p className='text-lg text-primary font-semibold  py-3'>{name}</p>
      <p className='font-semibold'>Level : </p>
      <p className=''>{level} </p>

    </Border>
  )
}
