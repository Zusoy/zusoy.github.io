import React from 'react'
import theme from 'app/theme'
import { ThemeProvider } from 'styled-components'

interface Props {
  readonly children: React.ReactNode
}

const Provider: React.FC<Props> = ({ children }) =>
  <ThemeProvider theme={ theme }>
    { children }
  </ThemeProvider>

export default Provider
