import React from "react";
import { Page, Banner, Album, H2 } from "../../styledGuide";

export default function Media({ pages, media }) {
  const mediaList = Object.values(media);

  return (
    <Page>
      <Banner {...pages.media.headerBanner} />
      {mediaList.length > 0 ? (
        mediaList.map((album, i) => <Album size={6} {...album} key={i} />)
      ) : (
        <H2>No albums available</H2>
      )}
    </Page>
  );
}
