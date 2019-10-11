import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";

const ClassScheduleContext = createContext();

const ClassScheduleProvider = ({ children }) => {
  const [classSchedules, setClassSchedules] = useState([]);

  const { data: classScheduleCollection } = useCollection("classSchedule");

  useEffect(
    () =>
      setClassSchedules(classScheduleCollection ? classScheduleCollection : []),
    [classScheduleCollection]
  );

  console.warn("PROVDIER", classSchedules);

  return (
    <ClassScheduleContext.Provider value={classSchedules}>
      {children}
    </ClassScheduleContext.Provider>
  );
};

export { ClassScheduleProvider, ClassScheduleContext };
