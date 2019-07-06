import React, { useState, useEffect } from "react";
import { DatabaseContext } from "./DatabaseContext";
import { getDB } from "./db";

export const withDatabase = Component => {
  const WithDatabase = props => {
    const [database, setDatabase] = useState(null);
    useEffect(() => {
      let db;
      getDB().then(value => (db = value));
      setDatabase(db);
    }, [database]);

    return (
      <DatabaseContext.Provider value={database}>
        <Component />
      </DatabaseContext.Provider>
    );
  };
  return WithDatabase;
};
