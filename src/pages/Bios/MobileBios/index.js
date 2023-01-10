import React, { useContext } from "react";
import styled from "styled-components/macro";
import { ResourcesContext } from "../../../Providers";
// import Page from "../../layouts/Page";
import { Bio } from "../../../styledGuide";

// Removes director prop since it's not meant to be passed to the component
const getBio = ({ director, ...bio }) => <Bio {...bio} key={bio.name} />;
// We separate director (Diane) from all other staff members to be able to place Diane in a special section
const isNotDirector = ({ director }) => !director;

const H2 = styled.h2`
  text-align: center;
  ${({ theme }) =>
    `margin:${theme.spacing.M} ${theme.spacing.M} ${theme.spacing.XL} ${theme.spacing.M}`};
  color: ${({ theme }) => theme.colors.red};
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.media.desktop`
      // display: none;
    `}
`;

export default function MobileBios() {
  const { performers, apprentices, guestPerformers, staff, board, exboard } =
    useContext(ResourcesContext).resourceObj;

  // if (!page) {
  //   return <Loading />;
  // }
  return (
    <Wrapper>
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
        <H2>Staff / Collaborators</H2>
        {staff && staff.filter(isNotDirector).map(getBio)}
      </>

      {exboard && (
        <>
          <H2>Executive Board Members</H2>
          {exboard.map(getBio)}
        </>
      )}

      {board && (
        <>
          <H2>Board Members</H2>
          {board.map(getBio)}
        </>
      )}
    </Wrapper>
  );
}
