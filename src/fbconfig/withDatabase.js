//TODO: changes to context?
import React from "react";
import { DatabaseContext } from "./DatabaseContext";
import { useGetDatabase } from "./db";

export const withDatabase = Component => {
  const WithDatabase = props => {
    const database = useGetDatabase();

    return (
      <DatabaseContext.Provider value={database}>
        <Component />
      </DatabaseContext.Provider>
    );
  };
  return WithDatabase;
};
