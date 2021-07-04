import React from "react";

import { Wrapper } from "../Wrapper";
import { Content } from "../Content";
import { Paragraph } from "../Paragraph";
import { Parallax } from "../Parallax";
import { Header } from "../Header";
import { Block } from "../Block";
import { createLink } from "../Link";
import styled from "styled-components";

export const Actions = () => {
  const adressLink = "https://goo.gl/maps/EGAM7KWAbUrZ4xx37";
  const scheduleLink =
    "https://www.tutu.ru/rasp.php?st1=63509&st2=20000&date=all&date=18.07.2021";

  return (
    <Parallax img="actions.jpg">
      <Wrapper className="actions">
        <Block>
          <Content>
            <Header>Что будем делать?</Header>
            <Paragraph>
              Ооо, много всего! Вот примерный тайминг. Понятно, что на автобус
              опаздывать крайне нежелательно (вот прям совсем), а завтрак и
              речка вас в случае чего подождут.
            </Paragraph>
            <Paragraph>
              <Timing>
                <TimingHeader>17 июля</TimingHeader>
                <List>
                  <ListItem>
                    <Time>12.15-12.30</Time>
                    <span> - </span>
                    <Title>
                      Сбор гостей по адресу:{" "}
                      {createLink("ул. Годовикова, 14", adressLink)}, подъезд
                      единственный (метро Алексеевская). НЕ ОПАЗДЫВАЙТЕ
                      ПОЖАЛУЙСТА
                    </Title>
                  </ListItem>
                  <ListItem>
                    <Time>12.40</Time>
                    <span> - </span>
                    <Title>Отправление автобуса до усадьбы</Title>
                  </ListItem>
                  <ListItem>
                    <Time>15.30</Time>
                    <span> - </span>
                    <Title>Заселение</Title>
                  </ListItem>
                  <ListItem>
                    <Time>16.20</Time>
                    <span> - </span>
                    <Title>Велком-фуршет</Title>
                  </ListItem>
                  <ListItem>
                    <Time>17.00</Time>
                    <span> - </span>
                    <Title>Церемония</Title>
                  </ListItem>
                  <ListItem>
                    <Time>18.00</Time>
                    <span> - </span>
                    <Title>Банкет</Title>
                  </ListItem>
                  <ListItem>
                    <Time>22.00</Time>
                    <span> - </span>
                    <Title>Туса</Title>
                  </ListItem>
                </List>
              </Timing>
              <Timing>
                <TimingHeader>18 июля</TimingHeader>
                <List>
                  <ListItem>
                    <Time>10.00-12.30</Time>
                    <span> - </span>
                    <Title>Завтрак</Title>
                  </ListItem>
                  <ListItem>
                    <Time>13.00</Time>
                    <span> - </span>
                    <Title>Музыкальный джем</Title>
                  </ListItem>
                  <ListItem>
                    <TitleOnly>
                      Потом идём на речку, гуляем и расползаемся по домам
                      (вечером будет автобус до Москвы, если наберется
                      достаточно желающих; уехать на электричке можно в любое
                      время (см.{" "}
                      {createLink(
                        "расписание Ильинский погост-Москва",
                        scheduleLink
                      )}
                      ))
                    </TitleOnly>
                  </ListItem>
                </List>
              </Timing>
            </Paragraph>
          </Content>
        </Block>
      </Wrapper>
    </Parallax>
  );
};

const Timing = styled.div`
  margin-bottom: 2rem;
  padding: 0 3rem;
`;

const TimingHeader = styled.h3`
  margin-bottom: 0.5rem;
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

const Time = styled.span`
  padding-right: 2rem;
  white-space: nowrap;
  text-decoration: underline;
`;

const Title = styled.span`
  padding-left: 2rem;
`;

const TitleOnly = styled.span``;
