import React from "react";

//media query show no show
export const Header = (props) => {
  const { inputCount, ...rest } = props;

  return <header {...rest} />;
};
