import React from "react";
import styled from "styled-components/macro";

import { A } from "../A/A";
import { Label } from "../Label/Label";

const StyledLi = styled.li`
  border: 0px solid transparent;
  display: flex;
  flex-flow: row wrap;
  flex-grow: 0;
  flex-shrink: 0;
  width: auto;
  white-space: nowrap;

  & ul {
    display: none;
    position: absolute;
    top: 24px;

    &:before {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.white};
      border-left: 1px solid ${({ theme }) => theme.colors.white};
      border-right: 1px solid ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.black};
    }
  }
  & a:focus,
  &:hover > a,
  & li:hover a {
    color: ${({ theme }) => theme.colors.blue};
  }
  &,
  & a {
    z-index: 1;
  }
  &:hover ul {
    display: block;
  }
  &:hover ul {
    z-index: 2;
  }
`;

const StyledAnchor = styled(A)`
  flex-grow: 0;
  flex-shrink: 0;
  width: auto;
  white-space: nowrap;
`;

export const Li = ({ to, label, children, ...props }) => {
  return (
    <StyledLi {...props}>
      {to && <StyledAnchor to={to}>{label}</StyledAnchor>}
      {!to && <Label>{label}</Label>}
      {children}
    </StyledLi>
  );
};
