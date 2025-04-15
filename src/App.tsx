import React from 'react'
import TaskManager from 'app/TaskManager'
import StartMenu from 'features/StartMenu'
import Desktop from 'features/Desktop'

const App: React.FC = () => {
  return (
    <main className="flex flex-col w-full gap-0">
      <TaskManager>
        <Desktop />
        <StartMenu />
      </TaskManager>
    </main>
  )
}

export default App
