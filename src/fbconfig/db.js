import { db } from "./fb";

const STORAGE_KEY = "SHARP_STORAGE";
const TIME_THRESHOLD = 5;

export function getDB(ref = undefined) {
  if (shouldReload()) {
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
  return Promise.resolve(loadLocal());
}

function shouldReload() {
  const local = loadLocal();
  const now = new Date().getTime();

  if (!local.lastSave) {
    return true;
  }

  return TIME_THRESHOLD > ((now - local.lastSave) / 1000) * 60;
}

function setStorage(value) {
  const lastSave = new Date().getTime();

  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...value, lastSave })
  );
}

export function loadLocal() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
  } catch (e) {
    return {};
  }
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
    .then(() => true)
    .catch(error => error);
}
