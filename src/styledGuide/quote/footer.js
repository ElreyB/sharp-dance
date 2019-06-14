import * as React from "react";
import PropTypes from "prop-types";
import { useGrid } from "gymnast";

export const Footer = ({ children, ...props }) => {
  const [, allProps] = useGrid(props);

  return <footer {...allProps}>{children}</footer>;
};

Footer.propTypes = {
  children: PropTypes.node.isRequired
};
