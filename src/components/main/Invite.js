import React from "react";
import styled from "styled-components";
import { colors } from "../../styleConfig";
import { Header } from "../Header";
import { Parallax } from "../Parallax";

export const Invite = () => {
  return (
    <Parallax img="bg-invite.jpg">
      <Wrapper className="invite">
        <p>Привет! Это</p>
        <Header>Злата и Миша</Header>
        <p>и мы приглашаем вас на нашу свадьбу!</p>
        <p>17-18 июля 2021 года</p>
        <p>Ниже вы найдёте всю информацию, которая позволит вам разделить с нами этот чудесный день в максимально комфортной обстановке.</p>
      </Wrapper>
    </Parallax>
  );
};

const Wrapper = styled.div`
  width: 60vh;
  height: 60vh;

  margin: 5vh;
  padding: 5vh;

  background-color: ${colors.cream}aa;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
