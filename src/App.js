import React from 'react'
import styled from 'styled-components'
import { Actions } from './components/Actions';
import { Alco } from './components/Alco';
import { Camp } from './components/Camp';
import { DressCode } from './components/DressCode';
import { Flowers } from './components/Flowers';
import { Gifts } from './components/Gifts';
import { Menu } from './components/Menu'
import { Invite } from './components/Invite';
import { Place } from './components/Place';
import { Timer } from './components/Timer';
import { colors } from './styleConfig';

function App() {
  return (
    <AppDiv>
      <Menu />
      <Main>
        <Invite />
        <DressCode />
        <Camp />
        <Gifts />
        <Flowers />
        <Alco />
        <Actions />
        <Place />
      </Main>
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

const Main = styled.section`
  width: 100vh;

  padding: 0 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
`

export default App;
