import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components/macro";
import "firebase/firestore";
import { FirestoreProvider } from "react-firestore";
import { theme, GlobalStyle } from "./styles";
import { Firebase } from "./fbconfig";
import {
  AuthProvider,
  MediaProvider,
  OrganizationsProvider,
  PerformancesProvider,
  QuotesProvider,
  PagesProvider,
  ResourcesProvider,
  DatabaseProvider,
  PressProvider
} from "./Providers";

const RootApp = () => (
  <ThemeProvider theme={theme}>
    <FirestoreProvider firebase={Firebase}>
      <PerformancesProvider>
        <MediaProvider>
          <QuotesProvider>
            <OrganizationsProvider>
              <PagesProvider>
                <ResourcesProvider>
                  <PressProvider>
                    <DatabaseProvider>
                      <AuthProvider>
                        <GlobalStyle />
                        <App />
                      </AuthProvider>
                    </DatabaseProvider>
                  </PressProvider>
                </ResourcesProvider>
              </PagesProvider>
            </OrganizationsProvider>
          </QuotesProvider>
        </MediaProvider>
      </PerformancesProvider>
    </FirestoreProvider>
  </ThemeProvider>
);

ReactDOM.render(<RootApp />, document.getElementById("root"));
