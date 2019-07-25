import React from "react";
import {
  Grid,
  H2,
  Banner,
  Markdown,
  Img,
  Page,
  Quote
} from "../../styledGuide";
import { findPage } from "../../utils";

export default function About({ pages, organizations, quotes }) {
  const about = findPage(pages, "about");

  if (!about) {
    return null;
  }

  return (
    <Page>
      <Banner {...about.headerBanner} />
      <Grid align="start">
        {quotes.length > 0 && (
          <Grid size={3} marginRight="XL">
            <H2>{about.quotesTitle}</H2>
            {quotes.map((quote, i) => (
              <Quote {...quote} key={i} />
            ))}
          </Grid>
        )}
        <Grid size="auto">
          <Markdown>{about.content}</Markdown>
          {organizations.length > 0 && (
            <Grid justify="center">
              <H2>Members</H2>
              {organizations.map(org => (
                <Img
                  size="fit"
                  margin="M"
                  align="center"
                  alt={org.organization}
                  src={org.logo}
                  key={org.organization}
                />
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Page>
  );
}
