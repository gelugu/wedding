import styled from "styled-components";
import { colors } from "../styleConfig";

export const Block = styled.div`
  margin: 5vh;
  padding: 5vh;

  background-color: ${colors.cream}cc;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
