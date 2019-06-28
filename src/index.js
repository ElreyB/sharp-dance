import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components/macro";
import { theme, GlobalStyle } from "./styles";
import { withDatabase } from "./fbconfig";

const RootApp = withDatabase(() => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>
));

ReactDOM.render(<RootApp />, document.getElementById("root"));
