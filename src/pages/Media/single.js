import React from "react";
import { A, Album, Page, Banner } from "../../styledGuide";
import { MEDIA } from "../../constants";

export default function SinglePerformance({ performance }) {
  return (
    <Page>
      <A marginTop="M" to={MEDIA}>
        ⮐ Back
      </A>
      <Banner title={performance.title} />
      <Album {...performance} title="" />
    </Page>
  );
}
