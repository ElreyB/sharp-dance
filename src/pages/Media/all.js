import React from "react";
import { Page, Banner, AlbumSummary, H2 } from "../../styledGuide";
import { getPerformanceURL } from "./media.logic";

export default function AllPerformances({ headerBanner, media }) {
  const filterMedia = media.filter(album => Number(album.id) < 6);
  return (
    <Page>
      <Banner {...headerBanner} />
      {filterMedia.length > 0 ? (
        filterMedia.map((album, i) => {
          return (
            <AlbumSummary
              size={{ mobile: 12, desktop: 6 }}
              link={getPerformanceURL(album)}
              {...album}
              key={i}
            />
          );
        })
      ) : (
        <H2>No albums available</H2>
      )}
    </Page>
  );
}
