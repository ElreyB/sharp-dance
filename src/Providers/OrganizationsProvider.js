import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";

const OrganizationsContext = createContext();

const OrganizationsProvider = ({ children }) => {
  const [organizations, setOrganizations] = useState([]);

  const { data: organizationCollection } = useCollection("organizations");

  useEffect(
    () =>
      setOrganizations(organizationCollection ? organizationCollection : []),
    [organizationCollection]
  );

  return (
    <OrganizationsContext.Provider value={organizations}>
      {children}
    </OrganizationsContext.Provider>
  );
};

export { OrganizationsProvider, OrganizationsContext };
