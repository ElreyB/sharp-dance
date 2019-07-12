import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components/macro";
import { theme, GlobalStyle } from "./styles";
import { AuthUserProvider } from "./fbconfig";

const RootApp = () => (
  <ThemeProvider theme={theme}>
    <AuthUserProvider>
      <GlobalStyle />
      <App />
    </AuthUserProvider>
  </ThemeProvider>
);

ReactDOM.render(<RootApp />, document.getElementById("root"));
