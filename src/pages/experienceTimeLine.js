
import Border from '@/components/Border'
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
              date={element.date}
              dateClassName='text-tertiary mt-4'
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className='text-lg text-black font-semibold '>
                {element.title}
              </h3>
              <h5 className='text-black'>
                {element.location}
              </h5>
              <p className='my-4 mb-4 text-black'>{element.description}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </Border>

  )
}

export default experienceTimeLine
