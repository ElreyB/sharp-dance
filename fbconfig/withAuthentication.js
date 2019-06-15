import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { auth } from "./fb";
import { AuthUserContext } from "./AuthUserContext";

export const withAuthentication = Component => {
  const WithAuthentication = props => {
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        authUser ? setAuthUser(authUser) : setAuthUser(null);
      });
    }, []);

    return (
      <AuthUserContext.Provider value={authUser}>
        <Component />
      </AuthUserContext.Provider>
    );
  };
  return WithAuthentication;
};
