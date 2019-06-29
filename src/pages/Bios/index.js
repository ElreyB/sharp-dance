import React from "react";
import { Grid, Bio, H2, Banner, Markdown, Page } from "../../styledGuide";

const getBio = bio => <Bio {...bio} key={bio.name} />;

export default function Bios({
  pages,
  performers,
  apprentices,
  guestPerformers,
  staff
}) {
  return (
    <Page>
      <Banner {...pages.bios.headerBanner} />
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
        <Banner {...pages.bios.aboutDianeBanner} />
        <Markdown marginTop="L">{pages.bios.aboutDianeText}</Markdown>
        {staff.length > 0 && staff.map(getBio)}
      </Grid>
    </Page>
  );
}
