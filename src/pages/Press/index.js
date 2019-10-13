import React from "react";
import { Page, Banner, Quote, Grid } from "../../styledGuide";
import Loading from "../Loading";
import { PagesContext, PressContext, QuotesContext } from "../../Providers";
import { PressItem } from "./pressItem";
import { random } from "lodash";

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
    <Page>
      <Banner {...headerBanner} />
      <Grid justify="center" size={9} margin="XL 0">
        <Quote {...quotes[[random(0, quotes.length - 1)]]} />
      </Grid>
      {press
        .filter(item => !!item.description)
        .map(({ id, ...props }) => (
          <PressItem {...props} key={id} />
        ))}
    </Page>
  );
}
