import React from "react";
import styled from "styled-components";
import { Parallax } from "../Parallax";

export const Invite = () => {
  return (
    <Parallax img="bg-invite.jpg">
      <Wrapper className="invite">
        <p>Приглашаем на свадьбу</p>
        <Names>Злата и Миша</Names>
        <p>Будем очень рады видеть вас в этот чудесный день</p>
      </Wrapper>
    </Parallax>
  );
};

const Wrapper = styled.div`
  width: 60vh;
  height: 60vh;

  margin: 5vh;
  padding: 5vh;

  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Names = styled.h2``;
