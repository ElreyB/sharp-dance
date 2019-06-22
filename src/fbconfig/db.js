import { db } from "./fb";

// User API
export const AddUser = (id: string, username: string, email: string) =>
  db.ref(`users/${id}`).set({
    email,
    username
  });

export const onceGetUsers = () => db.ref("users").once("value");
