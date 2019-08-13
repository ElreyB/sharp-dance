import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";

const ApprenticesContext = createContext();

const ApprenticesProvider = ({ children }) => {
  const [apprentices, setApprentices] = useState([]);

  const { data: apprenticesCollection } = useCollection("apprentices");

  useEffect(() => setApprentices(apprenticesCollection), [
    apprenticesCollection
  ]);

  return (
    <ApprenticesContext.Provider value={apprentices}>
      {children}
    </ApprenticesContext.Provider>
  );
};

export { ApprenticesProvider, ApprenticesContext };
