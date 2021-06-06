import styled from "styled-components";

import { mediaMobile } from "../styleConfig";

export const Paragraph = styled.p`
  font-size: 1.3rem;

  padding-bottom: 2rem;

  text-align: center;

  @media ${mediaMobile} {
    font-size: 1rem;
  }
`;

export const ParagraphBold = styled(Paragraph)`
  font-weight: bold;
`;
