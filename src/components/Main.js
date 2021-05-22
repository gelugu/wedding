import React from 'react'
import styled from 'styled-components'
import { Invite } from './main/Invite';
import { Place } from './main/Place';
import { Actions } from './main/Actions';
import { Alco } from './main/Alco';
import { Camp } from './main/Camp';
import { DressCode } from './main/DressCode';
import { Flowers } from './main/Flowers';
import { Gifts } from './main/Gifts';

export const Main = () => {
  return (
    <Wrapper>
      <Invite />
      <DressCode />
      <Camp />
      <Gifts />
      <Flowers />
      <Alco />
      <Actions />
      <Place />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100vh;

  padding: 0 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
`
