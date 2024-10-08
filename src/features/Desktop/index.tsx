import React from 'react'
import { TaskManagerContext } from 'app/TaskManager'
import Shortcut from 'features/Desktop/Shortcut'
import Launcher from 'app/TaskManager/Launcher'

const Desktop: React.FC = () => {
  const { dispatch } = React.useContext(TaskManagerContext)

  const launchTask = React.useCallback((tag: string, icon: string) => {
    dispatch({
      type: 'new_task',
      payload: {
        id: Date.now().toString(),
        icon,
        tag
      }
    })
  }, [dispatch])

  return (
    <div className='relative w-full h-[calc(100vh-2.5rem)] z-[999]'>
      <Launcher />
      <nav className='flex flex-col flex-wrap mt-2 w-0 h-full'>
        <Shortcut
          label='Biography'
          icon='/assets/icons/bio.png'
          taskTag='biography'
          onLaunch={launchTask}
        />
        <Shortcut
          label='Resume'
          icon='/assets/icons/resume.png'
          taskTag='resume'
          onLaunch={launchTask}
        />
      </nav>
    </div>
  )
}

export default Desktop