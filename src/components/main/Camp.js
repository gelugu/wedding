import React from "react";

import { Wrapper } from "../Wrapper";
import { Content } from "../Content";
import { Paragraph } from "../Paragraph";
import { Parallax } from "../Parallax";
import { Header } from "../Header";
import { Block } from "../Block";
import styled from "styled-components";

export const Camp = () => {
  return (
    <Parallax img="camp.jpg">
      <Wrapper className="camp">
        <Block>
          <Content>
            <Header>А ночевать где?</Header>
            <Paragraph>
              Для вас мы забронировали блок "Пирамида" в усадьбе — в основном
              номера двухместные, но бывают и побольше. Каждый номер — с
              уникальным дизайнерским решением! В номере, кроме свежего
              постельного белья и полотенец, вы обнаружите обогреватель. Если
              что-то ещё нужно — смело спрашивайте на стойке администратора!
              Удобства в "Пирамиде" на этаже, есть несколько душевых и ванна, в
              которой можно поваляться. Для быстроты заселения мы уже
              предварительно сгруппировали вас по номерам, чтобы не делить
              сладкие парочки и не нарушать приватность девчонок и мальчишек.
              Если хочется, местами всегда можно поменяться. Если вы до
              последнего не могли подтвердить ваше присутствие, не переживайте!
              Мы бронировали с запасом:) Кроме того, в усадьбе есть свободные
              номера и в других блоках — вам не о чем волноваться.
            </Paragraph>
          </Content>
          <Content>
            <Header>Схема расселения:</Header>
            <List>
              <ListItem>1П - Алина Шмелева, Максим Широков</ListItem>
              <ListItem>2П - Яна Болотенкова, Андрей Воробьев</ListItem>
              <ListItem>
                3П - Алена Резепова, Анна Аверина, Алла Батищева
              </ListItem>
              <ListItem>4П - Варвара Герасимова, Андрей Сорокин </ListItem>
              <ListItem>5П - Глеб Кузнецов, Екатерина Рыжко </ListItem>
              <ListItem>6П - Роман Артамонов, Милена Артамонова</ListItem>
              <ListItem>7П - Светлана Лебедь, Анастасия Нефедова</ListItem>
              <ListItem>
                8П - Марина Клокова, Анна Голубева, Алина Баймамадова, Анастасия
                Зиманкова
              </ListItem>
              <ListItem>9П - Дмитрий Шеломенцев, Шахноза Сарикова</ListItem>
              <ListItem>10П - Татьяна Алексеева, Евгений Плотников</ListItem>
              <ListItem>11П - Кирилл Антонов, Александр Милованов</ListItem>
              <ListItem>12П - Виктор Аветисян, Глеб Поленок</ListItem>
              <ListItem>Круглый дом: Злата Улитина, Михаил Краев</ListItem>

              <ListItem>
                Черепаха: Наталия Улитина, Андрей Улитин, Надежда Борисова, Анна
                Манакова
              </ListItem>
            </List>
          </Content>
        </Block>
      </Wrapper>
    </Parallax>
  );
};

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
