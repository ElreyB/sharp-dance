import React from "react";
import { Album, Banner } from "../../styledGuide";
import { MEDIA } from "../../constants";
import styled from "styled-components/macro";

import { A } from "../../styledGuide";

import Page from "../../layouts/Page";

const BackLink = styled(A)`
  margin-top: ${({ theme }) => theme.spacing.M};
`;

export default function SinglePerformance({ performance }) {
  return (
    <Page>
      <BackLink to={MEDIA}>⮐ Back</BackLink>
      <Banner title={performance.title} />
      <Album {...performance} title="" />
    </Page>
  );
}
