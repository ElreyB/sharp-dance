import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";
// import { firestore } from "../fbconfig";

const PerformancesContext = createContext();

const PerformancesProvider = ({ children }) => {
  const performances = usePerformancesProvider();
  return (
    <PerformancesContext.Provider value={performances}>
      {children}
    </PerformancesContext.Provider>
  );
};
const usePerformancesProvider = () => {
  const [performances, setPerformances] = useState([]);
  const { data: performancesCollection } = useCollection("performances");

  useEffect(
    () => setPerformances(performancesCollection ? performancesCollection : []),
    [performancesCollection]
  );
  return {
    performances
  };
};

export { PerformancesProvider, PerformancesContext };
