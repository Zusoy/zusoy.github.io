import React from 'react'
import Wall from 'features/Maze/GameObject/Wall'
import Maze from 'features/Maze/GameObject/Maze'
import { mazes } from 'features/Maze/types'

type Props = {
  readonly taskId: string
}

const Scene: React.FC<Props> = ({ taskId }) => {
  const maze = React.useMemo(
    () => mazes[Math.floor(Math.random() * mazes.length)],
    []
  )

  return (
    <React.Fragment>
      <ambientLight intensity={0.3} />
      <Wall />
      <Maze grid={maze} taskId={taskId} />
    </React.Fragment>
  )
}

export default Scene