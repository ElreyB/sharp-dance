import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Bios from "./pages/Bios";
import Classes from "./pages/Classes";
import Error404 from "./pages/404";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { withAuthentication } from "../src/fbconfig";
import {
  ABOUT,
  ADMIN,
  BIOS,
  CLASSES,
  EVENTS,
  LANDING,
  LOG_IN,
  SIGN_UP
} from "./constants";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ABOUT} component={About} />
        <Route path={BIOS} exact component={Bios} />
        <Route path={CLASSES} exact component={Classes} />
        <Route path={EVENTS} component={Events} />
        <Route path={LOG_IN} component={Login} />
        <Route path={SIGN_UP} component={SignUp} />
        <Route path={ADMIN} component={Admin} />
        <Route path={LANDING} exact component={Home} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default withAuthentication(App);
