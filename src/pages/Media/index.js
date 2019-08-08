import React from "react";
import { FirestoreCollection } from "react-firestore";
import { Page, Banner, Album, H2 } from "../../styledGuide";
import { findPage } from "../../utils";
import useCollection from "../../firestore/useCollection";

function Media({ pages }) {
  const { data } = useCollection("pages");
  const page = findPage(data, "3");
  if (!page) {
    return null;
  }
  return (
    <FirestoreCollection
      path="media"
      render={({ data, isLoading }) => (
        <Page>
          <Banner {...page.headerBanner} />
          {!isLoading ? (
            data.map((album, i) => {
              return <Album size={6} {...album} key={album.id} />;
            })
          ) : (
            <H2>No albums available</H2>
          )}
        </Page>
      )}
    />
  );
}

export default Media;
