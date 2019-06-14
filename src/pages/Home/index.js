import * as React from "react";
import { Grid, Page, Quote, HeaderBanner, Markdown } from "../../styledGuide";
import data from "./data.json";

export default function Home() {
  return (
    <Page>
      <HeaderBanner
        title={data.home.title}
        subtitle={data.home.subtitle}
        src={data.home.headerImage}
      />
      <Grid>
        <Grid size={2}>
          {data.quotes.map((quote, i) => (
            <Quote {...quote} key={i} />
          ))}
        </Grid>
        <Markdown size={10}>{data.home.content}</Markdown>
      </Grid>
    </Page>
  );
}
