import styled from "styled-components";

import { mediaMobile } from "../styleConfig";

export const Content = styled.div`
  font-size: 1.3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 2rem;

  @media ${mediaMobile} {
    font-size: 1rem;
  }
`;
