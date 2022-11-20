import React from "react";
// import styled from "styled-components/macro";
import { P } from "../../styledGuide";
import { PagesContext } from "../../Providers";
import Loading from "../Loading";
import Page from "../../layouts/Page";

// const BELOW_TEXT = [
//   "Opening Night",
//   "Bring your child to our Saturday 5 PM performance and included in your ticket price: get a tour of the theater, meet the dancers and make a hippie accessory to go with your hippie costume! Kids tour starts at 4:00 PM.",
//   "Question & Answer with the Company",
// ];

// const StyledLabel = styled((props) => (
//   <Label {...props} size="fit" margin="0 S 0 0" />
// ))`
//   color: ${({ theme }) => theme.colors.blue};
// `;

// const Notes = styled(P)`
//   color: ${({ theme }) => theme.colors.blue};
// `;

// const Sentence = styled((props) => <P {...props} size="auto" />)``;

export default function Intensive() {
  const { getPage } = React.useContext(PagesContext);
  const page = getPage("intensive");

  if (!page) {
    return <Loading />;
  }

  const {
    option0,
    option1,
    option2,
    option3,
    option4,
    options = {},
    pageName,
    showPage,
    ...headerBanner
  } = page;

  const {
    // address,
    // dancers,
    description,
    // director,
    // location,
    // manager,
    // notes,
    // showtimes,
    // tickets,
  } = options;
  if (!showPage) return null;
  return (
    <Page headerBanner={headerBanner}>
      <div>
        <P>{description}</P>
        {/* <Notes justify="center">{notes}</Notes>
        <StyledLabel>Tickets:</StyledLabel>
        <Sentence>{tickets}</Sentence> */}
      </div>
      {/* <div>
        <StyledLabel>Location:</StyledLabel>
        <Sentence>{location}</Sentence>
      </div>
      <div>
        <StyledLabel>Address: </StyledLabel>
        <Sentence>{address}</Sentence>
      </div>
      <div>
        <StyledLabel>Dancers: </StyledLabel>
        <Sentence>{dancers}</Sentence>
      </div>
      <div>
        <StyledLabel>Manager: </StyledLabel>
        <Sentence>{manager}</Sentence>
      </div>
      <div>
        <StyledLabel>Artistic Director: </StyledLabel>
        <Sentence>{director}</Sentence>
      </div> */}
    </Page>
  );
}
