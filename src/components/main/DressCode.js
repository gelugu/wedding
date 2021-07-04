import React from "react";
import styled from "styled-components";

import { Wrapper } from "../Wrapper";
import { Content } from "../Content";
import { Paragraph } from "../Paragraph";
import { Header } from "../Header";
import { createLink } from "../Link";

export const DressCode = () => {
  const locationLink = "https://www.gismeteo.ru/weather-yegorevsk-4371/";
  return (
    <Wrapper className="dressCode">
      <Content>
        <Header>Что надеть?</Header>
        <Palette src={process.env.PUBLIC_URL + "/palette.jpeg"}></Palette>
        <Paragraph>
          Это — палитра нашего праздника. Нежные, пастельные природные цвета с
          акцентными деревом, золотом и стеклом. Пожалуйста, подберите себе
          удобную одежду! Все мы хотим быть красивущими на церемонии, но после
          неё нас ожидают танцы до утра:) Позаботьтесь о вещах на второй день
          (не забудьте купальник/плавки), возможно, стоит предусмотреть что-то
          тёплое на вечер и непромокаемое на случай дождя — смотрите прогноз
          погоды в {createLink("Егорьевске", locationLink)}. Не думайте, что
          берёте лишнее — лучше запасные вещички будут лежать у вас в номерах,
          чем не будут:) Пожалуйста, откажитесь от каблуков(!) Мы празднуем на
          природе и не хотим, чтобы ваш и наш праздничный настрой омрачался
          вывихами, мозолями и прочими атрибутами калечащей обувки. Костюмы,
          платья и лесные тропинки отлично сочетаются с кедами!
        </Paragraph>
      </Content>
      <Content>
        <Header>Что взять с собой?</Header>
        <List>
          <ListItem>вещи на случай похолодания</ListItem>
          <ListItem>пляжное полотенце и купальник/плавки</ListItem>
          <ListItem>
            репеллент (на природу) и спиральки/фумигаторы от комаров (в номер)
          </ListItem>
          <ListItem>удобную одежду и обувь на второй день</ListItem>
          <ListItem>паспорт для чек-ина в гостинице</ListItem>
        </List>
      </Content>
    </Wrapper>
  );
};

const Palette = styled.img`
  width: 70vw;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 0.5rem 0;
`;
