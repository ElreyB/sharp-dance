import React from "react";
import { Page, Banner } from "../../styledGuide";
import Loading from "../Loading";

import { PagesContext } from "../../Providers";

export default function Donations() {
  const { getPage } = React.useContext(PagesContext);
  const page = getPage("donations");

  if (!page) {
    return <Loading />;
  }

  const { options, pageName, ...headerBanner } = page;

  return (
    <Page>
      <Banner {...headerBanner} />
    </Page>
  );
}
