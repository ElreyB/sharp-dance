import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";

const ResourcesContext = createContext();

const ResourcesProvider = ({ children }) => {
  const [resources, setResources] = useState([]);

  const { data: resourcesCollection } = useCollection("resources");

  useEffect(
    () => setResources(resourcesCollection ? resourcesCollection : []),
    [resourcesCollection]
  );

  return (
    <ResourcesContext.Provider value={resources}>
      {children}
    </ResourcesContext.Provider>
  );
};

export { ResourcesProvider, ResourcesContext };
