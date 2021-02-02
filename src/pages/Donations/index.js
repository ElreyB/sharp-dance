import React, { useContext } from "react";
import { Markdown, DonationButton } from "../../styledGuide";
import Loading from "../Loading";
import { PagesContext } from "../../Providers";
import Page from "../../layouts/Page";

export default function Donations() {
  const { getPage } = useContext(PagesContext);
  const page = getPage("donation");

  if (!page) {
    return <Loading />;
  }

  const { options, pageName, richTextContent, ...headerBanner } = page;

  return (
    <Page headerBanner={headerBanner}>
      <DonationButton />
      <Markdown marginTop="XL">{options.richTextContent}</Markdown>
    </Page>
  );
}
