import React from 'react'
import Shortcut from 'features/Desktop/Shortcut'

const Desktop: React.FC = () =>
  <div className='relative w-full h-[calc(100vh-2.5rem)] z-[999]'>
    <nav className='flex flex-col flex-wrap mt-2 w-0 h-full'>
      <Shortcut label='Biography' icon='/assets/icons/bio.png' />
    </nav>
  </div>

export default Desktop