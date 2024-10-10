import React from 'react'
import { MazeControls } from 'features/Window/Maze/input'
import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Mesh, Raycaster, Vector3 } from 'three'

const velocity = new Vector3()
const SPEED = 0.1

type Props = JSX.IntrinsicElements['mesh'] & {
  onMazeFinish: () => void
}

const Player: React.FC<Props> = ({ position, onMazeFinish }) => {
  const transform = React.useRef<Mesh>(null!)
  const [, get] = useKeyboardControls<MazeControls>()

  const raycaster = React.useMemo<Raycaster>(() => {
    const ray = new Raycaster()
    ray.far = 0.5

    return ray
  }, [])

  useFrame(state => {
    const direction = new Vector3(0, 0, -1)
    direction.applyQuaternion(transform.current.quaternion)
    raycaster.set(transform.current.position, direction)
    const intersects = raycaster.intersectObjects(state.scene.children)

    const finish = intersects
      .map(i => i.object)
      .find(i => Object.values(i.userData).includes('finish')) || null

    const collisions = intersects
      .map(i => i.object)
      .filter(i => !Object.values(i.userData).includes('sprite'))

    if (null !== finish) {
      onMazeFinish()
      return
    }

    const { forward, backward, right, left } = get()

    if (left) {
      transform.current.rotation.y += 0.05
    }

    if (right) {
      transform.current.rotation.y -= 0.05
    }

    if (forward && !collisions.length) {
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