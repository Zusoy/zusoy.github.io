import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

interface Props {
  readonly children: React.ReactNode
}

const Tag: React.FC<Props> = ({ children }) =>
  <Wrapper
    whileHover={ { scale: 1.1 } }
    transition={ { duration: 0.1 } }
  >
    { children }
  </Wrapper>

const Wrapper = styled(motion.span)(({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.black};
  padding: ${theme.gap.sm};
  background-color: ${theme.colors.grey};
  gap: ${theme.gap.sm};
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.white};
  }
`)

export default Tag
