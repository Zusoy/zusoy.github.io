import React from 'react'
import Menu from 'features/StartMenu/Menu'
import StartButton from 'features/StartMenu/StartButton'
import Taskbar from 'features/StartMenu/Taskbar'
import Timer from 'features/StartMenu/Timer'

const StartMenu: React.FC = () => {
  const [opened, setOpened] = React.useState<boolean>(false)

  return (
    <nav className="flex items-center absolute bottom-0 w-full min-w-full bg-win-95-silver border-solid border-t-2 border-[white] min-h-10 max-h-10">
      <Menu opened={opened} onClose={() => setOpened(false)} />
      <StartButton onClick={() => setOpened((o) => !o)} />
      <Taskbar />
      <div className="flex-grow" />
      <Timer />
    </nav>
  )
}

export default StartMenu
