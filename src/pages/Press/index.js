import React from "react";
import { Page, Banner } from "../../styledGuide";
import Loading from "../Loading";
import { PagesContext, PressContext } from "../../Providers";
import { PressItem } from "./pressItem";

export default function Press() {
  const { getPage } = React.useContext(PagesContext);
  const press = React.useContext(PressContext);
  const page = getPage("press-kit");

  if (!page) {
    return <Loading />;
  }

  const { options, pageName, ...headerBanner } = page;

  return (
    <Page>
      <Banner {...headerBanner} />
      {press.map(({ id, ...props }) => (
        <PressItem {...props} key={id} />
      ))}
    </Page>
  );
}
