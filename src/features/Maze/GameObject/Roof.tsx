import React from 'react'
import { useLoader } from '@react-three/fiber'
import { RepeatWrapping, TextureLoader } from 'three'

const Roof: React.FC = () => {
  const map = useLoader(TextureLoader, '/assets/maze/ceiling.bmp')
  map.wrapS = RepeatWrapping
  map.wrapT = RepeatWrapping
  map.repeat.set(100, 100)

  return (
    <mesh position={[0, 1, 0]} userData={{ type: 'roof' }}>
      <boxGeometry args={[100, 1, 100]} />
      <meshBasicMaterial map={map} />
    </mesh>
  )
}

export default Roof
