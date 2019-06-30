import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";
import { H2, H3 } from "../Headings";
import { P } from "../P";
import Slides from "./slides";

export function Album({ title, subtitle, content, sources, ...props }) {
  return (
    <Grid {...props} align="start" padding="M">
      {title && <H2>{title}</H2>}
      {subtitle && <H3>{subtitle}</H3>}
      {content && <P>{content}</P>}
      <Slides sources={sources} />
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
