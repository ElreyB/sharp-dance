import React from "react";
import PropTypes from "prop-types";

export const P = ({ children, ...props }) => {
  return <p {...props}>{children}</p>;
};

P.propTypes = {
  children: PropTypes.node.isRequired,
};
