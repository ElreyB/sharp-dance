import React from "react";
import { Markdown, Page, Banner } from "../../styledGuide";
import Loading from "../Loading";
import { PagesContext } from "../../Providers";

export default function Generic({ pageKey }) {
  const { getPage } = React.useContext(PagesContext);
  const page = getPage(pageKey);

  if (!page) {
    return <Loading />;
  }

  const { options = {}, pageName, ...headerBanner } = page;

  return (
    <Page>
      <Banner {...headerBanner} />
      <Markdown>{options.richTextContent}</Markdown>
    </Page>
  );
}
