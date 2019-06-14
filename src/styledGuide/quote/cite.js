import * as React from "react";
import PropTypes from "prop-types";
import { useGrid } from "gymnast";

export const Cite = ({ children, ...props }) => {
  const [, allProps] = useGrid(props);

  return <cite {...allProps}>{children}</cite>;
};

Cite.propTypes = {
  children: PropTypes.node.isRequired
};
