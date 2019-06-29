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
  const performerList = Object.values(performers);
  const apprenticeList = Object.values(apprentices);
  const guestPerformerList = Object.values(guestPerformers);
  const staffList = Object.values(staff);

  return (
    <Page>
      <Banner {...pages.bios.headerBanner} />
      <Grid align="start">
        {performerList.length > 0 && Object.values(performerList).map(getBio)}
        {apprenticeList.length > 0 && (
          <>
            <H2>Apprentices</H2>
            {apprenticeList.map(getBio)}
          </>
        )}
        {guestPerformerList.length > 0 && (
          <>
            <H2>Guest Performers</H2>
            {guestPerformerList.map(getBio)}
          </>
        )}
        <Banner {...pages.bios.aboutDianeBanner} />
        <Markdown marginTop="L">{pages.bios.aboutDianeText}</Markdown>
        {staffList.length > 0 && staffList.map(getBio)}
      </Grid>
    </Page>
  );
}
