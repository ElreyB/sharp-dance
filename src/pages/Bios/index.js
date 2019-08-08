import React from "react";
import { Grid, Bio, H2, Banner, Markdown, Page } from "../../styledGuide";
import { findPage } from "../../utils";
import useCollection from "../../firestore/useCollection";

const getBio = bio => <Bio {...bio} key={bio.name} />;

export default function Bios({ pages }) {
  const { data: performers } = useCollection("performers");
  const { data: apprentices } = useCollection("apprentices");
  const { data: guestPerformers } = useCollection("guestPerformers");
  const { data: staff } = useCollection("staff");
  const bios = findPage(pages, "bios");

  if (!bios) {
    return null;
  }

  return (
    <Page>
      <Banner {...bios.headerBanner} />
      <Grid align="start">
        {performers && Object.values(performers).map(getBio)}
        {apprentices && (
          <>
            <H2>Apprentices</H2>
            {apprentices.map(getBio)}
          </>
        )}
        {guestPerformers && (
          <>
            <H2>Guest Performers</H2>
            {guestPerformers.map(getBio)}
          </>
        )}
        <Banner {...bios.aboutDianeBanner} />
        <Markdown marginTop="L">{bios.aboutDianeText}</Markdown>
        {staff && staff.map(getBio)}
      </Grid>
    </Page>
  );
}
