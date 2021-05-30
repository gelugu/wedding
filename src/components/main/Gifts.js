import React from "react";
import styled from "styled-components";
import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { Content } from "../Content";
import { Link } from '../Link'
import { Paragraph } from "../Paragraph";
import { mediaFull } from "../../styleConfig";

export const Gifts = () => {
  const wishlistLink =
    "https://docs.google.com/" +
    "spreadsheets/d/" +
    "1D-e85fXafwjx9FukgG92RlRimuEPN_64Out4IArYt5A/" +
    "edit?usp=sharing";

  const createLink = (children) => (
    <Link href={wishlistLink} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );

  return (
    <Wrapper className="gifts">
      <Content>
        <Header>Что подарить?</Header>
        <Row>
          {createLink(
            <Image
              src={process.env.PUBLIC_URL + "qr-code-gift.svg"}
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
        </Row>
      </Content>
    </Wrapper>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${mediaFull} {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 20vh;
  margin-bottom: 2rem;

  @media ${mediaFull} {
    margin-right: 2rem;
  }
`;
