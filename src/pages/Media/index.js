import React from "react";
import { Redirect } from "react-router";
import { findPage } from "../../utils";
import { ERROR } from "../../constants";
import AllPerformances from "./all";
import SinglePerformance from "./single";
import { isMatch } from "./media.logic";
import { MediaContext } from "../../Providers";

export default function Media({ pages, match }) {
  const media = React.useContext(MediaContext);
  const page = findPage(pages, "media");
  const { performanceTitle } = match.params;

  if (!page) {
    return null;
  }

  const performance = media.find(performance =>
    isMatch(performance.title, performanceTitle)
  );

  if (performanceTitle && !performance) {
    return <Redirect to={ERROR} />;
  }

  if (performance) {
    return <SinglePerformance performance={performance} />;
  }

  return <AllPerformances media={media} page={page} />;
}
