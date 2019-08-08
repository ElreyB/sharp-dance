import React, { useEffect, useState } from "react";
import { firestore } from "../fbconfig";

export const collectionIdsAndDocs = doc => ({ id: doc.id, ...doc.data() });

function useCollection(ref = "sharp-dance") {
  const [data, setData] = useState(null);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    const subscribeToData = firestore.collection(ref).onSnapshot(
      snapshot => {
        const dataDocs = snapshot.docs.map(collectionIdsAndDocs);
        setData(dataDocs);
      },
      err => {
        setError(err);
      }
    );
    return () => subscribeToData();
  }, [ref]);

  return { data, error };
}

export default useCollection;
