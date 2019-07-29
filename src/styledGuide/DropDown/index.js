import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { Nav } from "../Nav";
import { Button } from "../Button";

const StyledNav = styled(Nav)`
  ul {
    flex-direction: column;
    position: absolute;
    background-color: grey;
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
`;

const DropDownButton = styled(Button)`
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  font-size: 20px;
  border: 0;
`;

export const DropDown = ({ label, itemLinks, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdown = useCallback(() => {
    setIsOpen(preState => !preState);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <DropDownButton
        onMouseEnter={handleDropdown}
        onMouseLeave={handleDropdown}
        padding={0}
        isOpen={isOpen}
      >
        {label}
      </DropDownButton>
      {isOpen && (
        <StyledNav
          links={itemLinks}
          onMouseEnter={handleDropdown}
          onMouseLeave={handleDropdown}
        />
      )}
    </div>
  );
};

DropDown.propTypes = {
  itemLinks: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  label: PropTypes.string.isRequired
};
