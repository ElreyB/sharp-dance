import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";

const QuotesContext = createContext();

const QuotesProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([]);

  const { data: quotesCollection } = useCollection("quotes");

  useEffect(() => setQuotes(quotesCollection ? quotesCollection : []), [
    quotesCollection
  ]);

  return (
    <QuotesContext.Provider value={quotes}>{children}</QuotesContext.Provider>
  );
};

export { QuotesProvider, QuotesContext };
