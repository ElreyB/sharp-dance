import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";
import { firestore } from "../fbconfig";
import { collectionIdsAndDocs } from "../utils";
import { asap } from "rxjs/internal/scheduler/asap";

const getCollections = async () => {
  let collectionData = {};
  const collections = [
    "resources",
    "pages",
    "performances",
    "media",
    "organizations",
    "press",
    "quotes"
  ];
  const promises = collections.map(collection => {
    return firestore
      .collection(collection)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          collectionData[collection] = [
            ...(collectionData[collection] || []),
            collectionIdsAndDocs(doc)
          ];
        });
      });
  });

  return await Promise.all(promises).then(() => collectionData);
};

const DatabaseContext = createContext();

const DatabaseProvider = ({ children }) => {
  const [database, setDatabase] = useState({});

  useEffect(() => {
    getCollections().then(value => setDatabase(value));
    return () => getCollections();
  }, []);

  return (
    <DatabaseContext.Provider value={database}>
      {children}
    </DatabaseContext.Provider>
  );
};

export { DatabaseProvider, DatabaseContext };
