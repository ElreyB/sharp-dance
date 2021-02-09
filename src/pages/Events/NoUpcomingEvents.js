import React from "react";
import styled from "styled-components/macro";
import { Image, P } from "../../styledGuide";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1050px;
  width: 100%;
`;

const StyledP = styled(P)`
  align-self: center;
`;

const StyledImage = styled(Image)`
  text-align: center;
`;

export default function NoUpcomingEvents() {
  return (
    <Wrapper>
      {/* <div> */}
      <StyledImage
        imageSize="50%"
        alt="puzzle"
        src="https://firebasestorage.googleapis.com/v0/b/sharp-dance.appspot.com/o/site%2Fmedia%2Fpuzzle%2F6.jpg?alt=media&token=e4ebd608-54c1-4aae-a0d3-5db4dd60511b"
      />
      {/* </div> */}
      <StyledP>Currently no performances.</StyledP>
    </Wrapper>
  );
}
