import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";

const GuestPerformersContext = createContext();

const GuestPerformersProvider = ({ children }) => {
  const [guestPerformers, setGuestPerformers] = useState([]);

  const { data: guestPerformersCollection } = useCollection("guestPerformers");

  useEffect(
    () =>
      setGuestPerformers(
        guestPerformersCollection ? guestPerformersCollection : []
      ),
    [guestPerformersCollection]
  );

  return (
    <GuestPerformersContext.Provider value={guestPerformers}>
      {children}
    </GuestPerformersContext.Provider>
  );
};

export { GuestPerformersProvider, GuestPerformersContext };
