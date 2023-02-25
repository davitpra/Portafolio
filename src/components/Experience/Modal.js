import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Border from '../Border'
import { MdClose } from 'react-icons/md'

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
      <div className='absolute top-0 z-20'>
        <Border className='w-4/5'>
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
        </Border>
      </div>
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
