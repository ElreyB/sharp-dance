import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Bios from "./pages/Bios";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import Error404 from "./pages/404";
import Events from "./pages/Events";
import Generic from "./pages/Generic";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import Media from "./pages/Media";
import Press from "./pages/Press";
import { useGetDatabase } from "../src/fbconfig";
import {
  ABOUT,
  BIOS,
  CLASSES,
  CONTACT,
  DONATIONS,
  ERROR,
  EVENTS,
  LANDING,
  MEDIA,
  PHOTOGRAPHY,
  PRESS,
  PRESS_KIT
} from "./constants";
import { ScrollToTop } from "./styledGuide";

function App() {
  const database = useGetDatabase();

  if (!database.pages) {
    return (
      <Router>
        <Loading />
      </Router>
    );
  }
  // Add loaded "database" as prop to route component
  const component = Component => routeProps => (
    <Component {...routeProps} {...database} />
  );
  const genericPage = pageKey => routeProps => (
    <Generic pageKey={pageKey} {...routeProps} {...database} />
  );

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path={ABOUT} component={component(About)} />
        <Route path={BIOS} exact component={component(Bios)} />
        <Route path={CLASSES} component={component(Classes)} />
        <Route path={CONTACT} component={component(Contact)} />
        <Route path={DONATIONS} component={genericPage("donations")} />
        <Route path={EVENTS} component={component(Events)} />
        <Route path={LANDING} exact component={component(Home)} />
        <Route
          path={`${MEDIA}/:performanceTitle?`}
          component={component(Media)}
        />
        <Route path={PHOTOGRAPHY} component={genericPage("photography")} />
        <Route path={PRESS_KIT} component={genericPage("press-kit")} />
        <Route path={PRESS} component={component(Press)} />
        <Route path={ERROR} component={component(Error404)} />

        <Route component={component(Error404)} />
      </Switch>
    </Router>
  );
}

export default App;
