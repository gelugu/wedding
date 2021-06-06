import React from "react";
import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { Content } from "../Content";
import styled from "styled-components";
import { Paragraph } from "../Paragraph";
import { createLink } from "../Link";

export const DressCode = () => {
  const locationLink = "https://www.gismeteo.ru/weather-yegorevsk-4371/"
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
          погоды в {createLink("Егорьевске", locationLink)}. Не думайте, что берёте лишнее — лучше запасные
          вещички будут лежать у вас в номерах, чем не будут:) Пожалуйста,
          откажитесь от каблуков(!) Мы празднуем на природе и не хотим, чтобы
          ваш и наш праздничный настрой омрачался вывихами, мозолями и прочими
          атрибутами калечащей обувки. Костюмы, платья и лесные тропинки отлично
          сочетаются с кедами!
        </Paragraph>
      </Content>
    </Wrapper>
  );
};

const Palette = styled.img`
  width: 70vw;
`;
