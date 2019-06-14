import * as React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";

export const Page = ({ children, ...props }) => {
  return (
    <Grid {...props} align="start">
      {children}
    </Grid>
  );
};

Page.propTypes = {
  children: PropTypes.node
};
