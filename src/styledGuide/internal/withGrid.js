import React from "react";
import { useGrid } from "gymnast";

export const withGrid = (Component) => ({ children, ...props }) => {
  const [showComponent, allProps] = useGrid(props);

  if (showComponent) {
    return <Component {...allProps}>{children}</Component>;
  }

  return null;
};
