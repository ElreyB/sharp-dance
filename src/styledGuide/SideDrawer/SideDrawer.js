import React from "react";
import styled from "styled-components/macro";
import DrawerToggleButton from "../DrawerToggleButton";

const Nav = styled.nav`
  height: 100%;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  max-width: 400px;
  width: 70%;
  z-index: 100;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-out;
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MenuItem = styled.li`
  padding: 0 0.5rem;
  width: 100%;
  text-align: center;
`;

const Anchor = styled.a`
  color: #521751;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  display: block;

  &:hover,
  &:active {
    color: #fa923f;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const SideDrawer = ({ show, onClick }) => (
  <Nav show={show}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: "10px"
      }}
    >
      <DrawerToggleButton reverse onClick={onClick} />
    </div>
    <NavMenu>
      <MenuItem>
        <Anchor href="/">Products</Anchor>
      </MenuItem>
      <MenuItem>
        <Anchor href="/">User</Anchor>
      </MenuItem>
    </NavMenu>
  </Nav>
);

export default SideDrawer;
