import React, { useEffect, useState } from "react";
import { firestore } from "../fbconfig";

export const collectionIdsAndDocs = doc => ({ id: doc.id, ...doc.data() });

function useGetData(ref = "sharp-dance") {
  const [media, setMedia] = useState(null);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    const subscribeToMedia = firestore.collection(ref).onSnapshot(
      snapshot => {
        const mediaDocs = snapshot.docs.map(collectionIdsAndDocs);
        setMedia(mediaDocs);
      },
      err => {
        setError(err);
      }
    );
    return () => subscribeToMedia();
  }, [media, error, ref]);

  return { media, error };
}

export default useGetData;
