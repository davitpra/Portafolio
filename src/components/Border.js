import { BsCheckCircleFill } from 'react-icons/bs'

export const Border = ({ children, className }) => {
  return (
    // container
    <section className='relative flex justify-start mt-3 mb-3'>
      <div className=''>
        <BsCheckCircleFill size={25} fill='#3b82f6' className='absolute bottom-0' />
      </div>
      {/* card */}
      <div className={`w-auto px-12 ml-10 flex shadow-lg shadow-secondary py-5 bg-message dark:bg-secondary dark:shadow-none ${className}`}>
        {children}
      </div>

    </section>
  )
}
