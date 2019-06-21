import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Bios from "./pages/Bios";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { withAuthentication } from "../src/fbconfig";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/bios" exact component={Bios} />
      <Route path="/about/" component={About} />
      <Route path="/login/" component={Login} />
      <Route path="/signup/" component={SignUp} />
    </Router>
  );
}

export default withAuthentication(App);
