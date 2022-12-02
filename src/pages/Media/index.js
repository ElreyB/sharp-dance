import React from "react";
import { useParams } from "react-router";
import AllPerformances from "./all";
import SinglePerformance from "./single";
import { isMatch } from "./media.logic";
import { MediaContext, PagesContext } from "../../Providers";
import Loading from "../Loading";

export default function Media() {
  const { performanceTitle } = useParams();
  const media = React.useContext(MediaContext);
  const { getPage } = React.useContext(PagesContext);
  const page = getPage("media");

  if (!page) {
    return <Loading />;
  }

  const { options, pageName, ...headerBanner } = page;

  const performance = media.find((performance = {}) => {
    return isMatch(performance.title, performanceTitle);
  });

  if (performance) {
    return <SinglePerformance performance={performance} />;
  }

  return <AllPerformances media={media} headerBanner={headerBanner} />;
}
