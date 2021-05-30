import React from "react";
import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { Content } from "../Content";
import { Paragraph } from "../Paragraph";

export const Alco = () => {
  return (
    <Wrapper className="alco">
      <Content>
        <Header>А пить что будем?</Header>
        <Paragraph>
          Всё, кроме алкоголя! Мы запаслись домашними морсами, лимонадами и
          ингредиентами для безалкогольных коктейлей. По правилам усадьбы
          употребление алкоголя на территории запрещено, но мы провели
          исследования, в ходе которых выяснилось, что отрываться и веселиться
          можно и без оного. И вообще, свежий воздух, любовь и музыка пьянят
          покруче спирта. Если вы протащите с собой фляжечку, мы не заметим, но
          ответственность перед администрацией усадьбы лежит на вас.
        </Paragraph>
      </Content>
    </Wrapper>
  );
};
