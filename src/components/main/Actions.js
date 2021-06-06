import React from "react";

import { Wrapper } from "../Wrapper";
import { Content } from "../Content";
import { Paragraph } from '../Paragraph'
import { Parallax } from "../Parallax";
import { Header } from "../Header";
import { Block } from "../Block";

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
            <Paragraph>Тайминг появится позже ;)</Paragraph>
          </Content>
        </Block>
      </Wrapper>
    </Parallax>
  );
};
