import React from "react";
import { Page, H2 } from "../../styledGuide";
import { useDB } from "../../fbconfig";
export default function About() {
  console.warn(useDB("staff"));
  return (
    <Page>
      <H2>About</H2>
    </Page>
  );
}
