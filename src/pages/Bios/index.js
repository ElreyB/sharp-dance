import React from "react";
import { Grid, Bio, H2, HeaderBanner, Markdown, Page } from "../../styledGuide";
import data from "../../data.json";

export default function Home() {
  const { pages, performers, apprentices, guestPerformers, staff } = data;
  const getBio = (bio, i) => <Bio {...bio} key={bio.name} headerColor={i} />;

  return (
    <Page>
      <HeaderBanner {...pages.bios.headerBanner} />
      <Grid align="start">
        {performers.length > 0 && performers.map(getBio)}
        {apprentices.length > 0 && (
          <>
            <H2>Apprentices</H2>
            {apprentices.map(getBio)}
          </>
        )}
        {guestPerformers.length > 0 && (
          <>
            <H2>Guest Performers</H2>
            {guestPerformers.map(getBio)}
          </>
        )}
        <HeaderBanner {...pages.bios.aboutDianeBanner} />
        <Markdown>{pages.bios.aboutDianeText}</Markdown>
        {staff.length > 0 && staff.map(getBio)}
      </Grid>
    </Page>
  );
}