import { useState, useEffect } from "react";
import { db } from "./fb";

export function useGetDatabase(ref = undefined) {
  const [data, setData] = useState({});

  useEffect(() => {
    const database = db.ref(ref).on("value", snapshot => {
      const val = snapshot.val();
      setData(val);
    });
    // db.ref(ref)
    //   .once("value")
    //   .then(function(snapshot) {
    //     const val = snapshot.val();
    //     setData(val);
    //   });
    return () => db.ref(ref).off("value", database);
  }, [ref]);
  return data;
}

export function newData(ref, data) {
  const newDataKey = db
    .ref()
    .child(ref)
    .push().key;

  const dataWithKey = {
    ...data,
    uuid: newDataKey
  };

  let updates = {};
  updates[ref + "/" + newDataKey] = dataWithKey;
  return db
    .ref()
    .update(updates)
    .then(() => true)
    .catch(error => console.error("ERROR", error));
}

export function editData(ref, key, data) {
  return db
    .ref(ref)
    .child(key)
    .update(data)
    .then(() => true)
    .catch(error => error);
}

export function deleteData(ref, key) {
  return db
    .ref(ref)
    .child(key)
    .remove()
    .then(() => console.log("Document successfully deleted!"))
    .catch(error => error);
}
