import React from "react";
import { FullPageVideo, Page } from "../../styledGuide";
import { PagesContext } from "../../Providers";
import Loading from "../Loading";

export default function Home() {
  const { getPage } = React.useContext(PagesContext);
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
