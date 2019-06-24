import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Bios from "./pages/Bios";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Error404 from "./pages/404";
import { withAuthentication } from "../src/fbconfig";
import {
  ABOUT,
  ADMIN,
  BIOS,
  EVENTS,
  LANDING,
  LOG_IN,
  SIGN_UP
} from "./constants";

function App() {
  return (
    <Router>
      <Route path={ABOUT} component={About} />
      <Route path={BIOS} exact component={Bios} />
      <Route path={EVENTS} component={Events} />
      <Route path={LOG_IN} component={Login} />
      <Route path={SIGN_UP} component={SignUp} />
      <Route path={ADMIN} component={Admin} />
      <Route path={LANDING} exact component={Home} />
      <Route path={LANDING} component={Error404} />
    </Router>
  );
}

export default withAuthentication(App);
