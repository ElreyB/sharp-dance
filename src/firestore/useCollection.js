import React, { useEffect, useState } from "react";
import { firestore } from "../fbconfig";

export const collectionIdsAndDocs = doc => ({ id: doc.id, ...doc.data() });

function useCollection(ref) {
  const [data, setData] = useState(null);
  const [error, setError] = React.useState(false);
  if (!ref || typeof ref !== "string") {
    throw new Error(
      `Must pass a collection refference to useCollection or ref must be of type 'string' but got ${ref}`
    );
  }

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
