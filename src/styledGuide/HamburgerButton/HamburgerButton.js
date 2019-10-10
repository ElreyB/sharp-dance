import React from "react";
import styled, { css } from "styled-components/macro";
import { Grid } from "gymnast";
import { func, bool } from "prop-types";
import { Button } from "../Button";

const StyledButton = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  @media (min-width: 769px) {
    display: none;
  }
  ${({ aimate }) =>
    aimate &&
    css`
      div:nth-child(1) {
        -webkit-transform: rotate(-45deg) translate(-6px, 5px);
        transform: rotate(-45deg) translate(-6px, 5px);
      }

      div:nth-child(2) {
        opacity: 0;
      }

      div:nth-child(3) {
        -webkit-transform: rotate(45deg) translate(-6px, -6px);
        transform: rotate(45deg) translate(-6px, -6px);
      }
    `}
`;

const Line = styled.div`
  width: 30px;
  height: 2px;
  background: ${({ aimate }) => (aimate ? "black" : "white")};
`;

const HamburgerButton = ({ onClick, aimate }) => {
  return (
    <StyledButton onClick={handleOnClick} aimate={aimate}>
      <Line aimate={aimate} />
      <Line aimate={aimate} />
      <Line aimate={aimate} />
    </StyledButton>
  );
};

HamburgerButton.propTypes = {
  onClick: func,
  aimate: bool
};

HamburgerButton.defaultProps = {
  aimate: false
};

export default HamburgerButton;
