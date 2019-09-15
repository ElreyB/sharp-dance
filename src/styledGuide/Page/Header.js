import React from "react";
import styled from "styled-components/macro";
import { Nav } from "../Nav";
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

const StyledNav = styled(Nav)`
  position: fixed;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 1;
`;

export const Header = () => {
  return (
    <StyledNav
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
  );
};
