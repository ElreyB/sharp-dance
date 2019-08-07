import React, { useEffect, useState, useCallback } from "react";
import { withFirestore } from "react-firestore";
import { Page, Banner, Album, H2 } from "../../styledGuide";
import { findPage } from "../../utils";

export const collectionIdsAndDocs = doc => ({ id: doc.id, ...doc.data() });

function Media({ pages, firestore }) {
  const page = findPage(pages, "media");
  const [media, setMedia] = useState(null);

  const subscribeToMedia = useCallback(
    () =>
      firestore.collection("media").onSnapshot(snapshot => {
        const mediaDocs = snapshot.docs.map(collectionIdsAndDocs);
        setMedia(mediaDocs);
      }),
    [firestore]
  );

  useEffect(() => subscribeToMedia(), [subscribeToMedia]);

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
