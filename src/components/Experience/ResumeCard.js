import { useState } from 'react'

const ResumeCard = ({ className, date, company, position, toDos }) => {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }
  const changeColorTitle = show ? 'text-primary font-bold' : ''

  return (
    <div className='flex items-center w-full my-4 -ml-1.5 cursor-pointer'>
      <div className='w-1/12 z-10'>
        <div className='dot' />
      </div>
      <button
        onClick={() => toggleShow()}
        className={`w-11/12 text-left p-4 rounded-xl ml-auto shadow-md ring-2 ring-primary hover:traslation_animated hover:shadow-xl ${className}`}
      >
        <p className='text-sm text-tertiary'>{date.start} - {date.end}</p>
        <h3 className={`font-bold text-lg mb-1 ${changeColorTitle}`}>{position}</h3>
        <h4 className='text-sm mb-1'>{company}</h4>
        {
      show &&
        <div className='flex flex-col'>
          {toDos.map(toDo =>
            <li className='leading-tight text-sm text-left my-1' key={toDo}>
              {toDo}
            </li>
          )}
        </div>
      }
      </button>
    </div>
  )
}

export default ResumeCard