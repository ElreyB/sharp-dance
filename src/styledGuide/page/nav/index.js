import React from "react";
import { useGrid } from "gymnast";
import { Ul } from "./ul";
import { Li } from "./li";

export function Nav(props) {
  const [, allProps] = useGrid(props);

  return (
    <nav {...allProps}>
      <Ul>
        <Li to="/">Home</Li>
        <Li to="/about">About</Li>
        <Li to="/login">Login</Li>
      </Ul>
    </nav>
  );
}
