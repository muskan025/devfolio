import React from 'react'
 
import {timelineData} from "./timelineData"
import TimelineDemo from './components/timeline-demo'


export const ProjectTimeline = () => {
  return (
    <TimelineDemo data={timelineData} />
  )
}
