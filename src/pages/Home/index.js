import React from "react";

import { FullPageVideo, Grid, Markdown, Page, Quote } from "../../styledGuide";
import { PagesContext, QuotesContext } from "../../Providers";
import Loading from "../Loading";

function getRandomQuoteIndex(length) {
  if (length === 0) {
    return [-1, -1];
  }
  if (length === 1) {
    return [0, -1];
  }
  if (length === 2) {
    return [0, 1];
  }
  const first = Math.round(Math.random() * (length - 1));
  const next = (first + 1) % length;

  return [first, next];
}

export default function Home() {
  const { getPage } = React.useContext(PagesContext);
  const quotes = React.useContext(QuotesContext);
  const page = getPage("home");

  if (!page) {
    return <Loading />;
  }

  const { options = {} } = page;
  const [firstQuoteIndex, secondQuoteIndex] = getRandomQuoteIndex(
    quotes.length
  );

  return (
    <Page>
      <FullPageVideo src={options.video} />
      <Markdown marginTop="XL">{options.content}</Markdown>
      <Grid marginTop="XL">
        <Quote {...quotes[firstQuoteIndex]} size={{ desktop: 6, mobile: 12 }} />
        <Quote
          {...quotes[secondQuoteIndex]}
          marginLeft="2XL"
          show="desktop"
          size={6}
        />
      </Grid>
    </Page>
  );
}
