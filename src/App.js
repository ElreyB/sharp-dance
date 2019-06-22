import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Bios from "./pages/Bios";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { withAuthentication } from "../src/fbconfig";

function App() {
  return (
    <Router>
      <Route path="/about/" component={About} />
      <Route path="/bios" exact component={Bios} />
      <Route path="/events/" component={Events} />
      <Route path="/login/" component={Login} />
      <Route path="/signup/" component={SignUp} />
      <Route path="/admin/" component={Admin} />
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default withAuthentication(App);
