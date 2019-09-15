import React from "react";
import { Page, Banner } from "../../styledGuide";
import Loading from "../Loading";
import { PagesContext } from "../../Providers";

export default function Press() {
  const { getPage } = React.useContext(PagesContext);
  const page = getPage("press");

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
