import React from "react";
import {
  Grid,
  H2,
  HeaderBanner,
  Markdown,
  Img,
  Page,
  Quote
} from "../../styledGuide";
import data from "../../data.json";

export default function Home() {
  const { pages, organizations, quotes } = data;

  return (
    <Page>
      <HeaderBanner {...pages.home.headerBanner} />
      <Grid align="start">
        {quotes.length > 0 && (
          <Grid size={3} marginRight="XL">
            <H2>{pages.home.quotesTitle}</H2>
            {quotes.map((quote, i) => (
              <Quote {...quote} key={i} />
            ))}
          </Grid>
        )}
        <Grid size="auto">
          <Markdown>{pages.home.content}</Markdown>
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
