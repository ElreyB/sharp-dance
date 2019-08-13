import React from "react";
import { withRouter } from "react-router-dom";

export const ScrollToTop = withRouter(
  ({ children, location: { pathname } }) => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return children || null;
  }
);
