import React from "react";
import styled from "styled-components/macro";
import { Quote } from "../../styledGuide";
import Loading from "../Loading";
import { PagesContext, PressContext, QuotesContext } from "../../Providers";
import { PressItem } from "./pressItem";
import { random } from "lodash";

import { A, P } from "../../styledGuide";
import Page from "../../layouts/Page";

const Sentence = styled.div`
  font-size: 18px;
`;

const Anchor = styled(A)`
  display: inline-block;
  font-style: italic;
  width: auto;
`;

export default function Press() {
  const { getPage } = React.useContext(PagesContext);
  const press = React.useContext(PressContext);
  const quotes = React.useContext(QuotesContext);
  const page = getPage("press-kit");

  if (!page) {
    return <Loading />;
  }

  const { options, pageName, ...headerBanner } = page;

  return (
    <Page headerBanner={headerBanner}>
      <Sentence>
        <P>
          To receive a press kit please email us at
          <Anchor
            title="Email"
            href={`mailto:${options.email}?subject=Press Kit`}
          >
            {options.email}
          </Anchor>
          and we will send one directly to you.
        </P>
      </Sentence>
      <div justify="center" size={9} margin="L 0">
        <Quote {...quotes[random(0, quotes.length - 1)]} />
      </div>
      {press
        .filter((item) => !!item.description)
        .map(({ id, ...props }) => (
          <PressItem {...props} key={id} />
        ))}
    </Page>
  );
}
