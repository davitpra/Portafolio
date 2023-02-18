import { useState } from 'react'
import { MdOutlineWorkOutline as WorkIcon, MdOutlineSchool as SchoolIcon } from 'react-icons/md'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export function TimeLineElement (element) {
  console.log(element)
  const [show, setShow] = useState(false)
  const toggleShow = () => {
    setShow(!show)
  }
  const workIconStyles = { background: '#06D6A0' }
  const schoolIconStyles = { background: '#f9c74f' }
  const changeColorTitle = show ? 'text-primary font-bold' : 'font-semibold'

  const isWorkIcon = element.icon === 'work'
  return (
    <VerticalTimelineElement
      iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
      icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
      contentStyle={{ borderRadius: '10px' }}
      onTimelineElementClick={toggleShow}
    >
      <h3 className={`text-lg text-black ${changeColorTitle}`}>
        {element.title}
      </h3>
      <h5 className='text-black'>
        {element.location}
      </h5>
      {
    show &&
      <p className='my-4 mb-4 text-black'>{element.description}</p>
    }
    </VerticalTimelineElement>
  )
}
