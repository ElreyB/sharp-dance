import React, { useContext } from "react";
import { Grid, Bio, H2, Banner, Page } from "../../styledGuide";
import Loading from "../Loading";
import { ResourcesContext, PagesContext } from "../../Providers";

// Removes director prop since it's not meant to be passed to the component
const getBio = ({ director, ...bio }) => <Bio {...bio} key={bio.name} />;
// We separate director (Diane) from all other staff members to be able to place Diane in a special section
const isNotDirector = ({ director }) => !director;

export default function Bios() {
  const { performers, apprentices, guestPerformers, staff } = useContext(
    ResourcesContext
  ).resourceObj;

  const { getPage } = useContext(PagesContext);
  const page = getPage("bios");

  if (!page) {
    return <Loading />;
  }
  const { options, pageName, ...headerBanner } = page;

  return (
    <Page>
      <Banner {...headerBanner} />
      <Grid align="start">
        {performers && (
          <>
            <H2 justify="center">Dancers</H2>
            {Object.values(performers).map(getBio)}
          </>
        )}
        {apprentices && (
          <>
            <H2 justify="center">Apprentices</H2>
            {apprentices.map(getBio)}
          </>
        )}
        {guestPerformers && (
          <>
            <H2 justify="center">Guest Performers</H2>
            {guestPerformers.map(getBio)}
          </>
        )}
        <>
          <H2 justify="center">Staff</H2>
          {staff && staff.filter(isNotDirector).map(getBio)}
        </>
      </Grid>
    </Page>
  );
}
