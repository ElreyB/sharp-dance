import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";

const PerformersContext = createContext();

const PerformersProvider = ({ children }) => {
  const [performers, setPerformers] = useState([]);

  const { data: performersCollection } = useCollection("performers");

  useEffect(() => setPerformers(performersCollection), [performersCollection]);

  return (
    <PerformersContext.Provider value={performers}>
      {children}
    </PerformersContext.Provider>
  );
};

export { PerformersProvider, PerformersContext };
