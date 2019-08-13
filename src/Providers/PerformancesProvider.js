import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";

const PerformancesContext = createContext();

const PerformancesProvider = ({ children }) => {
  const [performances, setPerformances] = useState([]);
  const { data: performancesCollection } = useCollection("performances");

  useEffect(() => setPerformances(performancesCollection), [
    performancesCollection
  ]);

  return (
    <PerformancesContext.Provider value={performances}>
      {children}
    </PerformancesContext.Provider>
  );
};

export { PerformancesProvider, PerformancesContext };
