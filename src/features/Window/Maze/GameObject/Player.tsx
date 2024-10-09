import React from 'react'
import { MazeControls } from 'features/Window/Maze/input'
import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Mesh, Vector3 } from 'three'

const velocity = new Vector3()
const SPEED = 0.1

type Props = JSX.IntrinsicElements['mesh']

const Player: React.FC<Props> = ({ position }) => {
  const transform = React.useRef<Mesh>(null!)
  const [, get] = useKeyboardControls<MazeControls>()

  useFrame(state => {
    const { forward, backward, right, left } = get()

    if (left) {
      transform.current.rotation.y += 0.05
    }

    if (right) {
      transform.current.rotation.y -= 0.05
    }

    if (forward) {
      transform.current.position.sub(
        transform.current
          .getWorldDirection(velocity)
          .multiplyScalar(SPEED)
      )
    }

    if (backward) {
      transform.current.position.add(
        transform.current
          .getWorldDirection(velocity)
          .multiplyScalar(SPEED)
      )
    }

    state.camera.position.copy(transform.current.position)
    state.camera.rotation.copy(transform.current.rotation)
  })

  return (
    <mesh ref={transform} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial transparent />
    </mesh>
  )
}

export default Player