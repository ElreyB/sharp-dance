import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";

export const Label = ({
  children,
  size,
  margin = "M M 0 M",
  padding,
  justify,
  ...props
}) => {
  return (
    <Grid size={size} margin={margin} padding={padding} justify={justify}>
      <label {...props}>{children}</label>
    </Grid>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
};
