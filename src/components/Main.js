import React from "react";
import styled from "styled-components";
import { Invite } from "./main/Invite";
import { Actions } from "./main/Actions";
import { Alco } from "./main/Alco";
import { Camp } from "./main/Camp";
import { DressCode } from "./main/DressCode";
import { Flowers } from "./main/Flowers";
import { Gifts } from "./main/Gifts";
import { Timer } from "../components/Timer";

export const Main = () => {
  return (
    <Wrapper className="main">
      <Invite />
      <DressCode />
      <Camp />
      <Gifts />
      <Flowers />
      <Alco />
      <Actions />
      <Timer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
`;
