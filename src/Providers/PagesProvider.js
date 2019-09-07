import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";

const PagesContext = createContext();

const PagesProvider = ({ children }) => {
  const [pages, setPages] = useState([]);

  const { data: pagesCollection } = useCollection("pages");

  useEffect(() => setPages(pagesCollection ? pagesCollection : []), [
    pagesCollection
  ]);

  return (
    <PagesContext.Provider value={pages}>{children}</PagesContext.Provider>
  );
};

export { PagesProvider, PagesContext };
