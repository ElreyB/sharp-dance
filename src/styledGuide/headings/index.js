import React from "react";
import { useGrid } from "gymnast";

const withGrid = Component => ({ children, ...props }) => {
  const [showH1, allProps] = useGrid(props);

  if (showH1) {
    return <Component {...allProps}>{children}</Component>;
  }

  return null;
};

export const H1 = withGrid("h1");
export const H2 = withGrid("h2");
export const H3 = withGrid("h3");
export const H4 = withGrid("h4");
