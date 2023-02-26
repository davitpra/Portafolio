import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import { MdClose } from 'react-icons/md'

const variants = {
  hidden: {
    opacity: 0
  },
  content: {
    opacity: 1,
    transition: {
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function Modal ({ show, onClose, start, end, position, company, place, description, toDos }) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleClose = () => {
    onClose()
  }

  const modalContent = show
    ? (
      <motion.div
        initial='hidden'
        animate='content'
        exit='exit'
        variants={variants}
        className='max-w-2xl w-full h-screen md:h-auto rounded-lg shadow-xl ring-2 px-4 py-4 md:py-8 ring-secondary dark:ring-fourthy bg-fourthy dark:bg-darkPrimary z-20 fixed top-0 md:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 overflow-y-auto'
      >
        <p className='text-xl text-tertiary mb-4'>{start} - {end}</p>
        <h3 className='font-bold text-2xl mb-4 text-primary'>{position}</h3>
        <h4 className='font-semibold mb-1'>{company}</h4>
        <p className=''>{place}</p>
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
        <button
          className='absolute top-4 right-4'
          onClick={() => handleClose()}
        >
          <MdClose size='25px' />
        </button>
      </motion.div>
      )
    : null
  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    )
  } else {
    return null
  }
}
