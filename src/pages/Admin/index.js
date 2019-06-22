import React from "react";
import { Page, H1 } from "../../styledGuide";
import { withAuthorization } from "../../fbconfig";

function AdminPage() {
  return (
    <Page>
      <H1>Admin Page</H1>
    </Page>
  );
}

export default withAuthorization(AdminPage);
