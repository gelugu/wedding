import React from "react";
import { Wrapper } from "./Wrapper";
import { Header } from "./Header";
import { Content } from "./Content";

export const DressCode = () => {
  return (
    <Wrapper className="dressCode">
      <Header>Что надеть?</Header>
      <Content>
        Это — палитра нашего праздника. Нежные, пастельные природные цвета с
        акцентными деревом, золотом и стеклом. Пожалуйста, подберите себе
        удобную одежду! Все мы хотим быть красивущими на церемонии, но после неё
        нас ожидают танцы до утра:) Позаботьтесь о вещах на второй день (не
        забудьте купальник/плавки), возможно, стоит предусмотреть что-то тёплое
        на вечер и непромокаемое на случай дождя — смотрите прогноз погоды в
        Егорьевске. Не думайте, что берёте лишнее — лучше запасные вещички будут
        лежать у вас в номерах, чем не будут:) Пожалуйста, откажитесь от
        каблуков(!) Мы празднуем на природе и не хотим, чтобы ваш и наш
        праздничный настрой омрачался вывихами, мозолями и прочими атрибутами
        калечащей обувки. Костюмы, платья и лесные тропинки отлично сочетаются с
        кедами!
      </Content>
    </Wrapper>
  );
};
