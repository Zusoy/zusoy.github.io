import React, { useEffect } from 'react'
import { useAnimate } from 'framer-motion'
import styled from 'styled-components'

interface Props {
  readonly children: React.ReactNode
  readonly width: number
  readonly index: number
  readonly duration?: number;
  readonly background?: string
}

const Tile: React.FC<Props> = ({ children, width, index, background, duration }) => {
  const [ scope, animate ] = useAnimate()

  useEffect(() => {
    animate(scope.current, { opacity: [0,1] }, { delay: 0.5 * index, ease: 'easeInOut', duration })
  }, [])

  return (
    <Wrapper width={ width } ref={ scope } background={ background }>
      { children }
    </Wrapper>
  )
}

const Wrapper = styled.div<{ width: number, background?: string }>(({ theme, width, background }) => `
  display: flex;
  flex-direction: column;
  flex-basis: ${width}px;
  gap: ${theme.gap.sm};
  background-color: ${ background ?? theme.colors.white};
  color: ${theme.colors.black};
  padding: ${theme.gap.l};
  border-radius: 16px;
  justify-content: center;
  flex-grow: 1;
`)

export default Tile
