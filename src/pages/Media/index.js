import React from "react";
import { Redirect } from "react-router";
import { ERROR } from "../../constants";
import AllPerformances from "./all";
import SinglePerformance from "./single";
import { isMatch } from "./media.logic";
import { MediaContext, PagesContext } from "../../Providers";
import Loading from "../Loading";

export default function Media({ match }) {
  const media = React.useContext(MediaContext);
  const { getPage } = React.useContext(PagesContext);
  const { performanceTitle } = match.params;
  const page = getPage("media");

  if (!page) {
    return <Loading />;
  }

  const { options, pageName, ...headerBanner } = page;

  const performance = media.find(performance =>
    isMatch(performance.title, performanceTitle)
  );

  if (performanceTitle && !performance) {
    return <Redirect to={ERROR} />;
  }

  if (performance) {
    return <SinglePerformance performance={performance} />;
  }

  return <AllPerformances media={media} headerBanner={headerBanner} />;
}
