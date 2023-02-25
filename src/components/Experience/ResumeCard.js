import { motion } from 'framer-motion'
import { useState } from 'react'
import { Modal } from './Modal'

export const ResumeCard = ({ className, time, date, company, position, toDos, place, description }) => {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }
  const changeColorTitle = show ? 'text-primary' : ''

  return (
    <motion.div transition={{ duration: 1 }} className='flex items-center w-full my-4 -ml-1.5 cursor-pointer'>
      <div className='w-1/12 z-10'>
        <div className='dot' />
      </div>
      <button
        onClick={() => toggleShow()}
        className={`w-full text-left p-4 py-8 rounded-xl shadow-md ring-2 ring-tertiary hover:ring-primary ${className}`}
      >
        <p className='text-4xl text-tertiary mb-4'>{time}</p>
        <h3 className={`font-bold text-2xl mb-4 ${changeColorTitle}`}>{position}</h3>
        <h4 className='font-semibold mb-1'>{company}</h4>
        <p className=''>{place}</p>
        {
      show &&
        <Modal show={show} onClose={setShow} start={date.start} end={date.end} position={position} company={company} place={place} description={description} toDos={toDos} />
      }
      </button>
    </motion.div>
  )
}
