import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components/macro";
import "firebase/firestore";
import { FirestoreProvider } from "react-firestore";
import { theme, GlobalStyle } from "./styles";
import { Firebase } from "./fbconfig";
import {
  MediaProvider,
  PerformancesProvider,
  StaffProvider,
  AuthProvider,
  QuotesProvider,
  OrganizationsProvider
} from "./Providers";

const RootApp = () => (
  <ThemeProvider theme={theme}>
    <FirestoreProvider firebase={Firebase}>
      <PerformancesProvider>
        <MediaProvider>
          <StaffProvider>
            <QuotesProvider>
              <OrganizationsProvider>
                <AuthProvider>
                  <GlobalStyle />
                  <App />
                </AuthProvider>
              </OrganizationsProvider>
            </QuotesProvider>
          </StaffProvider>
        </MediaProvider>
      </PerformancesProvider>
    </FirestoreProvider>
  </ThemeProvider>
);

ReactDOM.render(<RootApp />, document.getElementById("root"));
