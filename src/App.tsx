import React from 'react'
import StartMenu from 'features/StartMenu'
import Desktop from 'features/Desktop'

const App: React.FC = () => {
  return (
    <main className='flex flex-col w-full gap-0'>
      <Desktop />
      <StartMenu />
    </main>
  )
}

export default App