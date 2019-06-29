import React from "react";
import { Page, Banner, Album } from "../../styledGuide";

export default function Media({ pages, media }) {
  return (
    <Page>
      <Banner {...pages.media.headerBanner} />
      {media.map((album, i) => (
        <Album size={6} {...album} key={i} />
      ))}
    </Page>
  );
}
