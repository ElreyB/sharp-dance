import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";
import { H2, H3, H4 } from "../Headings";
import { P } from "../P";
import Slides from "./slides";

const message = {
  tour: "Available for tour",
  performance: "Available for performance",
  both: "Available for tour or performance"
};

function getMessage(availableForTour, availableForPerformance) {
  if (availableForTour && availableForPerformance) {
    return message.both;
  }
  if (availableForTour) {
    return message.tour;
  }
  if (availableForPerformance) {
    return message.performance;
  }

  return undefined;
}

export function Album({
  availableForPerformance,
  availableForTour,
  content,
  sources,
  subtitle,
  title,
  images,
  ...props
}) {
  const message = getMessage(availableForTour, availableForPerformance);

  return (
    <Grid {...props} align="start" padding="M">
      <Grid>
        {title && <H2 size="fit">{title}</H2>}
        {message && <H4>({message})</H4>}
      </Grid>
      {subtitle && <H3>{subtitle}</H3>}
      {content && <P>{content}</P>}
      <Slides sources={images.map(source => ({ ...source, caption: title }))} />
    </Grid>
  );
}

Album.propTypes = {
  availableForPerformance: PropTypes.bool,
  availableForTour: PropTypes.bool,
  content: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      src: PropTypes.string,
      credit: PropTypes.string
    })
  )
};
