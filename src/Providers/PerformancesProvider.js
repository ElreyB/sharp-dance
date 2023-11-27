import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";
import { parseSchedule, mostRecentFirst, olderFirst } from "../utils";

const PerformancesContext = createContext();

const PerformancesProvider = ({ children }) => {
  const [performances, setPerformances] = useState([]);

  const { data: performancesCollection } = useCollection("performances");

  useEffect(
    () => setPerformances(performancesCollection ? performancesCollection : []),
    [performancesCollection]
  );
  const parsedPerformances = performances.map(parseSchedule);
  const upcomingPerformances = parsedPerformances
    .filter(({ isFuture }) => isFuture)
    .sort(olderFirst)
    .map((performances) => ({
      ...performances,
      description: performances.description.replaceAll("<p>", ""),
    }))
    .map((performances) => ({
      ...performances,
      description: performances.description.replaceAll("</p>", ""),
    }));

  const pastPerformances = parsedPerformances
    .filter(({ isFuture }) => !isFuture)
    .sort(mostRecentFirst);

  return (
    <PerformancesContext.Provider
      value={{ performances, pastPerformances, upcomingPerformances }}
    >
      {children}
    </PerformancesContext.Provider>
  );
};

export { PerformancesProvider, PerformancesContext };
