import React, { useContext, useState, useEffect } from "react";
import Loading from "../../Loading";
import { ResourcesContext, PagesContext } from "../../../Providers";
import Page from "../../../layouts/Page";
import { Bio, Button } from "../../../styledGuide";
import styled, { css } from "styled-components/macro";

const navLabels = ["Dancers", "Apprentices", "Guest Performers", "Staff"];

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
const Wrapper = styled.div(
  ({ theme }) => css`
    width: 800px;
    height: 800px;
    position: relative;
    border-radius: 100%;
    border: 1px solid teal;
  `
);

const NavResoucesDiv = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.primaryColors.white};
    position: absolute;
    border-radius: 100%;
    width: 200px;
    height: 200px;
    left: 50%;
    top: 50%;
    margin-left: -20px;
    margin-top: -20px;
  `
);

const NavButton = styled(Button)(
  ({ theme }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: inherit;
  `
);

export default function DesktopBios() {
  const [data, setData] = useState({ role: "", resouces: {} });
  const { performers, apprentices, guestPerformers, staff } = useContext(
    ResourcesContext
  ).resourceObj;

  useEffect(() => {
    switch (data.role) {
      case "performers":
        setData({ ...data, resouces: Object.values(performers).map(getBio) });
        break;
      default:
    }
  }, [data, performers]);

  const { getPage } = useContext(PagesContext);
  const page = getPage("bios");

  if (!page) {
    return <Loading />;
  }
  const { options, pageName, ...headerBanner } = page;
  console.log({ data });
  return (
    <Page headerBanner={headerBanner}>
      <Wrapper>
        <NavResoucesDiv>
          {navLabels.map((label) => (
            <NavButton>
              <span>{label}</span>
            </NavButton>
          ))}
        </NavResoucesDiv>
      </Wrapper>
      {/* <div align="start"> */}
      {/* {performers && (
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
      </> */}
      {/* </div> */}
    </Page>
  );
}
