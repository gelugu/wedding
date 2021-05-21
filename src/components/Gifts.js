import React from "react";
import { Wrapper } from "./Wrapper";
import { Header } from "./Header";
import { Content } from "./Content";

export const Gifts = () => {
  return (
    <Wrapper className="gifts">
      <Header>Что подарить?</Header>
      <Content>
        Вот тут – наш вишлист. Пожалуйста, записывайте свои имена напротив
        подарка, чтобы не дарить одно и то же. А еще можно с кем-нибудь
        объединиться и подарить штуки вскладчину. Мы не будем подглядывать,
        честно! Если у вас не так много денег, пожалуйста, не стесняйтесь дарить
        нам песни, улыбки и проведённое вместе время❤️
      </Content>
    </Wrapper>
  );
};
