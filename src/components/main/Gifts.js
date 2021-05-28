import React from "react";
import styled from "styled-components";
import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { colors } from "../../styleConfig";
import { Content } from "../Content";

export const Gifts = () => {
  const wishlistLink =
    "https://docs.google.com/" +
    "spreadsheets/d/" +
    "1D-e85fXafwjx9FukgG92RlRimuEPN_64Out4IArYt5A/" +
    "edit?usp=sharing";

  const createLink = (children) => (
    <WishlistLink href={wishlistLink} target="_blank" rel="noopener noreferrer">
      {children}
    </WishlistLink>
  );

  return (
    <Wrapper className="gifts">
      <Header>Что подарить?</Header>
      <Content>
        {createLink(
          <Image
            src={process.env.PUBLIC_URL + "qr-code.svg"}
            alt="WishList"
          ></Image>
        )}
        <Paragraph>
          Вот {createLink("тут")} – наш вишлист. Пожалуйста, записывайте свои
          имена напротив подарка, чтобы не дарить одно и то же. А еще можно с
          кем-нибудь объединиться и подарить штуки вскладчину. Мы не будем
          подглядывать, честно! Если у вас не так много денег, пожалуйста, не
          стесняйтесь дарить нам песни, улыбки и проведённое вместе время❤️
        </Paragraph>
      </Content>
    </Wrapper>
  );
};

const Image = styled.img`
  width: 20vh;
  margin-right: 5rem;
`;

const Paragraph = styled.p``;

const WishlistLink = styled.a`
  :link {
    color: ${colors.lavender};
    background-color: transparent;
    text-decoration: none;
  }
  :visited {
    color: ${colors.lavenderLight};
    background-color: transparent;
    text-decoration: none;
  }
  :hover {
    color: ${colors.caramel};
    background-color: transparent;
    text-decoration: underline;
  }
  :active {
    color: ${colors.khaki};
    background-color: transparent;
    text-decoration: underline;
  }
`;
