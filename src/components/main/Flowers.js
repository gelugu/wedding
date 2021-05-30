import React from "react";
import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { Content } from "../Content";
import { Block } from "../Block";
import { Parallax } from "../Parallax";
import { Paragraph } from "../Paragraph";

export const Flowers = () => {
  return (
    <Parallax img="flowers.jpg" startPosition={20} scrollSpeed={40}>
      <Wrapper className="flowers">
        <Block>
          <Content>
            <Header>Почему не надо цветов?</Header>
            <Paragraph>
              Цветы – это дорого и непрактично. К тому же, в разгар торжества их
              некуда и некому ставить:) Если вы хотели бы нас порадовать чем-то
              красивым и добрым, как ластящиеся к ногам полевые травы – сделайте
              пожертвование вот сюда. Мы регулярно поддерживаем
              благотворительные сборы на Таких делах и других платформах и
              считаем наш праздник любви отличным поводом приобщить к этому
              близких. Спасибо❤️
            </Paragraph>
          </Content>
        </Block>
      </Wrapper>
    </Parallax>
  );
};
