import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";

const createResourcesObj = (resources) =>
  resources.reduce(
    (obj, resource, i, arr) => ({
      ...obj,
      [resource.role]: [...(obj[resource.role] || []), resource],
    }),
    {}
  );

const ResourcesContext = createContext();

const ResourcesProvider = ({ children }) => {
  const [resources, setResources] = useState([]);

  const { data: resourcesCollection } = useCollection("resources");

  useEffect(
    () => setResources(resourcesCollection ? resourcesCollection : []),
    [resourcesCollection]
  );

  return (
    <ResourcesContext.Provider
      value={{ resources, resourceObj: createResourcesObj(resources) }}
    >
      {children}
    </ResourcesContext.Provider>
  );
};

export { ResourcesProvider, ResourcesContext };
