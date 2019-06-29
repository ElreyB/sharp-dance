import { db } from "./fb";

const STORAGE_KEY = "SHARP_STORAGE";

export function getDB(ref = undefined) {
  const dataBase = db
    .ref(ref)
    .once("value")
    .then(snapshot => {
      const val = snapshot.val();
      setStorage(val);
      return val;
    });
  return dataBase;
}

function setStorage(value) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

export function loadLocal() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
  } catch (e) {
    return {};
  }
}

export function enterNewData(ref, set) {
  const newAppernticeKey = db
    .ref()
    .child(ref)
    .push().key;

  let updates = {};
  updates[ref + "/" + newAppernticeKey] = set;

  return db
    .ref()
    .update(updates)
    .then(() => true)
    .catch(error => console.error("ERROR", error));
}
