import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { LOG_IN } from "../constants/routes";
import { auth } from "./fb";
import { AuthUserContext } from "./AuthUserContext";

export const withAuthorization = Component => {
  const WithAuthorization = props => {
    useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        if (!authUser) {
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
