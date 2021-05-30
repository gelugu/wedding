import styled from "styled-components";
import { colors, mediaMobile } from "../styleConfig";

export const Block = styled.div`
  background-color: ${colors.cream}cc;

  @media ${mediaMobile} {
    text-align: center;
  }
`;
