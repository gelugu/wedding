import React from "react";
import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { Content } from "../Content";
import { Parallax } from "../Parallax";
import { Block } from "../Block";

export const Actions = () => {
  return (
    <Parallax img="actions.jpg">
      <Wrapper className="actions">
        <Block>
          <Header>Что будем делать?</Header>
          <Content>
            Ооо, много всего! Вот примерный тайминг. Понятно, что на автобус
            опаздывать крайне нежелательно (вот прям совсем), а завтрак и речка
            вас в случае чего подождут.
          </Content>
        </Block>
      </Wrapper>
    </Parallax>
  );
};
