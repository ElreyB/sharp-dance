import React from "react";
import styled from "styled-components/macro";
import { Nav } from "../Nav";
import { H1 } from "../Headings";
import {
  ABOUT,
  BIOS,
  CLASSES,
  EVENTS,
  LANDING,
  MEDIA,
  PRESS,
  PAST_EVENTS
} from "../../constants";
import { Grid } from "gymnast";

const StyledH1 = styled(H1)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
`;
const StyledGrid = styled(Grid)`
  position: fixed;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 1;
`;

export const Header = () => {
  return (
    <StyledGrid>
      <StyledH1 size="fit" margin="0 XL">
        Sharp Dance
      </StyledH1>
      <Nav
        size="auto"
        links={[
          { to: LANDING, label: "Home" },
          { to: BIOS, label: "Bio's" },
          { to: MEDIA, label: "Media" },
          { to: PRESS, label: "Press" },
          {
            to: EVENTS,
            label: "Events",
            sub: [
              { to: EVENTS, label: "Upcoming Performances" },
              { to: PAST_EVENTS, label: "Past Performances" }
            ]
          },
          { to: CLASSES, label: "Classes" },
          { to: ABOUT, label: "About" }
        ]}
      />
    </StyledGrid>
  );
};
