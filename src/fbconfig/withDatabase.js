import React, { useState, useEffect } from "react";
import { DatabaseContext } from "./DatabaseContext";
import { getDB } from "./db";

export const withDatabase = Component => {
  const WithDatabase = props => {
    const [database, setDatabase] = useState(null);
    useEffect(() => {
      const db = getDB();
      setDatabase(db);
    }, []);

    return (
      <DatabaseContext.Provider value={database}>
        <Component />
      </DatabaseContext.Provider>
    );
  };
  return WithDatabase;
};
