import * as React from "react";
import PropTypes from "prop-types";
import { useGrid } from "gymnast";

export const Blockquote = ({ children, ...props }) => {
  const [, allProps] = useGrid(props);

  return <blockquote {...allProps}>{children}</blockquote>;
};

Blockquote.propTypes = {
  children: PropTypes.node.isRequired
};
