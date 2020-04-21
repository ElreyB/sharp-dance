import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";

const PressContext = createContext();

const PressProvider = ({ children }) => {
  const [press, setPress] = useState([]);

  const { data: pressCollection } = useCollection("press");

  useEffect(() => setPress(pressCollection ? pressCollection : []), [
    pressCollection,
  ]);

  return (
    <PressContext.Provider value={press}>{children}</PressContext.Provider>
  );
};

export { PressProvider, PressContext };
