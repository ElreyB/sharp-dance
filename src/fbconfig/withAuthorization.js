import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { LOG_IN } from "../constants/routes";
import { auth } from "./fb";
import { AuthUserContext } from "./AuthUserContext";

export const withAuthorization = condition => Component => {
  const WithAuthorization = props => {
    console.warn(props);
    useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          props.history.push(LOG_IN);
        }
      });
    });

    return (
      <AuthUserContext.Consumer>
        {authUser => {
          return authUser ? <Component /> : null;
        }}
      </AuthUserContext.Consumer>
    );
  };

  return withRouter(WithAuthorization);
};
