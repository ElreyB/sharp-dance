import React from "react";
import { Page, Banner } from "../../styledGuide";
import Loading from "../Loading";
import { PagesContext, PressContext } from "../../Providers";

export default function Press() {
  const { getPage } = React.useContext(PagesContext);
  const press = React.useContext(PressContext);
  const page = getPage("press");

  if (!page) {
    return <Loading />;
  }

  const { options, pageName, ...headerBanner } = page;

  console.log("press", press);

  return (
    <Page>
      <Banner {...headerBanner} />
    </Page>
  );
}
