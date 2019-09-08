import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";

const DatabaseContext = createContext();

const DatabaseProvider = ({ children }) => {
  const [database, setDatabase] = useState([]);

  const { data: databaseCollection } = useCollection("Database");

  useEffect(() => setDatabase(databaseCollection ? databaseCollection : []), [
    databaseCollection
  ]);

  return (
    <DatabaseContext.Provider value={database}>
      {children}
    </DatabaseContext.Provider>
  );
};

export { DatabaseProvider, DatabaseContext };
