import Border from '@/components/Border'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export function TimeLineVertical ({ children }) {
  return (
    <Border className='mt-4'>
      <h1 className='title mb-4'>WorK Experience</h1>
      <VerticalTimeline
        layout='1-column-left'
        lineColor='#374151'
      >
        {children}
      </VerticalTimeline>
    </Border>
  )
}
