import { useState, useEffect } from "react";
import { db } from "./fb";

// User API
export const AddUser = (id: string, username: string, email: string) =>
  db.ref(`users/${id}`).set({
    email,
    username
  });

export const onceGetUsers = () => db.ref("staff").once("value");
export function useDB(ref = undefined) {
  const [dataBase, setDataBase] = useState();
  useEffect(() => {
    db.ref(ref)
      .once("value")
      .then(snapshot => {
        setDataBase(snapshot.value);
      });
    return dataBase;
  }, [ref, dataBase]);
}
