import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Bios from "./pages/Bios";
import Classes from "./pages/Classes";
import Donations from "./pages/Donations";
import Contact from "./pages/Contact";
import Error404 from "./pages/404";
import Events from "./pages/Events";
import Generic from "./pages/Generic";
import Home from "./pages/Home";
import Media from "./pages/Media";
import Press from "./pages/Press";
import DianeSharp from "./pages/DianeSharp";
import Tickets from "./pages/Tickets";

import Header from "./components/Header";
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
  PHOTOGRAPHY,
  PRESS,
  PRESS_KIT,
  TICKETS,
} from "./constants";
import { ScrollToTop, GymnastProvider } from "./styledGuide";

const component = (Component) => (routeProps) => <Component {...routeProps} />;
const genericPage = (pageKey) => (routeProps) => (
  <Generic pageKey={pageKey} {...routeProps} />
);

function App() {
  return (
    // <GymnastProvider
    //   displayAliases={{
    //     desktop: { minWidth: "601px" },
    //     mobile: { maxWidth: "600px" },
    //   }}
    // >
    <Router>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route path={ABOUT} exact component={component(About)} />
        <Route path={BIOS} exact component={component(Bios)} />
        <Route path={CLASSES} exact component={component(Classes)} />
        <Route path={CONTACT} exact component={component(Contact)} />
        <Route path={DIANE} exact component={component(DianeSharp)} />
        <Route path={DONATIONS} exact component={component(Donations)} />
        <Route path={EVENTS} exact component={component(Events)} />
        <Route path={PAST_EVENTS} exact component={component(Events)} />
        <Route path={LANDING} exact component={component(Home)} />
        <Route
          path={`${MEDIA}/:performanceTitle?`}
          exact
          component={component(Media)}
        />
        <Route
          path={PHOTOGRAPHY}
          exact
          component={genericPage("photography")}
        />
        <Route path={PRESS_KIT} exact component={genericPage("press-kit")} />
        <Route path={PRESS} exact component={component(Press)} />
        <Route path={TICKETS} exact component={component(Tickets)} />
        <Route path={ERROR} component={component(Error404)} />

        <Route component={component(Error404)} />
      </Switch>
    </Router>
    // </GymnastProvider>
  );
}

export default App;
