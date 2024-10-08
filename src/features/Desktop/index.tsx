import React from 'react'
import Window from 'features/Window'

const Desktop: React.FC = () =>
  <div className='w-full h-[calc(100vh-2.5rem)]'>
    <Window name='Test' icon='/assets/icons/folder.png' index={1}>
      <div className='flex w-full h-full bg-[white] overflow-y-scroll'>
        <div className='flex flex-col'>
        </div>
      </div>
    </Window>
  </div>

export default Desktop