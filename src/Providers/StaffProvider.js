import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";

const StaffContext = createContext();

const StaffProvider = ({ children }) => {
  const [staff, setStaff] = useState([]);

  const { data: staffCollection } = useCollection("staff");

  useEffect(() => setStaff(staffCollection ? staffCollection : []), [
    staffCollection
  ]);

  return (
    <StaffContext.Provider value={staff}>{children}</StaffContext.Provider>
  );
};

export { StaffProvider, StaffContext };
