
import Border from '@/components/Border'
import { useState } from 'react'
import timelineElements from '../data/timelineElements'
import { MdOutlineWorkOutline as WorkIcon, MdOutlineSchool as SchoolIcon } from 'react-icons/md'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

function experienceTimeLine () {
  const workIconStyles = { background: '#06D6A0' }
  const schoolIconStyles = { background: '#f9c74f' }
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }
  const changeColorTitle = show ? 'text-primary font-bold' : 'font-semibold'
  return (
    <Border className='mt-4'>
      <h1 className='title mb-4'>WorK Experience</h1>
      <VerticalTimeline
        layout='1-column-left'
        lineColor='#374151'
      >
        {timelineElements.map((element) => {
          const isWorkIcon = element.icon === 'work'

          return (
            <VerticalTimelineElement
              key={element.key}
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
        })}
      </VerticalTimeline>
    </Border>

  )
}

export default experienceTimeLine
