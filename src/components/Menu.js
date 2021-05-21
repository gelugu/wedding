import React from "react";
import styled from "styled-components";
import { colors } from "../styleConfig";

export const Menu = () => {
  const goToElement = (element) => {
    document
      .querySelector(`.${element}`)
      .scrollIntoView({ block: "center", behavior: "smooth" });
  };

  return (
    <Nav>
      <Element onClick={goToElement.bind(null, "invite")}>Что?</Element>
      <Element onClick={goToElement.bind(null, "dressCode")}>В чём?</Element>
      <Element onClick={goToElement.bind(null, "camp")}>Ночуем?</Element>
      <Element onClick={goToElement.bind(null, "gifts")}>Надо что?</Element>
      <Element onClick={goToElement.bind(null, "flowers")}>Цветов?</Element>
      <Element onClick={goToElement.bind(null, "alco")}>Выпьем?</Element>
      <Element onClick={goToElement.bind(null, "actions")}>Потанцуем?</Element>
      <Element onClick={goToElement.bind(null, "place")}>Где?</Element>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100vw;
  height: 10vh;

  margin-bottom: 5vh;

  background-color: ${colors.sage};

  display: flex;
  align-self: center;
  justify-content: space-around;
`;

const Element = styled.button`
  background-color: inherit;
  border: none;
`;
