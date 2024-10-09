import React from 'react'
import Wall from 'features/Window/Maze/GameObject/Wall'
import Maze from 'features/Window/Maze/GameObject/Maze'
import { mazes } from 'features/Window/Maze/types'

const Scene: React.FC = () => {
  const maze = React.useMemo(
    () => mazes[Math.floor(Math.random() * mazes.length)],
    []
  )

  return (
    <React.Fragment>
      <ambientLight intensity={0.3} />
      <Wall />
      <Maze grid={maze} />
    </React.Fragment>
  )
}

export default Scene