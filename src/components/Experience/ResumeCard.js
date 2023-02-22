import { motion } from 'framer-motion'
import { useState } from 'react'

export const ResumeCard = ({ className, time, date, company, position, toDos, place, description }) => {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }
  const changeColorTitle = show ? 'text-primary font-bold' : ''

  return (
    <motion.div transition={{ duration: 1 }} className='flex items-center w-full my-4 -ml-1.5 cursor-pointer'>
      <div className='w-1/12 z-10'>
        <div className='dot' />
      </div>
      <button
        onClick={() => toggleShow()}
        className={`w-full text-left p-4 py-8 rounded-xl shadow-md ring-2 ring-tertiary hover:ring-primary ${className}`}
      >
        {!show && <p className='text-4xl text-tertiary mb-4'>{time}</p>}
        {show && <p className='text-xl text-tertiary mb-4'>{date.start} - {date.end}</p>}
        <h3 className={`font-bold text-2xl mb-4 ${changeColorTitle}`}>{position}</h3>
        <h4 className='font-semibold mb-1'>{company}</h4>
        <p className=''>{place}</p>
        {
      show &&
        <div className='flex flex-col mt-4'>
          <p className='mb-4'>{description}</p>
          <p className='font-bold mb-4'>Task</p>
          <ol className='ml-4'>
            {toDos.map(toDo =>
              <li className='text-left' key={toDo}>
                {toDo}
              </li>
            )}
          </ol>
        </div>
      }
      </button>
    </motion.div>
  )
}
