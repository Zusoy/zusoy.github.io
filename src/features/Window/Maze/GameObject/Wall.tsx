import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

type Props = JSX.IntrinsicElements['mesh']

const Wall: React.FC<Props> = (props) => {
  const map = useLoader(TextureLoader, '/assets/maze/wall.bmp')

  return (
    <mesh {...props} userData={{ type: 'wall' }}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial map={map} />
    </mesh>
  )
}

export default Wall
