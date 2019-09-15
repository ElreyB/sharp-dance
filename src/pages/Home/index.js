import React from "react";

import { BackgroundVideo, Banner, Page } from "../../styledGuide";
import { PagesContext } from "../../Providers";
import Loading from "../Loading";

export default function Home() {
  const { getPage } = React.useContext(PagesContext);
  const page = getPage("home");

  if (!page) {
    return <Loading />;
  }

  const { headerBanner, options = {} } = page;

  return (
    <Page>
      <Banner {...headerBanner} />
      <BackgroundVideo src={options.video} />
    </Page>
  );
}
