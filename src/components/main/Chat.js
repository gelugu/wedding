import React from "react";
import styled from "styled-components";
import { mediaFull } from "../../styleConfig";
import { Content } from "../Content";
import { Link } from "../Link";
import { Paragraph } from "../Paragraph";
import { Wrapper } from "../Wrapper";

export const Chat = () => {
  const chatLink = "https://t.me/joinchat/CgaTQgoztuphZGYy";

  const createLink = (children) => (
    <Link href={chatLink} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );

  return (
    <Wrapper className="chat">
      <Content>
        <Paragraph>
          Если ты принимаешь наше приглашение, вступи, пожалуйста в{" "}
          {createLink("чат")}.
        </Paragraph>
        {createLink(
          <Image
            src={process.env.PUBLIC_URL + "qr-code-chat.svg"}
            alt="Chat"
          ></Image>
        )}
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
