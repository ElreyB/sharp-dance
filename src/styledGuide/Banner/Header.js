import React from "react";
import { useGrid } from "gymnast";

export const Header = props => {
  const [showHeader, allProps] = useGrid(props);

  if (showHeader) {
    return <header {...allProps} />;
  }

  return null;
};
