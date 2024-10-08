import React from 'react'
import Window, { type TaskProps } from 'features/Window'

const Resume: React.FC<TaskProps> = ({ id, index, icon }) => {
  return (
    <Window index={index} id={id} title='Resume' icon={icon}>
      <h1>Resume</h1>
    </Window>
  )
}

export default Resume