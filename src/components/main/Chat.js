import React from "react";
import styled from "styled-components";

import { Wrapper } from "../Wrapper";
import { Content } from "../Content";
import { Paragraph } from "../Paragraph";
import { mediaFull } from "../../styleConfig";
import { createLink } from "../Link";

export const Chat = () => {
  const chatLink = "https://t.me/joinchat/CgaTQgoztuphZGYy";
  const chatImage = (
    <Image src={process.env.PUBLIC_URL + "qr-code-chat.svg"} alt="Chat"></Image>
  );

  return (
    <Wrapper className="chat">
      <Content>
        <Paragraph>
          Если ты принимаешь наше приглашение, вступи пожалуйста в{" "}
          {createLink("чат", chatLink)}.
        </Paragraph>
        {createLink(chatImage, chatLink)}
      </Content>
    </Wrapper>
  );
};

const Image = styled.img`
  width: 20vh;
  margin-bottom: 2rem;

  @media ${mediaFull} {
    margin-right: 2rem;
  }
`;
