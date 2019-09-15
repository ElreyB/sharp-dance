import React, { useContext } from "react";
import { Grid, Bio, H2, Banner, Markdown, Page } from "../../styledGuide";
import Loading from "../Loading";
import { ResourcesContext, PagesContext } from "../../Providers";

// Removes director prop since it's not meant to be passed to the component
const getBio = ({ director, ...bio }) => <Bio {...bio} key={bio.name} />;
// We separate director (Diane) from all other staff members to be able to place Diane in a special section
const isDirector = ({ director }) => director;
const isNotDirector = ({ director }) => !director;

export default function Bios() {
  const { performers, apprentices, guestPerformers, staff } = useContext(
    ResourcesContext
  ).resourceObj;

  const director = staff ? staff.find(isDirector) : undefined;
  const { getPage } = useContext(PagesContext);
  const page = getPage("bios");

  if (!page) {
    return <Loading />;
  }

  const { headerBanner, options = {} } = page;

  return (
    <Page>
      <Banner {...headerBanner} />
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
        <Markdown marginTop="L">{options.bio}</Markdown>
        {staff && staff.filter(isNotDirector).map(getBio)}
      </Grid>
    </Page>
  );
}
