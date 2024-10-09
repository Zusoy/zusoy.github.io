import React from 'react'
import { Image } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

type PositionTuple = [x: number, y: number, z: number]
type Props = {
  readonly position: PositionTuple
  readonly src: string
}

const Sprite: React.FC<Props> = ({ src, position }) => {
  const transform = React.useRef<Mesh>(null!)

  useFrame(state => {
    transform.current.lookAt(state.camera.position)
  })

  return (
    <Image
      url={src}
      opacity={1}
      position={position}
      ref={transform}
      transparent
    />
  )
}

export default Sprite