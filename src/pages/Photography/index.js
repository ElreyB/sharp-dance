import React from "react";
import { Page, Banner } from "../../styledGuide";

import { PagesContext } from "../../Providers";
import Loading from "../Loading";

export default function Photography() {
  const { getPage } = React.useContext(PagesContext);
  const page = getPage("photography");

  if (!page) {
    return <Loading />;
  }

  const { headerBanner } = page;
  return (
    <Page>
      <Banner {...headerBanner} />
    </Page>
  );
}
