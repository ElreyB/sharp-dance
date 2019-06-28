import { db } from "./fb";

export function getDB(ref = undefined) {
  const dataBase = db
    .ref(ref)
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    });
  return dataBase;
}
