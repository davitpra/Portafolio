import { useState } from 'react'

const ResumeCard = ({ className, date, company, position, toDos }) => {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <div className='flex '>
      {/* line + dote */}
      <div className=' relative mr-10'>
        <div className='h-full w-6 flex items-center justify-center'>
          <div className='h-full w-1 bg-tertiary dark:bg-white pointer-events-none' />
        </div>
        <div
          className='w-4 h-4 absolute top-1/2 -mt-3 ml-1 rounded-full bg-black ring-2 ring-primary shadow'
        />
      </div>
      {/* Messaje */}
      <button
        onClick={() => toggleShow()}
        className={`bg-message w-full text-left p-4 rounded-xl my-4 ml-auto shadow-md ${className}`}
      >
        <p className='text-sm text-white'>{date.start} - {date.end}</p>
        <h3 className='font-bold text-lg mb-1'>{company}</h3>
        <h4 className='text-md font-semibold mb-1'>{position}</h4>
        {
      show &&
        <div className='flex flex-col'>
          {toDos.map(toDo =>
            <li className='leading-tight text-sm text-left' key={toDo}>
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
