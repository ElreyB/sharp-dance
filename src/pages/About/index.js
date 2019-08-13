import React, { useContext } from "react";
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
import { QuotesContext, OrganizationsContext } from "../../Providers";

export default function About({ pages }) {
  const quotes = useContext(QuotesContext);
  const organizations = useContext(OrganizationsContext);
  const about = findPage(pages, "about");

  if (!about) {
    return null;
  }

  return (
    <Page>
      <Banner {...about.headerBanner} />
      <Grid align="start">
        {quotes && (
          <Grid size={3} marginRight="XL">
            <H2>{about.quotesTitle}</H2>
            {quotes.map((quote, i) => (
              <Quote {...quote} key={i} />
            ))}
          </Grid>
        )}
        <Grid size="auto">
          <Markdown>{about.content}</Markdown>
          {organizations && (
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
