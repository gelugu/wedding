import React from "react";
import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { Content } from "../Content";
import { Parallax } from "../Parallax";
import { Block } from "../Block";
import { Paragraph } from '../Paragraph'

export const Actions = () => {
  return (
    <Parallax img="actions.jpg">
      <Wrapper className="actions">
        <Block>
          <Content>
            <Header>Что будем делать?</Header>
            <Paragraph>
              Ооо, много всего! Вот примерный тайминг. Понятно, что на автобус
              опаздывать крайне нежелательно (вот прям совсем), а завтрак и
              речка вас в случае чего подождут.
            </Paragraph>
          </Content>
        </Block>
      </Wrapper>
    </Parallax>
  );
};
