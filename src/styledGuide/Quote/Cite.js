import React from "react";
import PropTypes from "prop-types";

export const Cite = ({ children, ...props }) => {
  return <cite {...props}>{children}</cite>;
};

Cite.propTypes = {
  children: PropTypes.node.isRequired,
};
