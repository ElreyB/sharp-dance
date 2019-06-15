import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { SIGN_IN, SIGN_UP } from "../constants/routes";
import { auth } from "./fb";
import { AuthUserContext } from "./AuthUserContext";

export const withAuthorization = condition => Component => {
  const WithAuthorization = props => {
    useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          props.history.push(SIGN_IN);
        }
      });
    }, []);

    return (
      <AuthUserContext.Consumer>
        {authUser => (authUser ? <Component /> : null)}
      </AuthUserContext.Consumer>
    );
  };

  return withRouter(WithAuthorization);
};
