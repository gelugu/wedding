import styled, { css } from "styled-components";

export const Parallax = styled.div`
  ${(props) => css`
    background: url(${process.env.PUBLIC_URL + props.img}) center;
  `}

  background-size: cover;
  background-attachment: fixed;

  width: 100vw;

  display: flex;
  justify-content: center;
`;
