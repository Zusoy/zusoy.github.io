import React from 'react'
import Window, { type TaskProps } from 'features/Window'
import Button from 'widgets/Form/Button'

const Resume: React.FC<TaskProps> = ({ id, index, icon, status }) => {
  return (
    <Window index={index} id={id} title='Resume' icon={icon} status={status}>
      <h1>Resume</h1>
      <Button label='Hello' onClick={() => {}} icon='/assets/icons/file.png' />
    </Window>
  )
}

export default Resume