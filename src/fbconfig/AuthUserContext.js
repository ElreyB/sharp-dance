import React, { useState, useEffect } from "react";
import { auth } from "./fb";

const AuthUserContext = React.createContext();

const AuthUserProvider = props => {
  const [authUser, setAuthUser] = useState(undefined);
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      authUser ? setAuthUser(authUser) : setAuthUser(undefined);
    });
  }, [authUser]);
  return (
    <AuthUserContext.Provider
      value={{
        authUser
      }}
    >
      {props.children}
    </AuthUserContext.Provider>
  );
};
const AuthUserConsumer = AuthUserContext.Consumer;
export { AuthUserProvider, AuthUserConsumer, AuthUserContext };
