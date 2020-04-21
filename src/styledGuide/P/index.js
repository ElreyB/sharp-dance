import React from "react";
import PropTypes from "prop-types";
import { useGrid } from "gymnast";

export const P = ({ children, ...props }) => {
  const [, allProps] = useGrid(props);

  return <p {...allProps}>{children}</p>;
};

P.propTypes = {
  children: PropTypes.node.isRequired,
};
