import React from "react";
import { Page, Banner, AlbumSummary, H2 } from "../../styledGuide";
import { getPerformanceURL } from "./media.logic";

export default function AllPerformances({ headerBanner, media }) {
  return (
    <Page>
      <Banner {...headerBanner} />
      {media.length > 0 ? (
        media.map((album, i) => (
          <AlbumSummary
            size={6}
            link={getPerformanceURL(album)}
            {...album}
            key={i}
          />
        ))
      ) : (
        <H2>No albums available</H2>
      )}
    </Page>
  );
}
