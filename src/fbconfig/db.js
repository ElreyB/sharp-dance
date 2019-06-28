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
