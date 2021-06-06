import React from "react";

import { Wrapper } from "../Wrapper";
import { Content } from "../Content";
import { Paragraph, ParagraphBold } from "../Paragraph";
import { Parallax } from "../Parallax";
import { Header } from "../Header";
import { Block } from "../Block";
import { createLink } from "../Link";

export const Invite = () => {
  const locationLink = "https://art-guslitsa.ru/about";

  return (
    <Parallax img="invite.jpg">
      <Wrapper className="invite">
        <Block>
          <Content style={{ flexDirection: "column" }}>
            <Paragraph>Привет! Это</Paragraph>
            <Header>Злата и Миша</Header>
            <Paragraph>и мы приглашаем вас на нашу свадьбу!</Paragraph>
            <ParagraphBold>17-18 июля 2021 года</ParagraphBold>
            <ParagraphBold>
              {createLink('Арт-усадьба "Гуслица"', locationLink)}
            </ParagraphBold>
            <Paragraph>
              Ниже вы найдёте всю информацию, которая позволит вам разделить с
              нами этот чудесный день в максимально комфортной обстановке.
            </Paragraph>
          </Content>
        </Block>
      </Wrapper>
    </Parallax>
  );
};
