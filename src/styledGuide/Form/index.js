import React from "react";
import PropTypes from "prop-types";
import { useGrid } from "gymnast";

export const Form = ({ children, ...props }) => {
  const [, allProps] = useGrid(props);

  return <form {...allProps}>{children}</form>;
};

Form.propTypes = {
  children: PropTypes.node.isRequired
};
