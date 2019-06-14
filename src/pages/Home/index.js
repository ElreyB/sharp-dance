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
  return (
    <Page>
      <HeaderBanner {...data.home.headerBanner} />
      <Grid align="start">
        <Grid size={3} marginRight="XL">
          <H2>{data.home.quotesTitle}</H2>
          {data.quotes.map((quote, i) => (
            <Quote {...quote} key={i} />
          ))}
        </Grid>
        <Grid size="auto">
          <Markdown>{data.home.content}</Markdown>
          {data.members.length > 0 && (
            <Grid justify="center">
              <H2>Members</H2>
              {data.members.map(member => (
                <Img
                  size="fit"
                  margin="M"
                  align="center"
                  alt={member.organization}
                  src={member.logo}
                  key={member.organization}
                />
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Page>
  );
}
