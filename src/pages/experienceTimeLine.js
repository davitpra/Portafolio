
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
      <h1 className='title'>WorK Experience</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          const isWorkIcon = element.icon === 'work'
          const showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== ''

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName='bg-#C9FBC7'
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              className='p-4 '
            >
              <h3 className='text-lg text-center'>
                {element.title}
              </h3>
              <h5 className='vertical-timeline-element-subtitle'>
                {element.location}
              </h5>
              <p className='my-4'>{element.description}</p>
              {showButton && (
                <a
                  className={`py-2 rounded-[5px] text-white ${
                    isWorkIcon ? 'workButton' : 'schoolButton'
                  }`}
                  href='/'
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </Border>

  )
}

export default experienceTimeLine
