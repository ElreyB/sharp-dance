import FocusTrap from "focus-trap-react";
import React from "react";
import styled from "styled-components/macro";
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
} from "../../constants";
import { A } from "../A";
import HamburgerButton from "../HamburgerButton";
import { SocialIcons } from "../SocialIcons";
import BackDrop from "./backDrop";

const ESCAPE_KEY = 27;
const Nav = styled.nav`
  height: 100%;
  overflow: auto;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.red};
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

const NavLink = styled(A)`
  flex-basis: 100%;
  max-width: 100%;
  padding: ${({ theme }) => `${theme.spacing.XS} ${theme.spacing.M}`};
`;

const StyledSocialIcons = styled(SocialIcons)`
  margin-top: ${({ theme }) => theme.spacing.M};
  width: 50%;
`;

const HamburgerWrapper = styled.div`
  padding: 8px 16px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const links = [
  { to: ABOUT, label: "About" },
  // { to: TICKETS, label: "Tickets" },
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
          <Links>
            <HamburgerWrapper>
              <HamburgerButton onClick={onClick} closed />
            </HamburgerWrapper>
            {links.map(({ to, label }) => (
              <NavLink to={to} key={to} onClick={() => onClick(false)}>
                {label}
              </NavLink>
            ))}
            <StyledSocialIcons />
          </Links>
        </FocusTrap>
      )}
    </Nav>
  </>
);

export default SideDrawer;
