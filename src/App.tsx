import React from 'react'
import Provider from 'app/Provider'
import styled, { createGlobalStyle } from 'styled-components'
import { Theme } from 'app/theme'
import Homepage from 'pages/Home'

const App: React.FC = () =>
  <Provider>
    <GlobalStyle />
    <Background>
      <Main>
        <Content>
          <Homepage />
        </Content>
      </Main>
    </Background>
  </Provider>

const Main = styled.main(({ theme }) => `
  display: flex;
  gap: ${theme.gap.sm};
`)

const Content = styled.div(({ theme }) => `
  width: 100%;
  padding: ${ theme.gap.xl };
`)

const Background = styled.div(({ theme }) => `
  min-height: 100vh;
  background-color: ${ theme.colors.background };
`)

const GlobalStyle = createGlobalStyle<{ theme: Theme }>(({ theme }) => `
  body {
    margin: 0;
    font-family: Inter,sans-serif;
  }
`)

export default App
