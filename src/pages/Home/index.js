import React from "react";
import { Banner, Page } from "../../styledGuide";
import { findPage } from "../../utils";

export default function Home({ pages }) {
  const home = findPage(pages, "home");

  if (!home) {
    return null;
  }

  return (
    <Page>
      <Banner {...home.headerBanner} />
    </Page>
  );
}
