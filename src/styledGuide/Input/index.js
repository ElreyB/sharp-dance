import React from "react";
import PropTypes from "prop-types";
import { useGrid } from "gymnast";

export function Input({ children, ...props }) {
  const [, allProps] = useGrid(props);
  return <input {...allProps} />;
}

Input.propTypes = {
  children: PropTypes.node.isRequired
};
