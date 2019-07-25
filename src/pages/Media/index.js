import React from "react";
import { Page, Banner, Album, H2 } from "../../styledGuide";
import { findPage } from "../../utils";

export default function Media({ pages, media }) {
  const page = findPage(pages, "media");

  if (!page) {
    return null;
  }

  return (
    <Page>
      <Banner {...page.headerBanner} />
      {media.length > 0 ? (
        media.map((album, i) => <Album size={6} {...album} key={i} />)
      ) : (
        <H2>No albums available</H2>
      )}
    </Page>
  );
}
