import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import { projectsInfo } from '@/data/projectsInfo'

export function Slider ({ children, prevSlide, nextSlide, goToSlide, className }) {
  return (
    <div className={`relative w-full flex flex-col items-center ${className}`}>
      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-secondary text-white cursor-pointer z-10'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-secondary text-white cursor-pointer z-10'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {children}
      {/* Doots */}
      <div className='flex justify-centertop-4  py-2'>
        {projectsInfo.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}
