import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components/macro";
import About from "./pages/About";
import Login from "./pages/Login";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.colors.black};
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/login/" component={Login} />
    </Router>
  );
}

export default App;
