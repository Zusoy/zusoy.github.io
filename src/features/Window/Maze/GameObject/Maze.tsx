import React from 'react'
import Roof from 'features/Window/Maze/GameObject/Roof'
import Floor from 'features/Window/Maze/GameObject/Floor'
import Wall from 'features/Window/Maze/GameObject/Wall'
import Player from 'features/Window/Maze/GameObject/Player'
import Sprite from 'features/Window/Maze/GameObject/Sprite'
import type { MazeGrid } from 'features/Window/Maze/types'

type Props = {
  readonly grid: MazeGrid
}

const Maze: React.FC<Props> = ({ grid }) => {
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
              />
            )
          }

          if (cell === 3) {
            return (
              <Sprite
                key={`${rowIndex}_${colIndex}_${cell}`}
                position={[colIndex, 0, rowIndex]}
                src='/assets/maze/start.png'
              />
            )
          }

          if (cell === 4) {
            return (
              <Sprite
                key={`${rowIndex}_${colIndex}_${cell}`}
                position={[colIndex, 0, rowIndex]}
                src='/assets/img/me.jpg'
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