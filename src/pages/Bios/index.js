import React, { useContext } from "react";
import { Grid, Bio, H2, Banner, Markdown, Page } from "../../styledGuide";
import { findPage } from "../../utils";
import { ResourcesContext, DatabaseContext } from "../../Providers";

// Removes director prop since it's not meant to be passed to the component
const getBio = ({ director, ...bio }) => <Bio {...bio} key={bio.name} />;
// We separate director (Diane) from all other staff members to be able to place Diane in a special section
const isDirector = ({ director }) => director;
const isNotDirector = ({ director }) => !director;

export default function Bios({ pages }) {
  const { performers, apprentices, guestPerformers, staff } = useContext(
    ResourcesContext
  ).resourceObj;
  const director = staff ? staff.find(isDirector) : undefined;

  const database = useContext(DatabaseContext);
  console.warn(database);

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
        {director && (
          <Banner
            title={director.title}
            imgSrc={director.images}
            imgCredit={director.imgCredit}
          />
        )}
        <Markdown marginTop="L">{bios.aboutDianeText}</Markdown>
        {staff && staff.filter(isNotDirector).map(getBio)}
      </Grid>
    </Page>
  );
}
