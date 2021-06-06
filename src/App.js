import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Main } from "./components/Main";
import { colors } from "./styleConfig";

function App() {
  return (
    <AppDiv>
      <GlobalStyle />
      <Main />
    </AppDiv>
  );
}

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Courier new", 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    background-color: ${colors.cream};

    color: ${colors.text};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

export default App;
