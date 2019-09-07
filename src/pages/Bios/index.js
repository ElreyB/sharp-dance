import React, { useContext } from "react";
import { Grid, Bio, H2, Banner, Markdown, Page } from "../../styledGuide";
import { findPage } from "../../utils";
import {
  StaffContext,
  PerformersContext,
  ApprenticesContext,
  GuestPerformersContext,
  PagesContext
} from "../../Providers";

const getBio = bio => <Bio {...bio} key={bio.name} />;

export default function Bios({ pages }) {
  const performers = useContext(PerformersContext);
  const apprentices = useContext(ApprenticesContext);
  const guestPerformers = useContext(GuestPerformersContext);
  const staff = useContext(StaffContext);
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
