import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";

const createResourcesObj = resources => {
  const sortedResource = {
    staff: [],
    apprentices: [],
    guestPerformers: [],
    performers: []
  };
  return resources.reduce((obj, resource, i, arr) => {
    switch (resource.role) {
      case "staff":
        sortedResource.staff.push(resource);
        break;
      case "apprentices":
        sortedResource.apprentices.push(resource);
        break;
      case "performers":
        sortedResource.performers.push(resource);
        break;
      case "guestPerformers":
        sortedResource.guestPerformers.push(resource);
        break;
      default:
        break;
    }
    obj = { ...obj, ...sortedResource };
    return obj;
  }, {});
};

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
