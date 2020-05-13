import { Grid } from "gymnast";
import React from "react";
import styled from "styled-components/macro";
import HamburgerButton from "../HamburgerButton";
import BackDrop from "./backDrop";
import FocusTrap from "focus-trap-react";
import { A } from "../A";
import { SocialIcons } from "../SocialIcons";
import {
  ABOUT,
  BIOS,
  CLASSES,
  CONTACT,
  DIANE,
  DONATIONS,
  EVENTS,
  MEDIA,
  PAST_EVENTS,
  PRESS,
  TICKETS,
} from "../../constants";

const ESCAPE_KEY = 27;
const Nav = styled.nav`
  height: 100%;
  overflow: auto;
  position: fixed;
  background-color: inherit;
  top: 0;
  left: 0;
  z-index: 100;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-out;
  border-right: 1px solid ${({ theme }) => theme.colors.white};
  width: 400px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const links = [
  { to: ABOUT, label: "About" },
  { to: TICKETS, label: "Tickets" },
  { to: DIANE, label: "Diane Sharp-Nachsin" },
  { to: BIOS, label: "Company" },
  { to: MEDIA, label: "Repertoire" },
  { to: PRESS, label: "Press" },
  { to: EVENTS, label: "Upcoming Performances" },
  { to: PAST_EVENTS, label: "Past Performances" },
  { to: CLASSES, label: "Classes" },
  { to: CONTACT, label: "Contact" },
  { to: DONATIONS, label: "Donations" },
];

const SideDrawer = ({ show, onClick }) => (
  <>
    {show && <BackDrop onClick={onClick} />}
    <Nav
      show={show}
      onKeyDown={({ keyCode }) => {
        if (keyCode === ESCAPE_KEY) {
          onClick();
        }
      }}
    >
      {show && (
        <FocusTrap
          focusTrapOptions={{
            escapeDeactivates: true,
            clickOutsideDeactivates: true,
            initialFocus: "button",
          }}
          onDeactivate={onClick}
        >
          <Grid paddingTop="M">
            <HamburgerButton onClick={onClick} closed />
            {links.map(({ to, label }) => (
              <A to={to} key={to} size={12} padding="S/2 M">
                {label}
              </A>
            ))}
            <SocialIcons paddingTop="M" />
          </Grid>
        </FocusTrap>
      )}
    </Nav>
  </>
);

export default SideDrawer;
