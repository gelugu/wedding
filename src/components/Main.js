import React from "react";
import styled from "styled-components";

import { Invite } from "./main/Invite";
import { DressCode } from "./main/DressCode";
import { Camp } from "./main/Camp";
import { Gifts } from "./main/Gifts";
import { Flowers } from "./main/Flowers";
import { Alco } from "./main/Alco";
import { Actions } from "./main/Actions";
import { Chat } from "./main/Chat";
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
      <Chat />
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
