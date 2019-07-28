import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components/macro";
import { Nav } from "../Nav";
import { Button } from "../Button";
import { Grid } from "gymnast";
import {
  ABOUT,
  ADMIN,
  BIOS,
  CLASSES,
  EVENTS,
  LANDING,
  LOG_IN,
  MEDIA
} from "../../constants";

const StyledNav = styled(Nav)`
  ul {
    flex-direction: column;
    position: absolute;
    background-color: grey;
    // padding: 0px;
    left: -14px;
    width: 200px;
  }

  li {
    flex-basis: 100%;
    justify-content: center;
    margin: 0;
    border: 0;
  }
  a {
    text-align: center;
    flex-basis: 100%;
  }
  a:hover {
    font-size: 20px;
  }
`;

const DropDownButton = styled(Button)`
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  font-size: 20px;
  border: 0;
`;

export const DropDown = props => {
  console.warn(props);
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdown = useCallback(() => {
    setIsOpen(preState => !preState);
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <DropDownButton
        onClick={handleDropdown}
        onMouseOver={handleDropdown}
        padding={0}
        isOpen={isOpen}
      >
        nav Label
      </DropDownButton>
      {isOpen && (
        <StyledNav
          links={[
            { to: LANDING, label: "Home" },
            { to: BIOS, label: "Bio's" },
            { to: MEDIA, label: "Media" },
            { to: EVENTS, label: "Events" },
            { to: CLASSES, label: "Classes" },
            { to: ABOUT, label: "About" },
            { to: LOG_IN, label: "Login" },
            { to: ADMIN, label: "Admin" }
          ]}
        />
      )}
    </div>
  );
};

DropDown.defautProps = {
  size: 2,
  itemLinks: [
    { to: LANDING, label: "Home" },
    { to: BIOS, label: "Bio's" },
    { to: MEDIA, label: "Media" },
    { to: EVENTS, label: "Events" },
    { to: CLASSES, label: "Classes" },
    { to: ABOUT, label: "About" },
    { to: LOG_IN, label: "Login" },
    { to: ADMIN, label: "Admin" }
  ],
  label: "Nav label"
};
