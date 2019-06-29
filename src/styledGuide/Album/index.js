import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";

export function Album({ title, subtitle, content, sources, ...props }) {
  return (
    <Grid {...props} align="start">
      {title}
    </Grid>
  );
}

Album.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      src: PropTypes.string,
      credit: PropTypes.string
    })
  )
};
