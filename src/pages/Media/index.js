import React from "react";
import { withFirestore } from "react-firestore";
import { Page, Banner, Album, H2 } from "../../styledGuide";
import { findPage } from "../../utils";
import useGetData from "../../firestore/useGetData";

export const collectionIdsAndDocs = doc => ({ id: doc.id, ...doc.data() });

function Media({ pages, firestore }) {
  const page = findPage(pages, "media");
  const { media } = useGetData("media");

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

export default withFirestore(Media);
