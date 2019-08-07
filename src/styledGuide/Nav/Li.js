import React from "react";
import { useGrid } from "gymnast";
import styled from "styled-components";

import { A } from "../A";
import { Label } from "../Label";

const StyledLi = styled("li")`
  &,
  & a {
    z-index: 1;
  }
  &:hover ul {
    display: block;
  }
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
  &:hover > a,
  & li:hover a {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Li = ({ to, label, children, ...props }) => {
  const [, allProps] = useGrid({ size: "fit", margin: "0 M", ...props });

  return (
    <StyledLi {...allProps}>
      {to && (
        <A size="fit" to={to}>
          {label}
        </A>
      )}
      {!to && <Label size="fit">{label}</Label>}
      {children}
    </StyledLi>
  );
};
