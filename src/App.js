import { random } from "lodash";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ABOUT,
  BIOS,
  CLASSES,
  CONTACT,
  DIANE,
  DONATIONS,
  ERROR,
  EVENTS,
  LANDING,
  MEDIA,
  PAST_EVENTS,
  PRESS,
  TICKETS,
} from "./constants";
import MainLayout from "./layouts/MainLayout";
import Error404 from "./pages/404";
import About from "./pages/About";
import Bios from "./pages/Bios";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import DianeSharp from "./pages/DianeSharp";
import Donations from "./pages/Donations";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Media from "./pages/Media";
import Press from "./pages/Press";
import Tickets from "./pages/Tickets";
import { QuotesContext } from "./Providers";
import { Header, ScrollToTop } from "./styledGuide";
import { Quote } from "./styledGuide/Quote";

function MainLayoutRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <MainLayout>
            <Component {...props} />
          </MainLayout>
        );
      }}
    />
  );
}

function App() {
  const quotes = React.useContext(QuotesContext);
  return (
    <Router>
      <Header />
      <Quote {...quotes[random(0, quotes.length - 1)]} alignAuthor="center" />

      <ScrollToTop />
      <Switch>
        <MainLayoutRoute path={ABOUT} exact component={About} />
        <MainLayoutRoute path={BIOS} exact component={Bios} />
        <MainLayoutRoute path={CLASSES} exact component={Classes} />
        <MainLayoutRoute path={CONTACT} exact component={Contact} />
        <MainLayoutRoute path={DIANE} exact component={DianeSharp} />
        <MainLayoutRoute path={DONATIONS} exact component={Donations} />
        <MainLayoutRoute path={EVENTS} exact component={Events} />
        <MainLayoutRoute path={PAST_EVENTS} exact component={Events} />
        <MainLayoutRoute
          path={[LANDING, "/sharp-dance"]}
          exact
          component={Home}
        />
        <MainLayoutRoute
          path={`${MEDIA}/:performanceTitle?`}
          exact
          component={Media}
        />
        <MainLayoutRoute path={PRESS} exact component={Press} />
        <MainLayoutRoute path={TICKETS} exact component={Tickets} />
        <MainLayoutRoute path={ERROR} component={Error404} />

        <MainLayoutRoute component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
