import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";
import { H2, H3, H4 } from "../Headings";
import { P } from "../P";
import Slides from "./slides";
import { A } from "../A";

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
  images,
  videos,
  subtitle,
  title,
  link,
  ...props
}) {
  const message = getMessage(availableForTour, availableForPerformance);
  const TitleWrapper = link ? props => <A to={link} {...props} /> : Grid;

  return (
    <Grid {...props} align="start" padding="M">
      <TitleWrapper>
        {title && <H2 size="fit">{title}</H2>}
        {message && <H4>({message})</H4>}
        {subtitle && <H3>{subtitle}</H3>}
        {content && <P>{content}</P>}
      </TitleWrapper>
      <Slides
        sources={[...videos, ...images].map(source => ({
          src: source.image || source.url,
          title: source.showTitle,
          credit: source.credit,
          caption: source.imageTitle || source.videoTitle
        }))}
      />
    </Grid>
  );
}

Album.propTypes = {
  availableForPerformance: PropTypes.bool,
  availableForTour: PropTypes.bool,
  content: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      credit: PropTypes.string,
      image: PropTypes.string,
      imageTitle: PropTypes.string,
      showTitle: PropTypes.string
    })
  ),
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      showTitle: PropTypes.string,
      videoTitle: PropTypes.string,
      url: PropTypes.string,
      credit: PropTypes.string
    })
  )
};
