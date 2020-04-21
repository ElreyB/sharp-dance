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
  OrganizationsProvider,
  PerformancesProvider,
  QuotesProvider,
  PagesProvider,
  ResourcesProvider,
  PressProvider,
} from "./Providers";
import { ClassScheduleProvider } from "./Providers/ClassScheduleProvider";

const RootApp = () => (
  <ThemeProvider theme={theme}>
    <FirestoreProvider firebase={Firebase}>
      <ClassScheduleProvider>
        <PerformancesProvider>
          <MediaProvider>
            <QuotesProvider>
              <OrganizationsProvider>
                <PagesProvider>
                  <ResourcesProvider>
                    <PressProvider>
                      <GlobalStyle />
                      <App />
                    </PressProvider>
                  </ResourcesProvider>
                </PagesProvider>
              </OrganizationsProvider>
            </QuotesProvider>
          </MediaProvider>
        </PerformancesProvider>
      </ClassScheduleProvider>
    </FirestoreProvider>
  </ThemeProvider>
);

ReactDOM.render(<RootApp />, document.getElementById("root"));
