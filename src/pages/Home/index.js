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

export default function Home({ pages, organizations, quotes }) {
  const organizationList = Object.values(organizations);
  const quoteList = Object.values(quotes);

  return (
    <Page>
      <Banner {...pages.home.headerBanner} />
      <Grid align="start">
        {quoteList.length > 0 && (
          <Grid size={3} marginRight="XL">
            <H2>{pages.home.quotesTitle}</H2>
            {quoteList.map((quote, i) => (
              <Quote {...quote} key={i} />
            ))}
          </Grid>
        )}
        <Grid size="auto">
          <Markdown>{pages.home.content}</Markdown>
          {organizationList.length > 0 && (
            <Grid justify="center">
              <H2>Members</H2>
              {organizationList.map(org => (
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
