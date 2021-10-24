import React, { useContext } from "react";
import styled from "styled-components";
import Page from "../../layouts/Page";
import { PagesContext, ResourcesContext } from "../../Providers";
import { Bio } from "../../styledGuide";
import Loading from "../Loading";

// Removes director prop since it's not meant to be passed to the component
const getBio = ({ director, ...bio }) => <Bio {...bio} key={bio.name} />;
// We separate director (Diane) from all other staff members to be able to place Diane in a special section
const isNotDirector = ({ director }) => !director;

const H2 = styled.h2`
  text-align: center;
  ${({ theme }) =>
    `margin:${theme.spacing.M} ${theme.spacing.M} ${theme.spacing.XL} ${theme.spacing.M}`};
  color: ${({ theme }) => theme.colors.black};
`;

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
      {/* <div align="start"> */}
      {performers && (
        <>
          <H2>Dancers</H2>
          {Object.values(performers).map(getBio)}
        </>
      )}
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
      <>
        <H2>Staff</H2>
        {staff && staff.filter(isNotDirector).map(getBio)}
      </>
      {/* </div> */}
    </Page>
  );
}
