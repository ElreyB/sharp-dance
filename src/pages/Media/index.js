import React from "react";
import { FirestoreCollection } from "react-firestore";
import { Page, Banner, Album, H2 } from "../../styledGuide";
import { findPage } from "../../utils";
import useCollection from "../../firestore/useCollection";

function Media({ pages }) {
  const { data } = useCollection("pages");
  /**TODO: need to fix firestore database. Do not have 'page.classSchedule' */
  const page = findPage(data, "3");
  if (!page) {
    return null;
  }
  return (
    <FirestoreCollection
      path="media"
      render={({ data, isLoading }) =>
        !isLoading ? (
          <Page>
            <Banner {...page.headerBanner} />
            {data.map((album, i) => {
              return <Album size={6} {...album} key={album.id} />;
            })}
          </Page>
        ) : (
          <H2>No albums available</H2>
        )
      }
    />
  );
}

export default Media;
