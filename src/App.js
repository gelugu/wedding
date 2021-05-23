import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import { Main } from './components/Main';
import { Menu } from './components/Menu'

function App() {
  return (
    <AppDiv>
      <GlobalStyle/>
      <Menu />
      <Main />
    </AppDiv>
  );
}

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Courier', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: url(${process.env.PUBLIC_URL + "bg-invite.jpg"});
    background-size: cover;
    background-attachment: fixed;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`

export default App;
