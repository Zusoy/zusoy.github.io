import React, { useState } from 'react'
import Tile from 'widgets/Tile'
import styled from 'styled-components'
import theme from 'app/theme'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import contents from 'pages/Home/Tiles/Experience/Contents'

const Experience: React.FC = () => {
  const [ index, setIndex ] = useState<number>(0)

  return (
    <Tile width={ 300 } index={ 5 } background={ theme.colors.beige }>
      <ContentWrapper>
        { contents[index].content }
        <ButtonsWrapper>
          { index > 0 &&
            <DirectionButton onClick={ () => setIndex(index - 1) } whileHover={ { scale: 1.1 } }>
              <HiArrowLeft size={ 40 } />
            </DirectionButton>
          }
          { index < (contents.length - 1) &&
            <DirectionButton onClick={ () => setIndex(index + 1) } whileHover={ { scale: 1.1 } }>
              <HiArrowRight size={ 40 } />
            </DirectionButton>
          }
        </ButtonsWrapper>
      </ContentWrapper>
    </Tile>
  )
}

const ContentWrapper = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  gap: ${theme.gap.sm};
  align-items: center;
  width: 100%;
`)

const ButtonsWrapper = styled.div(({ theme }) => `
  display: flex;
  justify-content: space-evenly;
`)

const DirectionButton = styled(motion.button)(({ theme }) => `
  color: ${theme.colors.white};
  background-color: transparent;
  padding: ${theme.gap.sm};
  border: transparent;
  border-radius: 16px;
  cursor: pointer;
`)

export default Experience
