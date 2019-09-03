import React, { useContext } from "react";
import { Page, Banner, Album, H2 } from "../../styledGuide";
import { findPage } from "../../utils";
import { MediaContext } from "../../Providers";

function Media({ pages }) {
  /**TODO: need to fix firestore database. Do not have 'page.classSchedule' */
  const media = useContext(MediaContext);
  const page = findPage(pages, "media");
  if (!page) {
    return null;
  }
  return (
    <Page>
      <Banner {...page.headerBanner} />
      {media ? (
        media.map((album, i) => {
          return <Album size={6} {...album} key={album.id} />;
        })
      ) : (
        <H2>No albums available</H2>
      )}
    </Page>
  );
}

export default Media;
