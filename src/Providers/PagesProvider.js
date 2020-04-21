import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";

const PagesContext = createContext();

const PagesProvider = ({ children }) => {
  const [pages, setPages] = useState([]);

  const { data: pagesCollection } = useCollection("pages");

  useEffect(() => setPages(pagesCollection ? pagesCollection : []), [
    pagesCollection,
  ]);

  const getPage = (page) => pages.filter((p) => p.pageName === page)[0];
  return (
    <PagesContext.Provider value={{ pages, getPage }}>
      {children}
    </PagesContext.Provider>
  );
};

export { PagesProvider, PagesContext };
