import React from "react";
import styled from "styled-components/macro";
import { Img, P } from "../../styledGuide";

const Wrapper = styled.div`
  border: 0px solid transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  flex-grow: 1;
  width: 100%;
`;

const StyledP = styled(P)`
  align-self: center;
`;

export default function NoUpcomingEvents() {
  return (
    <Wrapper>
      <Img
        size={6}
        margin="M"
        align="center"
        alt="puzzle"
        src="https://firebasestorage.googleapis.com/v0/b/sharp-dance.appspot.com/o/site%2Fmedia%2Fpuzzle%2F6.jpg?alt=media&token=e4ebd608-54c1-4aae-a0d3-5db4dd60511b"
      />
      <StyledP>Currently no performances.</StyledP>
    </Wrapper>
  );
}
