import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/login/" component={Login} />
    </Router>
  );
}

export default App;
