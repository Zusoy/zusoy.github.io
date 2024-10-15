import React from 'react'
import Roof from 'features/Maze/GameObject/Roof'
import Floor from 'features/Maze/GameObject/Floor'
import Wall from 'features/Maze/GameObject/Wall'
import Player from 'features/Maze/GameObject/Player'
import Sprite from 'features/Maze/GameObject/Sprite'
import type { MazeGrid } from 'features/Maze/types'
import { TaskManagerContext } from 'app/TaskManager'

type Props = {
  readonly grid: MazeGrid
  readonly taskId: string
}

const Maze: React.FC<Props> = ({ grid, taskId }) => {
  const { dispatch } = React.useContext(TaskManagerContext)

  const closeMazeTask = React.useCallback(() => {
    window.open(
      'https://www.linkedin.com/in/gregoire-drapeau/',
      '_blank'
    )

    dispatch({
      type: 'close_task',
      payload: taskId
    })
  }, [dispatch, taskId])

  return (
    <React.Fragment>
      <Roof />
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (cell === 1) {
            return (
              <Wall
                key={`${rowIndex}_${colIndex}_${cell}`}
                position={[colIndex, 0, rowIndex]}
              />
            )
          }

          if (cell === 2) {
            return (
              <Player
                key={`${rowIndex}_${colIndex}_${cell}`}
                position={[colIndex, 0, rowIndex]}
                onMazeFinish={closeMazeTask}
              />
            )
          }

          if (cell === 3) {
            return (
              <Sprite
                key={`${rowIndex}_${colIndex}_${cell}`}
                position={[colIndex, 0, rowIndex]}
                src='/assets/maze/start.png'
                type='start'
              />
            )
          }

          if (cell === 4) {
            return (
              <Sprite
                key={`${rowIndex}_${colIndex}_${cell}`}
                position={[colIndex, 0, rowIndex]}
                src='/assets/img/me.jpg'
                type='finish'
              />
            )
          }

          return null
        })
      )}
      <Floor />
    </React.Fragment>
  )
}

export default Maze