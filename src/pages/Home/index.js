import React from "react";
import { FullPageVideo, Grid, Markdown, Page, Quote } from "../../styledGuide";
import { PagesContext, QuotesContext } from "../../Providers";
import Loading from "../Loading";

export default function Home() {
  const { getPage } = React.useContext(PagesContext);
  const quotes = React.useContext(QuotesContext);
  const page = getPage("home");

  if (!page) {
    return <Loading />;
  }

  const { options = {} } = page;

  return (
    <Page>
      <FullPageVideo src={options.video} />
    </Page>
  );
}
