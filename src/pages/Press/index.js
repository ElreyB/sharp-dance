import React from "react";
import styled from "styled-components/macro";
import { Quote } from "../../styledGuide";
import Loading from "../Loading";
import { PagesContext, QuotesContext } from "../../Providers";
// import { PressItem } from "./pressItem";
import { random } from "lodash";

import { A, P } from "../../styledGuide";
import Page from "../../layouts/Page";

const Anchor = styled(A)`
  display: inline-block;
  font-style: italic;
  width: auto;
  color: black;
`;

const RequestPresKit = styled(P)`
  font-size: 18px;
  margin-bottom: ${({ theme: { spacing } }) => spacing.L};
`;

export default function Press() {
  const { getPage } = React.useContext(PagesContext);
  // const press = React.useContext(PressContext);
  const quotes = React.useContext(QuotesContext);
  const page = getPage("press-kit");

  if (!page) {
    return <Loading />;
  }

  const { options, pageName, ...headerBanner } = page;

  return (
    <Page headerBanner={headerBanner}>
      <RequestPresKit>
        Click{" "}
        <Anchor title="Email" href={`${process.env.PUBLIC_URL}/press-kit.pdf`}>
          here
        </Anchor>{" "}
        for
        <Anchor title="Email" href={`${process.env.PUBLIC_URL}/press-kit.pdf`}>
          Press Kit.
        </Anchor>{" "}
      </RequestPresKit>
      <Quote {...quotes[random(0, quotes.length - 1)]} />
      {/* <iframe
        title="press kit"
        src={`${process.env.PUBLIC_URL}/press-kit.pdf`}
        width="100%"
        height="1000px"
      /> */}

      {/* {press
        .filter((item) => !!item.description)
        .map(({ id, ...props }) => (
          <PressItem {...props} key={id} />
        ))} */}
    </Page>
  );
}
