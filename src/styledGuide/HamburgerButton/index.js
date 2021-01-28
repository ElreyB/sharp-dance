import React from "react";
import styled, { css } from "styled-components/macro";
import { func, bool } from "prop-types";
import { Button } from "../Button";

const Line = styled.div`
  width: 20px;
  height: 2px;
  background: ${({ theme }) => theme.colors.white};
`;

const StyledButton = styled(Button)`
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  padding: 4px;

  &:focus {
    border-radius: 4px;
    box-shadow: 0px 0px 0px 1px #fff inset;
    outline: none;
  }

  &:hover > ${Line} {
    background: ${({ theme }) => theme.colors.blue};
  }

  ${({ closed }) =>
    closed &&
    css`
      div:nth-child(1) {
        transform: rotate(-45deg) translate(-4px, 3px);
      }

      div:nth-child(2) {
        opacity: 0;
      }

      div:nth-child(3) {
        transform: rotate(45deg) translate(-4px, -4px);
      }
    `}
`;

const HamburgerButton = React.forwardRef(
  ({ onClick, closed = false, ...props }, ref) => (
    <StyledButton
      onClick={onClick}
      closed={closed}
      ref={ref}
      direction="column"
      {...props}
    >
      <Line />
      <Line />
      <Line />
    </StyledButton>
  )
);

HamburgerButton.propTypes = {
  onClick: func,
  closed: bool,
};

export default HamburgerButton;
