import React from "react";
import { useGrid } from "gymnast";

export const Header = (props) => {
  const { inputCount, ...rest } = props;
  const [showHeader, allProps] = useGrid(rest);

  if (showHeader) {
    return <header {...allProps} />;
  }

  return null;
};
