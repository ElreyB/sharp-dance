import React, { useContext } from "react";
import { Bio, H2 } from "../../styledGuide";
import Loading from "../Loading";
import { ResourcesContext, PagesContext } from "../../Providers";
import Page from "../../layouts/Page";

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
    <Page headerBanner={headerBanner}>
      <div align="start">
        {performers && (
          <>
            <H2 justify="center" margin="M M XL M">
              Dancers
            </H2>
            {Object.values(performers).map(getBio)}
          </>
        )}
        {apprentices && (
          <>
            <H2 justify="center" margin="M M XL M">
              Apprentices
            </H2>
            {apprentices.map(getBio)}
          </>
        )}
        {guestPerformers && (
          <>
            <H2 justify="center" margin="M M XL M">
              Guest Performers
            </H2>
            {guestPerformers.map(getBio)}
          </>
        )}
        <>
          <H2 justify="center" margin="M M XL M">
            Staff
          </H2>
          {staff && staff.filter(isNotDirector).map(getBio)}
        </>
      </div>
    </Page>
  );
}
