import React from "react";
import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { Content } from "../Content";

export const Place = () => {
  return (
    <Wrapper className="place">
      <Header>когда всё это?</Header>
      <Content>
        [ Точное время появится ближе к дате. Пока ориентируйтесь, пожалуйста,
        на первую половину дня 17 июля. Уехать вы сможете в любой момент
        (смотрите расписание электричек Ильинский Погост - Москва, также есть
        автобусы). Если стойких будет много, на вечер второго дня мы также
        организуем трансфер.]
      </Content>
    </Wrapper>
  );
};
