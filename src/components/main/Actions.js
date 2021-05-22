import React from "react";
import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { Content } from "../Content";

export const Actions = () => {
  return (
    <Wrapper className="actions">
      <Header>Что будем делать?</Header>
      <Content>
        Ооо, много всего! Вот примерный тайминг. Понятно, что на автобус
        опаздывать крайне нежелательно (вот прям совсем), а завтрак и речка вас
        в случае чего подождут.
      </Content>
    </Wrapper>
  );
};
