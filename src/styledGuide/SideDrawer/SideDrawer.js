import { Grid } from "gymnast";
import React from "react";
import styled from "styled-components/macro";
import HamburgerButton from "../HamburgerButton";
import BackDrop from "./backDrop";
import FocusTrap from "focus-trap-react";
import { A } from "../A";

const ESCAPE_KEY = 27;
const Nav = styled.nav`
  height: 100%;
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

const SideDrawer = ({ show, links, onClick }) => (
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
            initialFocus: "button"
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
          </Grid>
        </FocusTrap>
      )}
    </Nav>
  </>
);

export default SideDrawer;
