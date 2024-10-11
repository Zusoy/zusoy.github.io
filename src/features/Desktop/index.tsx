import React from 'react'
import { TaskManagerContext } from 'app/TaskManager'
import Shortcut from 'features/Desktop/Shortcut'
import Launcher from 'app/TaskManager/Launcher'

const Desktop: React.FC = () => {
  const [activeShortcut, setActiveShortcut] = React.useState<null|string>(null)
  const { dispatch } = React.useContext(TaskManagerContext)

  const launchTask = React.useCallback((tag: string, icon: string) => {
    setActiveShortcut(null)
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
    <div id='desktop' className='relative w-full h-[calc(100vh-2.5rem)] z-[99]'>
      <Launcher />
      <nav className='flex flex-col flex-wrap mt-2 w-0 h-full'>
        <Shortcut
          label='Biography'
          icon='/assets/icons/bio.png'
          taskTag='biography'
          active={activeShortcut === 'biography'}
          onClick={() => setActiveShortcut('biography')}
          onLaunch={launchTask}
        />
        <Shortcut
          label='Resume'
          icon='/assets/icons/resume.png'
          taskTag='resume'
          active={activeShortcut === 'resume'}
          onClick={() => setActiveShortcut('resume')}
          onLaunch={launchTask}
        />
        <Shortcut
          desktopOnly
          label='Maze 3D'
          icon='/assets/icons/file.png'
          taskTag='maze'
          active={activeShortcut === 'maze'}
          onClick={() => setActiveShortcut('maze')}
          onLaunch={launchTask}
        />
        <Shortcut
          label='Contact me'
          icon='/assets/icons/mail.png'
          taskTag='contact'
          active={activeShortcut === 'contact'}
          onClick={() => setActiveShortcut('contact')}
          onLaunch={launchTask}
        />
      </nav>
    </div>
  )
}

export default Desktop