import React, { useContext } from "react";
import { Banner, Markdown, Page, DonationButton } from "../../styledGuide";
import Loading from "../Loading";
import { PagesContext } from "../../Providers";

export default function Donations() {
  const { getPage } = useContext(PagesContext);
  const page = getPage("donation");

  if (!page) {
    return <Loading />;
  }

  const { options, pageName, richTextContent, ...headerBanner } = page;

  return (
    <Page>
      <Banner {...headerBanner} />
      <DonationButton />
      <Markdown marginTop="XL">{options.richTextContent}</Markdown>
    </Page>
  );
}
