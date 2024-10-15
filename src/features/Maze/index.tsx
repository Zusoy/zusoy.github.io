import React from 'react'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls, KeyboardControlsEntry } from '@react-three/drei'
import { MazeControls } from 'features/Maze/input'
import Scene from 'features/Maze/Scene'
import Window, { type TaskProps } from 'features/Window'

const Maze: React.FC<TaskProps> = ({ id, index, icon, status }) => {
  const map = React.useMemo<KeyboardControlsEntry<MazeControls>[]>(() => [
    { name: MazeControls.forward, keys: ['ArrowUp', 'KeyW'] },
    { name: MazeControls.left, keys: ['ArrowLeft', 'KeyA'] },
    { name: MazeControls.right, keys: ['ArrowRight', 'KeyD'] }
  ], [])

  return (
    <Window id={id} index={index} icon={icon} status={status} title='Maze'>
      <div className='win-95-border win-95-shadow p-4 m-2'>
        <p>Move with arrows/WASD/ZQSD to solve the maze !</p>
      </div>
      <div className='w-full h-full'>
        <React.Suspense fallback='Loading'>
          <KeyboardControls map={map}>
            <Canvas shadows camera={{ fov: 45 }}>
              <Scene taskId={id} />
            </Canvas>
          </KeyboardControls>
        </React.Suspense>
      </div>
    </Window>
  )
}

export default Maze
