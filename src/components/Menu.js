import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "../styleConfig";

export const Menu = () => {
  const [offsetY, setOffsetY] = useState("00");

  const getOffsetY = () => {
    let top = document.querySelector(".main").scrollTop;
    let topChange = document.querySelector(".dressCode").offsetTop;

    if (top > topChange) {
      setOffsetY("ff")
    } else {
      setOffsetY("00")
    }
  };

  useEffect(() => {
    document.querySelector(".main").addEventListener("scroll", getOffsetY);

    return () => {
      document.querySelector(".main").addEventListener("scroll", getOffsetY);
    };
  }, []);

  const goToElement = (element) => {
    document
      .querySelector(`.${element}`)
      .scrollIntoView({ block: "center", behavior: "smooth" });
  };

  return (
    <Nav className="menu" top={offsetY}>
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
  position: absolute;
  ${(props) => css`
    background-color: ${colors.cream + props.top};
  `}
  width: 100vw;

  display: flex;
  align-self: center;
  justify-content: space-around;
`;

const Element = styled.button`
  background-color: inherit;
  color: ${colors.lavenderLight};

  border: none;

  font-size: 1.5rem;
`;
