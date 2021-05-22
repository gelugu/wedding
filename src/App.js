import React from 'react'
import styled from 'styled-components'
import { Main } from './components/Main';
import { Menu } from './components/Menu'
import { Timer } from './components/Timer';
import { colors } from './styleConfig';

function App() {
  return (
    <AppDiv>
      <Menu />
      <Main />
      <Timer />
    </AppDiv>
  );
}

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${colors.cream};

  display: flex;
  flex-direction: column;
  align-items: center;
`

export default App;
