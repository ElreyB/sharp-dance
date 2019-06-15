import { auth } from "./fb";

// Sign Up
export const SignUP = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const SignIn = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const SignOut = () => auth.signOut();

// Password Reset
export const ResetPassword = email => auth.sendPasswordResetEmail(email);

// Password Change
export const UpdatePassword = async password => {
  if (auth.currentUser) {
    await auth.currentUser.updatePassword(password);
  }
  throw Error("No auth.currentUser!");
};
