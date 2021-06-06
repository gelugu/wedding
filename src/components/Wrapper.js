import styled from "styled-components";

import { mediaMobile } from "../styleConfig";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 60vw;

  @media ${mediaMobile} {
    width: 100vw;
  }
`;
