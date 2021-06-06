import styled from "styled-components";

import { colors } from "../styleConfig";

export const createLink = (children, link) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);

export const Link = styled.a`
  :link {
    font-weight: bold;
    color: ${colors.text};
    background-color: transparent;
  }
  :visited {
    color: ${colors.caramel};
    background-color: transparent;
    text-decoration: none;
  }
  :hover {
    color: ${colors.text};
    background-color: transparent;
    text-decoration: none;
  }
  :active {
    color: ${colors.text};
    background-color: transparent;
    text-decoration: underline;
  }
`;
