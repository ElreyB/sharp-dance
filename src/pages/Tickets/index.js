import React from "react";
import styled from "styled-components/macro";
import { Grid, Banner, Label, Page, P } from "../../styledGuide";
import { PagesContext } from "../../Providers";
import Loading from "../Loading";
import { PaypayForm } from "./PaypalForm";

const BELOW_TEXT = [
  "Opening Night",
  "Bring your child to our Saturday 5 PM performance and included in your ticket price: get a tour of the theater, meet the dancers and make a hippie accessory to go with your hippie costume! Kids tour starts at 4:00 PM.",
  "Question & Answer with the Company",
];

const StyledLabel = styled((props) => (
  <Label {...props} size="fit" margin="0 S 0 0" />
))`
  color: ${({ theme }) => theme.colors.blue};
`;

const Notes = styled(P)`
  color: ${({ theme }) => theme.colors.blue};
`;

const Sentence = styled((props) => <P {...props} size="auto" />)``;

export default function Home() {
  const { getPage } = React.useContext(PagesContext);
  const page = getPage("tickets");

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
    address,
    dancers,
    description,
    director,
    location,
    manager,
    notes,
    showtimes,
    tickets,
  } = options;
  console.log(showPage);
  if (!showPage) return null;
  return (
    <Page>
      <Banner {...headerBanner} />
      <Grid>
        <P>{description}</P>
        <Notes justify="center">{notes}</Notes>
        <StyledLabel>Tickets:</StyledLabel>
        <Sentence>{tickets}</Sentence>
      </Grid>
      <Grid>
        <StyledLabel>Showtimes:</StyledLabel>
        <Sentence>{showtimes.map((time) => time).join(" - ")}</Sentence>
      </Grid>
      {showtimes.map((time, i) => (
        <PaypayForm textAbove={time} textBelow={BELOW_TEXT[i]} key={i} />
      ))}
      <Grid>
        <StyledLabel>Location:</StyledLabel>
        <Sentence>{location}</Sentence>
      </Grid>
      <Grid>
        <StyledLabel>Address: </StyledLabel>
        <Sentence>{address}</Sentence>
      </Grid>
      <Grid>
        <StyledLabel>Dancers: </StyledLabel>
        <Sentence>{dancers}</Sentence>
      </Grid>
      <Grid>
        <StyledLabel>Manager: </StyledLabel>
        <Sentence>{manager}</Sentence>
      </Grid>
      <Grid>
        <StyledLabel>Artistic Director: </StyledLabel>
        <Sentence>{director}</Sentence>
      </Grid>
    </Page>
  );
}
