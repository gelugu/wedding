import React from "react";
import { Block } from "../Block";
import { Content } from "../Content";
import { Header } from "../Header";
import { Parallax } from "../Parallax";
import { Wrapper } from "../Wrapper";

export const Invite = () => {
  return (
    <Parallax img="invite.jpg">
      <Wrapper className="invite">
        <Content>
          <Block className="invite">
            <p>Привет! Это</p>
            <Header>Злата и Миша</Header>
            <p>и мы приглашаем вас на нашу свадьбу!</p>
            <p>17-18 июля 2021 года</p>
            <p>
              Ниже вы найдёте всю информацию, которая позволит вам разделить с
              нами этот чудесный день в максимально комфортной обстановке.
            </p>
          </Block>
        </Content>
      </Wrapper>
    </Parallax>
  );
};
