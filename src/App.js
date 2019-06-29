import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Bios from "./pages/Bios";
import Classes from "./pages/Classes";
import Error404 from "./pages/404";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import Media from "./pages/Media";
import SignUp from "./pages/SignUp";
import { withAuthentication, getDB, loadLocal } from "../src/fbconfig";
import {
  ABOUT,
  ADMIN,
  BIOS,
  CLASSES,
  EVENTS,
  LANDING,
  LOG_IN,
  MEDIA,
  SIGN_UP
} from "./constants";

function App() {
  const [database, setDatabase] = React.useState(loadLocal());

  React.useEffect(() => {
    getDB().then(value => setDatabase(value));
  }, []);

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

  return (
    <Router>
      <Switch>
        <Route path={ABOUT} component={component(About)} />
        <Route path={ADMIN} component={component(Admin)} />
        <Route path={BIOS} exact component={component(Bios)} />
        <Route path={CLASSES} exact component={component(Classes)} />
        <Route path={EVENTS} component={component(Events)} />
        <Route path={LOG_IN} component={component(Login)} />
        <Route path={MEDIA} component={component(Media)} />
        <Route path={SIGN_UP} component={component(SignUp)} />
        <Route path={LANDING} exact component={component(Home)} />
        <Route component={component(Error404)} />
      </Switch>
    </Router>
  );
}

export default withAuthentication(App);
