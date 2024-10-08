import React from 'react'
import Window, { type TaskProps } from 'features/Window'

const Resume: React.FC<TaskProps> = ({ id, index, icon, status }) => {
  return (
    <Window index={index} id={id} title='Resume' icon={icon} status={status}>
      <div className='flex flex-col flex-grow gap-6 w-full h-full p-2 justify-start'>
        <embed type='application/pdf' src='/assets/resume.pdf' className='w-full h-full'></embed>
      </div>
    </Window>
  )
}

export default Resume