import React from "react";
import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { Content } from "../Content";
import { Block } from "../Block";
import { Parallax } from "../Parallax";
import { Paragraph } from "../Paragraph";
import { Link } from "../Link";
import styled from "styled-components";
import { mediaFull } from "../../styleConfig";

export const Flowers = () => {
  const chatLink = "https://sluchaem.ru/action/8043";

  const createLink = (children) => (
    <Link href={chatLink} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );

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
              пожертвование вот {createLink("сюда")}. Мы регулярно поддерживаем
              благотворительные сборы на Таких делах и других платформах и
              считаем наш праздник любви отличным поводом приобщить к этому
              близких. Спасибо❤️
            </Paragraph>
            {createLink(
              <Image
                src={process.env.PUBLIC_URL + "qr-code-flowers.svg"}
                alt="Цветы жизни"
              ></Image>
            )}
          </Content>
        </Block>
      </Wrapper>
    </Parallax>
  );
};

const Image = styled.img`
  width: 20vh;
  margin-bottom: 2rem;

  @media ${mediaFull} {
    margin-right: 2rem;
  }
`;
