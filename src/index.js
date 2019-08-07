import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components/macro";
import "firebase/firestore";
import { FirestoreProvider } from "react-firestore";
import { theme, GlobalStyle } from "./styles";
import { AuthUserProvider, Firebase } from "./fbconfig";

const RootApp = () => (
  <ThemeProvider theme={theme}>
    <FirestoreProvider firebase={Firebase}>
      <AuthUserProvider>
        <GlobalStyle />
        <App />
      </AuthUserProvider>
    </FirestoreProvider>
  </ThemeProvider>
);

ReactDOM.render(<RootApp />, document.getElementById("root"));
